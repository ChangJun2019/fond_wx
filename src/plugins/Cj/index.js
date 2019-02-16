// iBoxPlugin
import { getLoginCode, loginRequest, request } from './request.js'
import utils from './utils'

export default {
  /**
   * 自定义方法
   * 组件内使用： this.$Cj.showLoading
   * 全局使用：Vue.Cj.showLoading
   */
  install (Vue) {
    const Cj = {
      ...utils,
      getLoginCode, // 获取登录凭证
      loginRequest, // 登录请求
      request
    }
    Vue.Cj = Cj
    Vue.prototype.$Cj = Cj
  }
}
