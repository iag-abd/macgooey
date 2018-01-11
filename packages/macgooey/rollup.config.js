import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

const config = {
  input: "src/index.js",
  output: {
    sourcemap: process.env.NODE_ENV !== "production" ? "inline" : false
  },
  name: "MacGooey",
  globals: {
    react: "React"
  },
  external: ["react"],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  watch: {
    include: "./src/**"
  }
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(uglify());
}

export default config;
