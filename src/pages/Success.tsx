import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, AlertCircle, Loader2, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface SessionStatus {
  sessionId: string;
  status: string;
  paymentStatus: string;
  customerEmail: string | null;
  customerName: string | null;
  productId: string | null;
  productName: string | null;
  fulfillmentStatus: string;
  supportEmail: string;
}

type PageState =
  | { status: "loading" }
  | { status: "missing" }
  | { status: "error"; message: string }
  | { status: "ready"; data: SessionStatus };

const copy = {
  ro: {
    loadingTitle: "Verificam comanda",
    loadingBody: "Confirmam plata si statusul livrarii.",
    missingTitle: "Lipseste sesiunea de plata",
    missingBody: "Linkul de confirmare este incomplet. Revino din emailul Stripe sau contacteaza-ne.",
    errorTitle: "Nu am putut verifica aceasta comanda",
    errorBody: "Plata poate fi in regula, dar nu am putut incarca statusul acum.",
    paidTitle: "Plata a fost confirmata",
    paidBody: "Iti trimitem produsul pe email imediat ce webhook-ul Stripe finalizeaza livrarea.",
    sentBody: "Emailul cu accesul la produs a fost trimis catre:",
    pendingTitle: "Plata este in curs de procesare",
    pendingBody: "Daca ai folosit o metoda cu confirmare intarziata, revino in cateva minute.",
    backToShop: "Inapoi la shop",
    supportLabel: "Suport",
    productLabel: "Produs",
    emailLabel: "Email",
  },
  en: {
    loadingTitle: "Checking your order",
    loadingBody: "We are confirming payment and fulfillment status.",
    missingTitle: "Missing checkout session",
    missingBody: "The confirmation link is incomplete. Return from the Stripe email or contact us.",
    errorTitle: "We could not verify this order",
    errorBody: "Your payment may still be fine, but we could not load the status right now.",
    paidTitle: "Payment confirmed",
    paidBody: "We are sending your product by email as soon as the Stripe webhook completes fulfillment.",
    sentBody: "The product email was sent to:",
    pendingTitle: "Payment is still processing",
    pendingBody: "If you used a delayed payment method, check back in a few minutes.",
    backToShop: "Back to shop",
    supportLabel: "Support",
    productLabel: "Product",
    emailLabel: "Email",
  },
  es: {
    loadingTitle: "Verificamos tu pedido",
    loadingBody: "Confirmamos el pago y el estado de entrega.",
    missingTitle: "Falta la sesion de pago",
    missingBody: "El enlace de confirmacion esta incompleto. Vuelve desde el email de Stripe o contactanos.",
    errorTitle: "No pudimos verificar este pedido",
    errorBody: "El pago puede estar correcto, pero no pudimos cargar el estado ahora.",
    paidTitle: "Pago confirmado",
    paidBody: "Enviaremos tu producto por email en cuanto el webhook de Stripe complete la entrega.",
    sentBody: "El email con el producto fue enviado a:",
    pendingTitle: "El pago sigue procesandose",
    pendingBody: "Si usaste un metodo con confirmacion retrasada, vuelve en unos minutos.",
    backToShop: "Volver a la tienda",
    supportLabel: "Soporte",
    productLabel: "Producto",
    emailLabel: "Email",
  },
} as const;

const Success = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const [searchParams] = useSearchParams();
  const [state, setState] = useState<PageState>({ status: "loading" });

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setState({ status: "missing" });
      return;
    }

    let isMounted = true;

    const run = async () => {
      try {
        const response = await fetch(
          `/.netlify/functions/stripe-session-status?session_id=${encodeURIComponent(sessionId)}`,
        );
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Unknown error");
        }

        if (isMounted) {
          setState({ status: "ready", data: payload });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            status: "error",
            message: error instanceof Error ? error.message : "Unknown error",
          });
        }
      }
    };

    run();

    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  const renderBody = () => {
    if (state.status === "loading") {
      return (
        <>
          <Loader2 className="w-12 h-12 text-luxury animate-spin mx-auto mb-6" />
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            {text.loadingTitle}
          </h1>
          <p className="text-muted-foreground">{text.loadingBody}</p>
        </>
      );
    }

    if (state.status === "missing") {
      return (
        <>
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-6" />
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            {text.missingTitle}
          </h1>
          <p className="text-muted-foreground">{text.missingBody}</p>
        </>
      );
    }

    if (state.status === "error") {
      return (
        <>
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-6" />
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            {text.errorTitle}
          </h1>
          <p className="text-muted-foreground mb-4">{text.errorBody}</p>
          <p className="text-sm text-muted-foreground">{state.message}</p>
        </>
      );
    }

    const { data } = state;
    const isPaid = data.paymentStatus === "paid";
    const isSent = data.fulfillmentStatus === "sent";

    return (
      <>
        {isPaid ? (
          <CheckCircle2 className="w-12 h-12 text-luxury mx-auto mb-6" />
        ) : (
          <Loader2 className="w-12 h-12 text-luxury animate-spin mx-auto mb-6" />
        )}

        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          {isPaid ? text.paidTitle : text.pendingTitle}
        </h1>

        <p className="text-muted-foreground mb-8">
          {isPaid ? (isSent ? text.sentBody : text.paidBody) : text.pendingBody}
        </p>

        <div className="text-left space-y-3 max-w-lg mx-auto">
          {data.productName && (
            <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
              <span className="text-sm text-muted-foreground">{text.productLabel}</span>
              <span className="text-sm font-medium text-right">{data.productName}</span>
            </div>
          )}

          {data.customerEmail && (
            <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
              <span className="text-sm text-muted-foreground">{text.emailLabel}</span>
              <span className="text-sm font-medium text-right">{data.customerEmail}</span>
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <span className="text-sm text-muted-foreground">{text.supportLabel}</span>
            <a
              href={`mailto:${data.supportEmail}`}
              className="text-sm font-medium text-luxury hover:underline"
            >
              {data.supportEmail}
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <Helmet>
        <title>Payment Status</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <Card className="shadow-luxury">
          <CardContent className="p-8 md:p-12 text-center">
            {renderBody()}

            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/shop">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {text.backToShop}
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={`mailto:${
                  state.status === "ready" ? state.data.supportEmail : "office@designinteriorbucuresti.ro"
                }`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-luxury transition-colors"
              >
                <Mail className="w-4 h-4" />
                {state.status === "ready"
                  ? state.data.supportEmail
                  : "office@designinteriorbucuresti.ro"}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;
