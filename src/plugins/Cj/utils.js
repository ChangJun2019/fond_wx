import moment from 'moment'


// 微信加载框
function showLoading (title) {
  wx.showLoading({
    title
  })
}

/**
 * 存储
 * @param key
 * @param data
 */
function setStorageSync (key, data) {
  try {
    wx.setStorageSync(key, data)
  } catch (e) {
    console.log('设置存储时报错')
  }
}

function formatTimeForArrary (arrary) {
  const arr = [...arrary]
  arr.forEach(item => {
    item.update_time = moment.unix(item.update_time).fromNow()
  })
  return arr
}

// 微信浮层
function showToast (title, icon = 'success') {
  wx.showToast({
    title,
    icon,
    duration: 2000,
    mask: true
  })
}

// 微信弹窗
function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

function checkPhone (value) {
  if (!/^1[34578]\d{9}$/.test(value)) {
    return false
  }
  return true
}

export default {
  showLoading,
  showToast,
  showModal,
  setStorageSync,
  checkPhone,
  formatTimeForArrary
}
