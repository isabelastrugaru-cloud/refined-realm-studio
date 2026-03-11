import { useParams, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useLanguage();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const tp = (field: string) => t(`products.${product.translationKey}.${field}`);

  const features = [tp("feature1"), tp("feature2"), tp("feature3"), tp("feature4")];

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.category.some((c) => c !== "toate" && product.category.includes(c))
    )
    .slice(0, 3);

  const categoryLabels: Record<string, string> = {
    pachete: t("shop.packages"),
    ebook: t("shop.ebooks"),
    template: t("shop.templates"),
    cad: t("shop.cadFiles"),
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-luxury transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("shop.backToShop")}
        </Link>

        {/* Product header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {product.category
              .filter((c) => c !== "toate")
              .map((c) => (
                <Badge key={c} variant="secondary">
                  {categoryLabels[c] || c}
                </Badge>
              ))}
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {tp("title")}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {tp("description")}
          </p>

          <p className="text-4xl font-bold text-luxury">{product.price}</p>
        </div>

        {/* Long description */}
        <div className="mb-12">
          <p className="text-foreground leading-relaxed text-lg">
            {tp("longDescription")}
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="font-playfair text-2xl font-bold mb-6">
            {t("shop.whatIsIncluded")}
          </h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-luxury/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-luxury" />
                </div>
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buy button */}
        <div className="mb-8">
          {product.stripeLink ? (
            <Button variant="luxury" size="xl" className="w-full md:w-auto" asChild>
              <a href={product.stripeLink} target="_blank" rel="noopener noreferrer">
                {t("shop.buyProduct")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="xl" className="w-full md:w-auto" disabled>
              {t("shop.comingSoon")}
            </Button>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-luxury" />
            {t("shop.securePayment")}
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-luxury" />
            {t("shop.instantDelivery")}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-8">
              {t("shop.relatedProducts")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Card
                  key={rp.id}
                  className="flex flex-col hover:shadow-luxury transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl">
                      {t(`products.${rp.translationKey}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-2xl font-bold text-luxury">{rp.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/shop/${rp.id}`}>
                        {t("shop.viewProduct")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
