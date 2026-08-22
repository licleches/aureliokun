import type { Plugin, ViteDevServer } from "vite";

const TRAVERSAL_PATTERNS = [
  /\.\.\//,
  /\.\.\\/,
  /%2e%2e/i,
  /%c0%ae/i,
  /%252e%252e/i,
  /%c0%ae%c0%ae/i,
  /%2f/i,
];

const SENSITIVE_PATTERNS = [
  /etc\/passwd/,
  /etc\/shadow/,
  /etc\/hosts/,
  /\.env/,
  /\.git\//,
  /\.svn\//,
  /boot\.ini/,
  /windows\\/i,
  /proc\/self/,
  /sys\/class/,
];

export function viteSecurity(): Plugin {
  return {
    name: "vite-security",
    enforce: "pre",

    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const rawPath = req.url || "";

        const decodedPath = decodeURIComponent(rawPath);

        const hasTraversal = TRAVERSAL_PATTERNS.some((p) => p.test(rawPath));
        const hasSensitive = SENSITIVE_PATTERNS.some((p) => p.test(decodedPath));
        const isDoubleEncoded = /%25[0-9a-f]{2}/i.test(rawPath);

        if (hasTraversal || hasSensitive || isDoubleEncoded) {
          console.warn(
            `[VITE-SECURITY] Path traversal blocked: ${req.method} ${rawPath}`
          );
          res.statusCode = 403;
          res.setHeader("Content-Type", "text/plain");
          res.end("Forbidden");
          return;
        }

        next();
      });
    },
  };
}
