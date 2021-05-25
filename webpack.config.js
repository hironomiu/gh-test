// const path = require("path")

import path from "path"

const dirname = path.dirname(new URL(import.meta.url).pathname)

// module.exports = {
export default {
  entry: "./src/main.js",

  output: {
    path: path.resolve(dirname, "build"),
    filename: "bundle.js",
  },
}
