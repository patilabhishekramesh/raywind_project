import { handleEnquiry } from "./enquiry.js";

function isEnquiryPath(url) {
  const path = (url || "").split("?")[0];
  return path === "/api/enquiry" || path.endsWith("/api/enquiry");
}

export function enquiryApiPlugin(env) {
  const middleware = async (req, res, next) => {
    if (!isEnquiryPath(req.url)) {
      next();
      return;
    }
    await handleEnquiry(req, res, env);
  };

  return {
    name: "enquiry-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
