const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    mode:"production",
    entry:{
        index:"./index.js",
        anotherpage:"./anotherpage/anotherpage.js"
    },
    output:{
        path:`${__dirname}/build`,
        filename:"[name]-main.js"
    },

    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {loader:"css-loader"},
                    {loader:"less-loader"}
                ]
            }
        ]
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name].css"
        })
    ],

    watch:true
};