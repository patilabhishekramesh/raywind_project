import { createReadStream, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import { loadEnv } from "vite";
import { handleEnquiry } from "./enquiry.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(root, "dist");
const env = loadEnv(process.env.NODE_ENV || "production", root, "");
const port = Number(process.env.PORT || 4173);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function isEnquiryPath(pathname) {
  return pathname === "/api/enquiry";
}

function safePath(pathname) {
  const filePath = join(distDir, decodeURIComponent(pathname));
  if (!filePath.startsWith(distDir)) return null;
  return filePath;
}

const server = createServer(async (req, res) => {
  const host = req.headers.host || "localhost";
  const url = new URL(req.url || "/", `http://${host}`);

  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  if (isEnquiryPath(url.pathname)) {
    await handleEnquiry(req, res, env);
    return;
  }

  let filePath = safePath(url.pathname);
  if (!filePath) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }

  if (url.pathname.endsWith("/")) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath)) {
    filePath = join(distDir, "index.html");
  }

  const ext = extname(filePath).toLowerCase();
  if (MIME[ext]) res.setHeader("Content-Type", MIME[ext]);
  if (ext === ".html") {
    res.setHeader("Cache-Control", "no-cache");
  } else if (/\.(js|css|jpg|jpeg|png|webp|svg|woff2)$/.test(ext)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }

  createReadStream(filePath)
    .on("error", () => {
      res.statusCode = 500;
      res.end("Server error");
    })
    .pipe(res);
});

if (!existsSync(join(distDir, "index.html"))) {
  console.error("Missing production build. Run `npm run build` first.");
  process.exit(1);
}

server.listen(port, "0.0.0.0", () => {
  console.log(`Raywind site live on http://0.0.0.0:${port}`);
});
