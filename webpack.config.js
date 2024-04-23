
const path=require("path");
module.exports={
    entry:'./src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('dist'),
      publicPath: '/',
    },
    module:{
        rules:[
            {
              test: /\.(js|jsx)$/,
              loader:"babel-loader",
                exclude:"/node_modules/",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
              },
              {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
        ]
    }
}