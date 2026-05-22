import cors from "cors";
import express from "express";
import type { Express } from "express";

const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174"
];

function getAllowedOrigins() {
  return [process.env.FRONTEND_URL, process.env.ADMIN_URL].filter(
    (origin): origin is string => Boolean(origin)
  );
}

export function createApp(): Express {
  const app = express();
  const allowedOrigins = getAllowedOrigins();

  app.use(
    cors({
      origin: allowedOrigins.length ? allowedOrigins : defaultAllowedOrigins
    })
  );
  app.use(express.json());

  app.get("/health", (_request, response) => {
    response.json({ status: "ok" });
  });

  return app;
}
