const BASE = import.meta.env.BASE_URL;

/**
 * Resolves a public-folder path against the deployment base so the site works
 * both at the domain root and under a GitHub Pages sub-path.
 */
export function asset(path) {
  return `${BASE}${String(path).replace(/^\/+/, "")}`;
}
