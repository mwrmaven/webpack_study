// 这是 main.js 是项目的js入口文件
// 1、导入jquery，从node_modules导入jquery包，用$变量名接收
// import 。。。 from 。。。 是es6中导入模块的方式，相当于使用requie方式导入 const $ = require('jquery')
// 由于es6的代码比较高级，浏览器无法解析
import $ from 'jquery' // js类的模块使用 import xxx from xxx 的格式；非js类的模块，例如下面的css文件，直接使用import导入即可

// 使用import语法导入css样式表
import './css/index.css'
// 注意，webpack默认只能打包处理js类型的文件，无法处理其他非js类型的文件
// 如果要处理非js类型的文件，需手动安装一些合适的第三方加载器
// 1、如果要打包处理css文件，需要安装 style-loader 和 css-loader两个加载器 npm i style-loader css-loader -D
// 2、打开webpack.config.js配置文件，新增一个配置节点，叫做 module，它是一个对象，
//    在这个module对象上，有个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则；

// 注意，webpack处理第三方文件类型的过程：
// 1、发现要处理的这个文件不是js文件，就去配置文件中查找有没有对应的第三方loader规则
// 2、如果能找到对应的规则，就会调用对应的loader处理这种文件类型；
// 3、在调用loader的时候，是从后往前调用的；
// 4、最后的一个loader调用完毕后，会将处理的结果直接交给webpack进行打包构建，最终输出到bundle.js中去

import './css/index.less'
// npm i less-loader -D
// npm i less -D , less 是 less-loader的内部依赖

import './css/index.scss'
// npm i sass-loader -D
// npm i node-sass -D ， node-sass 是 sass-loader的内部依赖

import 'bootstrap/dist/css/bootstrap.css'
// 如果要通过路径的形式，去引入 node_modules中相关的文件；
// 可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后后面跟上具体的文件路径
// 不写node_modules，默认就会去node_modules中查找



$(function () {
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634';
    })
});

// 使用webpack-dev-server 这个工具来实现自动打包、编译的功能
// 1、安装命令 npm i webpack-dev-server -D 将这个工具安装到项目的开发本地
// 2、安装完毕后，这个工具的用法和webpack的用法完全一样
// 3、由于我们在项目中本地安装的 webpack-dev-server，所以无法将它作为脚本命令，在终端中直接运行（只有那些安装全局 -g 的工具，才能在终端中正常执行）
// 4、注意：webpack-dev-server 这个工具，如果想要正常运行，要求在本地项目中必须安装webpack
// 5、webpack-dev-server帮我们打包生成的bundle.js文件并没有存放到实际的物理磁盘上，
//    而是直接托管到了电脑的内存中，所以，我们在项目的根目录中找不到这个打包好的bundle.js
//    （使用html-webpack-plugin插件根据html页面生成一个页面放到内存中）
// 6、我们可以认为 webpack-dev-server 将打包好的文件以一种虚拟的方式托管到了项目的根目录中，
//    虽然看不到，但可以认为和dist src node_modules 平级，有一个看不见的文件叫 bundle.js
// 7、webpack-dev-server --open 打包构建后打开浏览器
// 8、webpack-dev-server --port 8000 指定项目运行暴露的端口号
// 9、webpack-dev-server --hot 热部署，对代码打补丁，并不重新生成
// 10、webpack-dev-server --contentBase src 指定项目在浏览器打开的路径（默认路径为项目的根目录）
// 11、在配置文件中可以配置 devServer以简化webpack-dev-server命令，但是配置较为复杂，建议使用webpack-dev-server + 参数的形式


// class关键字是es6中提供的新语法，是用来实现es6中面向对象编程的方式
class Person{
    static info = {name: 'zs', age: 20}
}

console.log(Person.info);
// 在webpack中，默认只能处理一部分es6的新语法，一些更高级的es6语法或者es7语法，webpack是处理不了的；
// 这时候，就需要借助于第三方的loader，来帮助webpack处理这些高级的语法，当第三方loader把高级语法转为低级语法后，
// 会将结果交给webpack去打包到bundle.js中
// 1、通过 Babel，可以将高级语法转换为低级语法，webpack中可以运行如下两套命令，安装两套包去安装Babel相关的loader：
// 1.1、npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2、npm i babel-preset-env babel-preset-stage-0 -D
// 2、打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则；
// 2.1、{test: /\.js$/, use: 'babel-loader', exclude:/node_modules/}
// 2.2、注意：在配置babel的loader规则的时候，必须将node_modules目录通过exclude选项排除掉，原因如下：
//      2.2.1 如果不排除node_modules，则babel会将node_modules中所有的第三方js文件，都打包编译，这样，非常消耗cpu，同时，打包速度非常慢；
//      2.2.2 即使最终，babel将所有的node_modules中的js转化完成，但最终，项目也无法正常运行
// 3、在项目的根目录中新建一个 .babelrc 的配置文件，这个配置文件属于json格式
//  3.1 在 .babelrc 中写：(presets可以看作是语法)
// {
//     "presets": ["env", "stage-0"],
//     "plugins": ["transform-runtime"]
// }














