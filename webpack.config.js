


const path=require("path");
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"public"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:"/node_modules/"
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