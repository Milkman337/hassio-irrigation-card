import * as esbuild from "esbuild";

const watch = process.argv.includes("--watch");

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["src/hassio-irrigation-card.ts"],
  bundle: true,
  outfile: "dist/hassio-irrigation-card.js",
  format: "esm",
  target: "es2021",
  minify: !watch,
  sourcemap: true,
  legalComments: "none",
  define: {
    "process.env.NODE_ENV": watch ? '"development"' : '"production"',
  },
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log("watching for changes...");
} else {
  await esbuild.build(options);
  console.log("built dist/hassio-irrigation-card.js");
}
