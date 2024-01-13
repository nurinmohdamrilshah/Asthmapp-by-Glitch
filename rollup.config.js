import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
    input: "./js/index.js",
    output: {
        file: "./js/dist/index.js",
        format: "cjs"
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**"
        })
    ],
};