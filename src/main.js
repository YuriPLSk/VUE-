 // 入口文件
import Vue from 'vue'   

//导入MUI样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//定义全局过滤器 （如果获取到了远程假数据   则可以用过滤器在v-for循环
// 出的列表中用过滤器 将时间格式化）
// import moment from 'moment'
// Vue.filter('dataFormat',function{dataStr,pattern="YYYY--MM--DD HH:mm:ss"}
// {return moment(dataStr).format(pattern) })

//1.1导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//2.1导入Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入App根组件
import app from './app.vue'

//导入Mint-UI组件并注册
import {Header, Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//1.2导入自己的路由模块
import router from './router.js'


var vm=new Vue({
	el:"#app",
	render:c=>c(app),
	router//1.4 挂载路由到VM
})