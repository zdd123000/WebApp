let path=require('path');//解析绝对路径
let htmlWebpackPlugin=require('html-webpack-plugin');
let extractTextWebpackPlugin =require('extract-text-webpack-plugin')
let extract=new extractTextWebpackPlugin('build.css')
module.exports={
    //入口
    entry:{
        index:'./app/index.js',
        vendor:['react','react-dom' ,'redux','react-redux','react-router-dom']
    },
//    出口
    output: {
filename:'[name].js',//打包出来的文件名  写name就是入口是什么名 出口就是什么名
        path:path.resolve('dist')//转化路径
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:extract.extract(['css-loader',{
                loader:'postcss-loader',
                options:{
                    plugins:[require('autoprefixer')]
                }
            },'less-loader'])}
        ]
    },
    plugins:[
        extract,
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devServer: {
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};
