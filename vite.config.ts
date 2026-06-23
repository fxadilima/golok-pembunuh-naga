import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import mdx from 'npm:@mdx-js/rollup';
import remarkGfm from 'npm:remark-gfm';
import rehypeHighlight from 'npm:rehype-highlight';

export default defineConfig({
  plugins: [
    fresh(),
    mdx({
      jsxImportSource: 'preact',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
      mdxExtensions: [ ".mdx" ],
    }),
  ],
  esbuild: {
      // Memastikan Esbuild (di balik layar Vite) mengonversi JSX dengan benar
      jsxFactory: "h",
      jsxFragment: "Fragment",
    },
});
