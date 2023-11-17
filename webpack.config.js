// webpack.config.js
const path = require("path");
module.exports = {
  // ...other configurations
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // ...other rules
    ],
  },
  devServer: {
    static: path.join(__dirname, "./template"), // Set the path to your HTML file
    port: 3000, // Specify the port
    open: true, // Open the default browser when the server starts
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // ...other configurations
};
