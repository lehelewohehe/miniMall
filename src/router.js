import VueRouter from 'vue-router'

//导入依赖的组件
import homeContainer from './components/tabbar/homeContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodsList from './components/goods/goodsList.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContainer },
    { path: '/search', component: searchContainer },
    { path: '/member', component: memberContainer },
    { path: '/shopcar', component: shopcarContainer },
    { path: '/home/newslist', component: newsList },
    { path: '/home/newsinfo/:id', component: newsInfo },
    { path: '/home/photolist', component: photoList },
    { path: '/home/photoinfo/:id', component: photoInfo },
    { path: '/home/goodslist', component: goodsList }
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router