// console.log('ok')
// class Person {
//   // 使用 static 关键字，可以定义静态属性
//   // 所谓的静态属性，就是 可以直接通过 类名， 直接访问的属性
//   // 实例属性： 只能通过类的实例，来访问的属性，叫做实例属性
//   static info = { name: 'zs', age: 20 }
// }

// // 访问 Person 类身上的  info 静态属性
// console.log(Person.info)
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import app from './App.vue'
Vue.use(MintUI)

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})