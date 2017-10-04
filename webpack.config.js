var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: "./app/index.js",
 output: {
   path: path.resolve(__dirname, "dist"),
   filename: "index_bundle.js"
 },
 resolve: {
   extensions: ["*",".js", "jsx"]
 },
 module: {
   rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]}
   ]
 },
 plugins: [new HtmlWebpackPlugin({
   template: "app/index.html"
 })]
};
