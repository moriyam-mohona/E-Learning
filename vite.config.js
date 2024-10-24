// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: "/E-Learning/",
//   plugins: [react()],
// });

// vite.config.js
// export default {
//   base: '/your-repo-name/', // replace 'your-repo-name' with the actual repo name
// }

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // Use the base property for production only
// export default defineConfig({
//   // base: process.env.NODE_ENV === "production" ? "/E-Learning/" : "/", // Adjusts based on the environment
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
});
