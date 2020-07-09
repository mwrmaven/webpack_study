// node中向外暴露接口、方法、对象的形式
// module.exports = {}


// ES6中导入模块使用 import 模块名称 from '模块标识符'
//                import '表示路径'
// ES6中，使用 export default 和 export 向外暴露成员

var info = {
    name: 'zs',
    age: 20
}

export default info

export var title = 'export暴露的成员';
export var tstitle = '测试按需导出';
// TODO 注意
// export default 向外暴露的成员（不管暴露的成员叫什么名字），可以使用任意的变量来接收
// 每个module模块中只能允许使用 export default 向外暴露一次
// 在一个模块中可以同时使用 export default 和 export 向外暴露成员
// 使用export向外暴露的成员，只能使用大括号的形式来接收，这种形式叫做 "按需导出"，且接收的变量名称要与暴露出去的变量名称一致，例如 import {title, tstitle} from './test'
//                                                                 或使用 as 来起个别名，例如 import {title as t123, tstitle} from './test'
// export 可以向外暴露多个成员，同时，如果某些成员，在import的时候不需要，则可以不在 {} 中定义
//

// 在node中，使用 var test = require('模块标识符') 导入模块
// module.exports 和 exports 来暴露成员
