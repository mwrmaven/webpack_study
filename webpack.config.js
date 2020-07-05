// 路径操作，node中的path模块
const path = require('path');
// 启用热更新的第2步----------
const webpack = require('webpack');
// 导入在内存中生成html页面的插件
// 只要是插件，就一定要放到plugins节点中去
// 这个插件的两个作用
// 1、自动在内存中根据指定的页面生成一个内存页面
// 2、自动将打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');

// 通过node中的模块module操作，向外暴露了一个配置对象
module.exports = {
    // 需要手动指定出口和入口
    entry: path.join(__dirname, './src/main.js'),// 表示要使用webpack打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定打包好的文件输出到哪个目录中去
        filename: "bundle.js" // 指定输出的文件的名称
    },
    devServer: { // 这是配置webpack-dev-server命令参数的形式
        //  --open --port 8088 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置服务启动的端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新的第1步-----
    },
    plugins: [ // 配置插件
        new webpack.HotModuleReplacementPlugin(), // new一个热更新的模块对象，这是启用热更新的第3步，启用完成----
        new htmlWebpackPlugin({ // 根据一个模版页面创建一个在内存中生成html页面的插件  html-webpack-plugin
            template: path.join(__dirname, './src/index.html'), // 指定模版页面，将来会根据指定的页面，去生成内存中的页面
            filename: "index.html" // 指定内存中生成的页面的名称
        })
    ],
    module: { // 这个节点，用于配置所有第三方模块加载器
        rules: [
            // use中的调用顺序为从右向左加载调用
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 前面test匹配到的类型的文件(test为正则表达式)，由后面use使用的加载器加载
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, // 这是配置处理.less文件的第三方loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']} // 配置处理 .scss文件的第三方loader
        ]
    }
};

// 当在控制台直接输入webpack命令执行的时候
// 1、首先，webpack发现我们并没有通过命令的形式指定入口和出口；
// 2、webpack就会去项目的根目录中查找一个叫做 webpack.config.js配置文件
// 3、当找到配置文件后，webpack会去解析执行这个配置文件，得到一个配置对象
// 4、当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建





