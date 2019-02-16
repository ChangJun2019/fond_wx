module.exports = [
  {
    path: 'pages/Auth/Auth', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: {
      navigationBarTitleText: '首页'
    }
  },
  {
    path: 'pages/Home/Home', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: {
      navigationBarTitleText: '首页',
      usingComponents: {
        'painter': '/static/painter/painter'
      }
    }
  },
  {
    path: 'pages/User/User',
    config: {
      navigationBarTitleText: '个人中心'
    }
  },
  {
    path: 'pages/Sort/Sort',
    config: {
      navigationBarTitleText: '目录'
    }
  },
  {
    path: 'pages/SortDetail/SortDetail',
    config: {
      navigationBarTitleText: '分类详情页'
    }
  },
  {
    path: 'pages/MySortDetail/MySortDetail',
    config: {
      navigationBarTitleText: '我喜欢的分类页面'
    }
  },
  {
    path: 'pages/ThemeDetail/ThemeDetail',
    config: {
      navigationBarTitleText: '分类页面'
    }
  },
  {
    path: 'pages/Detail/Detail',
    config: {
      navigationBarTitleText: '详情页面'
    }
  },
  {
    path: 'pages/UserDetail/UserDetail',
    config: {
      navigationBarTitleText: '个人主页'
    }
  },
  {
    path: 'pages/AttPerson/AttPerson',
    config: {
      navigationBarTitleText: '我关注的人'
    }
  }
];
