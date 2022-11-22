
module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test:  /\.tsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.web.js', ".ts", ".tsx", ".js", ".json", ],
    alias: {
      'react-native$': 'react-native-web'
    },
  },
  target: ["web", "es5"],
};
