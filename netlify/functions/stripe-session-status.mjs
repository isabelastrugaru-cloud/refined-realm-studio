import { buildSessionSummary } from "./_lib/fulfillment.mjs";

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  const sessionId = event.queryStringParameters?.session_id;

  if (!sessionId || !sessionId.startsWith("cs_")) {
    return json(400, { error: "Missing or invalid session_id" });
  }

  try {
    const summary = await buildSessionSummary(sessionId);
    return json(200, summary);
  } catch (error) {
    const statusCode = error.statusCode === 404 ? 404 : 500;
    return json(statusCode, { error: error.message });
  }
};
