const state = {
  userInfo: {}, // 用户信息
  loginState: false // 用户登录状态
};

const mutations = {
  SETLOGINCODE: (state, loginCode) => {
    state.code = loginCode
  },
  SETUSERINFO: (state, payload) => {
    state.userInfo = payload.userInfo
  },
  SETLOGINSTATE: (state, loginstate) => {
    state.loginState = loginstate
  }
}

const actions = {
  // 设置登录凭证
  setLoginCode ({ commit }, loginCode) {
    commit('SETLOGINCODE', loginCode)
  },
  // 设置用户信息
  setUserInfo ({ commit }, obj) {
    console.log(obj)
    commit('SETUSERINFO', { userInfo: obj })
  },
  // 设置登录状态
  setLoginState ({ commit }, loginstate) {
    commit('SETLOGINSTATE', loginstate)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
