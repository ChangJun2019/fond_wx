import config from '@/config.js'
import Base64 from "base-64";
/**
 * 小程序的登录获取登录凭证
 * @export
 * @returns
 */
export function getLoginCode () {
  return new Promise((resolve, reject) => {
    wx.login({
      success: function (res) {
        resolve(res.code)
      },
      fail: function (e) {
        reject(e)
      }
    })
  })
}

/**
 * @param {*} url [请求地址]
 * @param {*} method [请求方法]
 * @param {*} data [请求数据]
 * @returns  Promise
 */
export function request (url, method, data) {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('token') || ''
    const sToken = Base64.encode(`${token}:`);
    wx.request({
      method,
      header: {
        Authorization: `basic ${sToken}`
      },
      data,
      url: config.host + url,
      success: function (res) {
        switch (res.data.error_code) {
          case 1002:
            showText('token无效')
            break
          case 999:
            showText('服务器错误')
            break
          case 1000:
            showText('请求参数错误')
            break
          case 1001:
            showText('未找到该资源')
            break
          case 1004:
            showText('禁止访问')
            break
          default:
            resolve(res.data)
        }
      }
    })
  })
}

/**
 * 小程序登录请求
 * 因为初登录以外其它的请求需携带HTTPBASIC身份令牌
 * @param {*} url
 * @param {*} method
 * @param {*} openid
 * @param {*} data
 * @returns
 */
export function loginRequest (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data,
      url: config.host + url,
      success: function (res) {
        resolve(res.data)
      }
    })
  })
}

/**
 * 消息提示框
 * @param {*} text [标题]
 */
export function showText (text) {
  wx.showToast({
    title: text,
    icon: 'none',
    duration: 3000
  })
}
