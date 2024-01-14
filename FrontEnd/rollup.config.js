import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image"

export default {
    input: "index.js",
    output: {
        file: "dist/index.js",
        format: "iife",
        name: "MyLibrary"
    },
    plugins: [
        resolve(),
        commonjs(),
        image(),
        babel({
            exclude: "node_modules/**"
        })
    ],
};