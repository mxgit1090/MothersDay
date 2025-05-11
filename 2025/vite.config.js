import { defineConfig } from "vite";
import { resolve } from "path";

// Determine base URL based on environment
const getBaseUrl = () => {
  // If in development environment (using live-server), use relative path
  if (process.env.NODE_ENV === "development") {
    return "/";
  }
  // Use GitHub Pages path for production environment
  return "/MothersDay/2025/";
};

export default defineConfig({
  base: getBaseUrl(), // 動態設置 base URL
  build: {
    outDir: "dist", // 輸出目錄
    assetsDir: "assets", // 靜態資源目錄
    emptyOutDir: true, // 構建前清空輸出目錄
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || assetInfo.names?.[0] || "";
          if (name === "style.css") {
            return "assets/css/[name][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(name)) {
            return "assets/images/[name][extname]";
          }
          return "assets/[name][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  publicDir: "public", // 指定 public 目錄
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 設置 @ 別名指向 src 目錄
    },
  },
});
