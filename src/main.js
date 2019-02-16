import Vue from 'vue'
import App from '@/App'

import CjPlugin from '@/plugins/Cj'
import store from '@/store'
import WXP from 'minapp-api-promise'
import MpvueRouterPatch from 'mpvue-router-patch'
import './styles/iconfont/iconfont.css'
import './styles/default.scss'
import './styles/weui.css'

Vue.use(CjPlugin);
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false;
Vue.prototype.$wx = WXP;
App.store = store;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
