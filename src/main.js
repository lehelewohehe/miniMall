// console.log('ok')
// class Person {
//   // 使用 static 关键字，可以定义静态属性
//   // 所谓的静态属性，就是 可以直接通过 类名， 直接访问的属性
//   // 实例属性： 只能通过类的实例，来访问的属性，叫做实例属性
//   static info = { name: 'zs', age: 20 }
// }

// // 访问 Person 类身上的  info 静态属性
// console.log(Person.info)
//导入依赖的包
import Vue from 'vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


//在vue上挂载导入的包
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)

//配置全局请求的根路径
Vue.http.options.root = 'http://localhost:2000'

//导入依赖的样式
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


//导入依赖的组件
import app from './App.vue'
import comment from './components/subcomponents/comment.vue'
import { Swipe, SwipeItem, Button } from 'mint-ui'

//注册组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component('comment-box', comment)





//导入路由
import router from './router.js'


var vm = new Vue({
  el: '#app',
  router,
  render: c => c(app)
})