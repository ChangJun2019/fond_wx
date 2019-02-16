/**
 * 获取用户的设备高度
 */
export function getSystemHeight () {
  let height = 0
  wx.getSystemInfo({
    success: res => {
      height = res.windowHeight
    }
  })
  return height
}

/**
 * 跳转
 * @param url
 */
export function navigateTo (url) {
  wx.navigateTo({
    url
  })
}

/**
 * 小程序模态框
 * @param title 标题
 * @param content 内容
 */
export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

// showSuccess
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success',
    duration: 3000
  })
}

/**
 * 验证手机号非空和格式的方法
 * @param num 手机号
 * @returns {boolean} true or false
 */
export function phoneVerfication (num) {
  var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!num) {
    showModal('提示', '手机号不能为空')
    return false
  } else if (!phoneReg.test(num)) {
    showModal('提示', '手机号码输入错误')
    return false
  } else {
    return true
  }
}

// 多余字符串处理
export function stringSplice (arrary) {
  arrary.forEach(item => {
    if (item.title.length > 22) {
      item.title = item.title.substring(0, 22) + '...'
    }
  })
}

/**
 * 设置微信小程序顶部导航栏
 * @param title 标题
 */
export function setNavigationBarTitle (title) {
  wx.setNavigationBarTitle({
    title
  })
}

/**
 * 格式化时间戳
 * @param time  时间戳
 * @returns {string} 2018年10月24日
 */
export function formateDate (time) {
  if (!time) {
    return ''
  } else {
    let data = new Date(time * 1000)
    return (
      data.getFullYear() +
      '年' +
      (data.getMonth() > 8
        ? data.getMonth() + 1
        : '0' + (data.getMonth() + 1)) +
      '月' +
      data.getDate() +
      '日'
    )
  }
}

/**
 * 格式化时间戳
 * @param time  时间戳
 * @returns {string} 2018/08/12
 */
export function formateDateTime (time) {
  if (!time) {
    return ''
  } else {
    let data = new Date(time * 1000)
    return (
      data.getFullYear() +
      '/' +
      (data.getMonth() + 1) +
      '/' +
      data.getDate() +
      ' ' +
      data.getHours() +
      ':' +
      data.getMinutes() +
      ':' +
      data.getSeconds()
    )
  }
}

/**
 * 格式化时间戳
 * @param time  时间戳
 * @returns {string} 2018-08-12
 */
export function getTimeC () {
  var date = new Date()
  var seperator1 = '-'
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate =
    date.getFullYear() + seperator1 + month + seperator1 + strDate
  return currentdate
}

/**
 * 合并数组
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
export function reduceAarrary (arr1, arr2) {
  let res = []
  for (let i = 0; i < arr2.length; i++) {
    let item = {}
    item[arr1[i]] = arr2[i]
    res.push(item)
  }
  return res
}

/**
 * 小程序选择图片
 * @param 选择图片
 * @returns {Promise<any>}
 */
export function chooseImage (e) {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      count: 1, // 限制可选择的图片数量
      success (res) {
        resolve(res.tempFilePaths)
      },
      fail (e) {
        showModal('提示', '请再试一下')
      }
    })
  })
}

/**
 * 获取bese64图片格式
 * @param imgurl 要转化base64图片的地址
 * @returns {Promise<any>}
 */
export function getImgBase64 (imgurl) {
  return new Promise((resolve, reject) => {
    wx.getFileSystemManager().readFile({
      filePath: imgurl,
      encoding: 'base64',
      success: res => {
        resolve('data:image/jpg;base64,' + res.data)
      }
    })
  })
}

// 首页数组添加日期方法
export function indexDateChange (arrary) {
  arrary.forEach(item => {
    item.startmouth = getMounth(item.start_time)
    item.startdate = getDay(item.start_time)
    item.startweekday = getMyDay(item.start_time)
    item.endmouth = getMounth(item.end_time)
    item.enddate = getDay(item.end_time)
    item.endweekday = getMyDay(item.end_time)
  })
  console.log('数组转化中')
  return arrary
}

export function showLoading (title) {
  wx.showLoading({
    title: title,
    mask: true
  })
}

export function hideLoading () {
  wx.hideLoading()
}

/**
 * 获取用户的手机品牌
 * @returns {Promise<any>}
 */
export function getUserBrand () {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success: function (res) {
        resolve(res.brand)
      }
    })
  })
}

/**
 * 检查用户的手机品牌
 */
export function checkUserBrand (brand) {
  if (brand === 'ios') {
    return true
  } else {
    return false
  }
}

function getMyDay (date) {
  let week
  let data = new Date(date)
  if (data.getDay() === 0) week = '周日'
  if (data.getDay() === 1) week = '周一'
  if (data.getDay() === 2) week = '周二'
  if (data.getDay() === 3) week = '周三'
  if (data.getDay() === 4) week = '周四'
  if (data.getDay() === 5) week = '周五'
  if (data.getDay() === 6) week = '周六'
  return week
}

export function getMounth (date) {
  let mounth
  let data = new Date(date)
  mounth = data.getMonth()
  if (mounth < 9) {
    return '0' + String(mounth + 1)
  }
  return mounth + 1
}

export function getDay (date) {
  let day
  let data = new Date(date)
  day = data.getDate()
  if (day < 9) {
    return '0' + String(day)
  }
  return day
}
