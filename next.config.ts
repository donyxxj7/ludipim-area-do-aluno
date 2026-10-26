import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/ludipim-area-do-aluno" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages ? { output: "export" as const, basePath, trailingSlash: true } : {}),
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
