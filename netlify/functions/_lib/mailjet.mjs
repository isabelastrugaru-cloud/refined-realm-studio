import { getEnv, getRequiredEnv, getSiteUrl, getSupportEmail } from "./env.mjs";

const mailjetSendUrl = "https://api.mailjet.com/v3.1/send";

const buildMailjetAuthHeader = () => {
  const apiKey = getRequiredEnv("MAILJET_API_KEY");
  const apiSecret = getRequiredEnv("MAILJET_API_SECRET");

  return `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;
};

export const sendFulfillmentEmail = async ({
  customerEmail,
  customerName,
  product,
  fulfillmentUrl,
}) => {
  const fromEmail = getRequiredEnv("MAILJET_FROM_EMAIL");
  const fromName = getEnv("MAILJET_FROM_NAME") || "Jubilee Luxury Design";
  const supportEmail = getSupportEmail();
  const siteUrl = getSiteUrl();
  const subject = `Comanda ta este gata: ${product.stripeProductName}`;

  const textPart = [
    `Multumim pentru comanda la Jubilee Luxury Design.`,
    "",
    `Produs: ${product.stripeProductName}`,
    `Descarcare: ${fulfillmentUrl}`,
    "",
    `Daca ai nevoie de ajutor, scrie-ne la ${supportEmail}.`,
    `Site: ${siteUrl}`,
  ].join("\n");

  const htmlPart = [
    `<p>Multumim pentru comanda la <strong>Jubilee Luxury Design</strong>.</p>`,
    `<p><strong>Produs:</strong> ${product.stripeProductName}</p>`,
    `<p><a href="${fulfillmentUrl}">Acceseaza produsul cumparat</a></p>`,
    `<p>Daca ai nevoie de ajutor, scrie-ne la <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>`,
    `<p><a href="${siteUrl}">${siteUrl}</a></p>`,
  ].join("");

  const response = await fetch(mailjetSendUrl, {
    method: "POST",
    headers: {
      Authorization: buildMailjetAuthHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Messages: [
        {
          From: {
            Email: fromEmail,
            Name: fromName,
          },
          To: [
            {
              Email: customerEmail,
              Name: customerName || customerEmail,
            },
          ],
          Subject: subject,
          TextPart: textPart,
          HTMLPart: htmlPart,
        },
      ],
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorText =
      payload?.Messages?.[0]?.Errors?.map((error) => error.ErrorMessage).join(", ") ||
      payload?.ErrorMessage ||
      response.statusText;

    throw new Error(`Mailjet send failed: ${errorText}`);
  }

  return payload;
};
