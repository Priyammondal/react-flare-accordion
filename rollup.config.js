import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import analyze from "rollup-plugin-analyzer";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import cssnano from "cssnano";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: false,
  },
  plugins: [
    analyze({ summaryOnly: true }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    PeerDepsExternalPlugin(),
    terser({
      compress: {
        drop_console: true, // Remove console logs
        passes: 2, // Try multiple passes to compress more
      },
      mangle: {
        toplevel: true, // Shorten top-level variable names
      },
    }),
    url({ include: ["**/*.svg"], limit: 10000 }),
    postcss({
      plugins: [cssnano()],
      minimize: true,
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead",
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
        "@babel/preset-react",
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
