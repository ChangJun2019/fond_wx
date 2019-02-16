<template>
  <div class="user">
    <!-- 登录后的用户中心 -->
    <div class="user-page">
      <!-- 个人中心页面 -->
      <div class="user-top">
        <navigator class="item"
                   hover-class="none"
                   url="/pages/AttPerson/AttPerson">
          <span class="name">我的关注</span>
          <span class="count">21</span>
        </navigator>
        <div class="item">
          <img :src="userInfo.avatar"
               alt=""
               class="user-avatar">
        </div>
        <navigator class="item"
                   hover-class="none"
                   url="/pages/AttPerson/AttPerson">
          <span class="name">关注我的</span>
          <span class="count">21</span>
        </navigator>
      </div>

      <div class="user-name">{{userInfo.nickname}}</div>

      <div class="user-desc">{{userInfo.sig || '这个人很懒什么也没有留下'}} <i class="iconfont">&#xe60d;</i></div>

      <!-- 我喜欢的 -->
      <scroll-view class="user-sort"
                   scroll-x
                   style="width: 100%">
        <navigator class="item"
                   hover-class="none"
                   url="/pages/MySortDetail/MySortDetail">
          <div class="icon"><i class="iconfont">&#xe629;</i></div>
          <div class="item-name">数码</div>
        </navigator>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe62b;</i></div>
          <div class="item-name">家居</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe609;</i></div>
          <div class="item-name">美食</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe665;</i></div>
          <div class="item-name">生活</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1"
                               style="margin-left:5px;">&#xe615;</i></div>
          <div class="item-name">旅行</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe67e;</i></div>
          <div class="item-name">游戏</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe6f5;</i></div>
          <div class="item-name">行业</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe667;</i></div>
          <div class="item-name">科技</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont cj-font-1">&#xe633;</i></div>
          <div class="item-name">记录</div>
        </div>
        <div class="item">
          <div class="icon"><i class="iconfont">&#xe62c;</i></div>
          <div class="item-name">随手拍</div>
        </div>
      </scroll-view>
      <!-- 个人中心内容 -->
      <div class="user-content">

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">夜间模式</div>
          <div class="user-content-item-right">
            <switch class="mini-switch"
                    color="#000"
                    @change="handleSwitchChange"></switch>
          </div>
        </div>

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">我的发布</div>
          <div class="user-content-item-right">
            <i class="iconfont">&#xe62c;</i>
          </div>
        </div>

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">关于我们</div>
          <div class="user-content-item-right">
            <i class="iconfont">&#xe62c;</i>
          </div>
        </div>

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">清除缓存</div>
          <div class="user-content-item-right">
            <div class="text">{{currentSize}}Kb</div>
            <i class="iconfont cj-font">&#xe62c;</i>
          </div>
        </div>

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">意见反馈</div>
          <div class="user-content-item-right">
            <i class="iconfont cj-font">&#xe62c;</i>
          </div>
        </div>

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">给个好评</div>
          <div class="user-content-item-right">
            <i class="iconfont">&#xe62c;</i>
          </div>
        </div>

        <div class="user-content-item clearfix:after">
          <div class="user-content-item-left">退出登录</div>
          <div class="user-content-item-right">
            <i class="iconfont">&#xe62c;</i>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        currentSize: 0
      };
    },
    computed: {
      ...mapState('global', [
        'userInfo'
      ])
    },
    methods: {
      /**
       * @desc 获取用户的缓存体积
       */
      getStorageInfo () {
        wx.getStorageInfo({
          success: (res) => {
            console.log('用户的缓存大小为:' + res.currentSize);
            this.currentSize = res.currentSize;
          }
        });
      }
    },
    mounted () {
      console.log(this.userInfo);
      this.getStorageInfo();
    }
  };
</script>

<style lang="scss" scoped>
  .user {
    width: 100%;
  }

  .user-page {
    width: 100%;
  }

  .user-top {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      .name {
        color: #b5b5b5;
        font-weight: 600;
      }
      .count {
        text-align: center;
        margin-top: 10px;
        font-weight: 900;
      }
      .user-avatar {
        width: 60px;
        height: 60px;
        border-radius: 30px;
      }
    }
  }

  .user-name {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
  }

  .user-desc {
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
    .iconfont {
      display: inline-block;
      margin-left: 5px;
      font-size: 13px;
    }
  }

  .user-sort {
    margin-top: 30px;
    white-space: nowrap;
    .item {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      .icon {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #000;
        text-align: center;
        line-height: 35px;
        color: #fff;
        .cj-font-1 {
          font-size: 20px;
        }
      }
      .item-name {
        font-size: 12px;
        font-weight: 900;
        text-align: center;
        margin-top: 10px;
      }
    }
  }

  .user-content {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    .user-content-item {
      width: 100%;
      height: 40px;
      line-height: 40px;
      .user-content-item-left {
        float: left;
        font-weight: 900;
        font-size: 16px;
      }
      .user-content-item-right {
        float: right;
        .text {
          display: inline;
          color: #999;
          font-size: 13px;
        }
        .cj-font {
          display: inline-block;
        }
        .mini-switch {
          zoom: 0.7;
        }
      }
    }
  }

  .auth-page {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
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
    box-shadow: #2a2a2a 0px 0px 5px;
    background-color: #2a2a2a;
    border-radius: 0;
  }
</style>
