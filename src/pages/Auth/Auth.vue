<template>
  <div class="auth-page">
    <div class="error-msg"
         v-if="errorshow">{{ errormsg }}</div>
    <div class="top">
      <div class="no-text">無</div>
      <div class="desc"
           v-if="!phoneRegister && !commonShow">您还没有授权登录</div>
      <div class="desc"
           v-if="phoneRegister">为了有更好的体验,请绑定手机号</div>
    </div>
    <div class="bottom">
      <button class="auth-btn"
              @getuserinfo="userLogin"
              open-type="getUserInfo"
              lang="zh_CN"
              v-if="!phoneRegister && !commonShow">一键登录
      </button>
      <button class="auth-btn"
              v-if="!phoneRegister && !commonShow"
              @click="commonLogin">普通登录
      </button>
      <!-- 绑定手机号 -->
      <div class="user-phone"
           v-if="phoneRegister">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input weui-cell_vcode">
            <div class="weui-cell__hd">
              <div class="weui-label">手机号</div>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input"
                     v-model.trim="mobile"
                     placeholder="请输入手机号" />
            </div>
            <div class="weui-cell__ft">
              <div class="weui-vcode-btn"
                   @click="handleGetVerifyCode"
                   :disabled="!codeShow">
                <span v-if="!codeShow">获取验证码</span>
                <span v-if="codeShow">{{codeCount}}s</span>
              </div>
            </div>
          </div>
          <div class="weui-cell weui-cell_input weui-cell_vcode">
            <div class="weui-cell__hd">
              <div class="weui-label">验证码</div>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input"
                     v-model.trim="code"
                     placeholder="请输入验证码" />
            </div>
          </div>
        </div>
        <div class="send-btn"
             @click="handleVerifCodeAndSend">确定</div>
      </div>
      <!-- 普通登录 -->
      <div class="user-common"
           v-if="commonShow">
        <div class="weui-cells weui-cells_after-title">

          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">账号</div>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input"
                     v-model.trim="account"
                     placeholder="请输入账号" />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">密码</div>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input"
                     v-model.trim="password"
                     placeholder="请输入密码" />
            </div>
          </div>
        </div>
        <div class="send-btn"
             @click="loginandcommon">登录</div>
      </div>

    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
const TIME_COUNT = 60;
export default {
  data () {
    return {
      phoneRegister: false,
      commonShow: false,
      mobile: '',
      code: '',
      userdata: {},
      errormsg: "手机号码有误，请重新填写",
      errorshow: false,
      codeShow: false,
      codeCount: '',
      timer: null,
    }
  },
  computed: {
    ...mapState('global', ['loginState'])
  },
  methods: {
    ...mapActions('global', [
      'setUserInfo', // 设置用户信息
      'setLoginState' // 设置登录状态
    ]),
    async getToken () {
      const code = await this.$Cj.getLoginCode();
      const loginRes = await this.$Cj.loginRequest('wx/login', { code });
      this.$Cj.setStorageSync('token', loginRes.token);
      console.log('小程序的登录凭证是：' + code);
      console.log('获取的token是' + loginRes.token);
    },
    getOneLogin () {
      wx.showModal({ content: "不好意思,该功能在维护中.", showCancel: false })
    },
    commonLogin () {
      this.commonShow = true
    },
    // 用户登录
    async userLogin (e) {
      // 组装请求数据
      const userinfo = e.mp.detail.userInfo;
      const data = {
        nickname: userinfo.nickName,
        avatar: userinfo.avatarUrl
      };
      this.getToken();
      const res = await this.$Cj.request('user','PUT',{...data})
      if(res.error_code === 0){
        const resuserinfo = await this.$Cj.request('user')
          this.setUserInfo(resuserinfo) 
          this.setLoginState(true)
          if (this.loginState) {
            wx.showToast({ title: '登录成功' })
            wx.switchTab({
              url: '/pages/Home/Home'
            })
          }
      }

    },
    /* 获取手机验证码 */
    async handleGetVerifyCode () {
      const value = this.mobile
      const isPhone = this.$Cj.checkPhone(value)
      if (!isPhone) {
        this.errorshow = true
      } else {
        this.errorshow = false
        const data = await this.$Cj.request('token/code', 'POST', { mobile: value })
        console.log(data)
        if (data.error_code === 0) {
          this.$Cj.showToast('短信发送成功')
          this.getCode()
        } else if (data.error_code === 1100) {
          this.$Cj.showToast('手机号已经被绑定，请重新输入！')
        }
        else {
          this.$Cj.showToast('短信发送失败,过会儿再试一下')
        }
      }
    },
    getCode () {
      if (!this.timer) {
        this.codeCount = TIME_COUNT;
        this.codeShow = true;
        this.timer = setInterval(() => {
          if (this.codeCount > 0 && this.codeCount <= TIME_COUNT) {
            this.codeCount--;
          } else {
            this.codeShow = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
      }
    },
    // 验证验证码并且发送补全信息
    async handleVerifCodeAndSend () {
      const data = { ...this.userdata, mobile: this.mobile }
      const res = await this.$Cj.request('token/verifycode', 'POST', { code: this.code })
      if (res.error_code === 0) {
        const res2 = await this.$Cj.request('user', 'PUT', { ...data })
        console.log(res2)
        if (res2) {
          this.setUserInfo(res2)
          this.setLoginState(true)
          if (this.loginState) {
            wx.showToast({ title: '登录成功' })
            wx.switchTab({
              url: '/pages/User/User'
            })
          }
        }
      }
    },
    async loginandcommon () {
      if (this.account && this.password) {
        const data = {
          account: this.account,
          password: this.password
        }
        const res = await this.$Cj.request('token/login','POST',{ ...data })
        if(res){
          this.$Cj.setStorageSync('token', res.token);
          console.log('获取的token是' + res.token);
          const resuserinfo = await this.$Cj.request('user')
          this.setUserInfo(resuserinfo) 
          this.setLoginState(true)
          if (this.loginState) {
            wx.showToast({ title: '登录成功' })
            wx.switchTab({
              url: '/pages/Home/Home'
            })
          }
        }
      } else {
        wx.showToast({ title: "用户名或者密码不能为空", icon: "none" })
      }
    }
  },
  created () {
    if (this.loginState) {
      wx.switchTab({
        url: '/pages/Home/Home'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.auth-page {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
}

.error-msg {
  width: 100%;
  height: 30px;
  position: relative;
  top: 0;
  left: 0;
  line-height: 30px;
  text-align: center;
  background-color: #ff0033;
  color: #fff;
}

.top {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .no-text {
    font-size: 60px;
    font-weight: bold;
  }
  .desc {
    color: #b5b5b5;
    margin-top: 10px;
  }
}

.bottom {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-btn {
  width: 120px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: #2a2a2a 0px 0px 5px;
  background-color: #2a2a2a;
  border-radius: 0;
}

.user-phone {
  padding: 10px;
  .weui-cells_after-title {
    border: 1px solid #2a2a2a;
    overflow: hidden;
    border-radius: 5px;
  }
  .send-btn {
    width: 160px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: #2a2a2a;
  }
}

.user-common {
  padding: 10px;
  .weui-cells_after-title {
    border: 1px solid #2a2a2a;
    overflow: hidden;
    border-radius: 5px;
  }
  .send-btn {
    width: 160px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: #2a2a2a;
  }
}
</style>
