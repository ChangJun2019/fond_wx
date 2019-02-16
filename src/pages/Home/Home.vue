<template>
  <div class="home-page">
    <div class="home">
      <!-- 滑动卡片-->
      <swiper class="swiper-box"
              :style="swiperStyle"
              :previous-margin="20"
              :next-margin="30"
              :current="swiperIndex"
              @change="swiperChange">
        <swiper-item class="swiper-item">
          <div class="swiper-card "
               :class="swiperIndex===0?'active':''">
            <div class="one-bg">
              <div class="card-header">
                <div class="card-header-left">
                  杭州•阴转多云 22-13℃
                </div>
                <i class="iconfont share-icon">&#xe614;</i>
              </div>
              <div class="card-content clearfix">
                <div class="time">2019 Sat 星期六</div>
                <div class="date">12</div>
                <div class="yi">宜早点下班</div>
                <div class="yi-weather">阴天，多云无持续向微风。</div>
                <div class="line-bold"></div>
                <div class="line"></div>
                <div class="one-yan">
                  孤独意味着自由和发现。沙漠孤岛比一座城市更激动人心。
                </div>
                <div class="auther">纳博科夫</div>
              </div>
            </div>
            <div class="one-bottom">
              <div class="one-bottom-text">
                <p>Hi,晚上好</p>
                <p>今天是你来到没关系的第1天</p>
              </div>
              <navigator class="theme-card"
                         url="/pages/UserDetail/UserDetail"
                         hover-class="none">
                <img :src="userInfo.avatar"
                     alt=""
                     class="avatar">
              </navigator>
            </div>
          </div>
        </swiper-item>
        <swiper-item class="swiper-item"
                     v-for="(articles,index) in topArticles"
                     :key="articles.id">
          <div class="swiper-card"
               :class="swiperIndex===index+1?'active':''">
            <HomeCard :data="articles"></HomeCard>
          </div>
        </swiper-item>

      </swiper>
      <!-- 操作栏-->
      <div class="home-operation">
        <!-- 下一个 -->
        <div class="home-operation-box">
          <i class="iconfont home-operation-icon" @click="handleClickTop">&#xe607;</i>
        </div>
        <!-- 发布动态 -->
        <div class="home-operation-box send"
             @click="handleSendClick">
          <i class="iconfont home-operation-icon home-icon">&#xe62d;</i>
        </div>
        <!-- 上一个 -->
        <div class="home-operation-box">
          <i class="iconfont home-operation-icon" @click="handleClickBottom">&#xe608;</i>
        </div>
      </div>
      <!-- 弹出框 -->
      <div class="message"
           v-if="messageShow">
        <div class="item">
          <i class="iconfont">&#xe616;</i>
          <div class="text">动态</div>
        </div>
        <div class="item">
          <i class="iconfont">&#xe7e7;</i>
          <div class="text">图文</div>
        </div>
        <div class="item">
          <i class="iconfont">&#xe756;</i>
          <div class="text">视频</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeCard from './components/HomeCard'
import { getSystemHeight } from '@/utils/index.js'
import moment from 'moment'
import { mapState } from 'vuex';

export default {
  data () {
    return {
      height: 0,
      swiperIndex: 0,
      messageShow: false,
      topArticles:[],
    }
  },
  components: {
    HomeHeader,
    HomeCard
  },
  computed: {
    ...mapState('global', [
        'userInfo'
      ]),
    swiperStyle () {
      return `height:${this.height - 60}px`
    }
  },
  methods: {
    swiperChange (e) {
      this.swiperIndex = e.mp.detail.current
    },
    handleSendClick () {
      this.messageShow = !this.messageShow;
    },
    /**
     * 获取首页top榜的数据
     */
    async getTopArticles(){
      const data = await this.$Cj.request('posts/articles','POST',{top:1})
      const {list} = data;
      list.forEach(item => {
        item.update_time = moment.unix(item.update_time).fromNow()
      });
      this.topArticles = list
      console.log(this.topArticles)
    },
    handleClickTop(){
      if(this.swiperIndex>0){
        this.swiperIndex--
      }else{
        this.swiperIndex === 0
      }
    },
    handleClickBottom(){
      if(this.swiperIndex< this.topArticles.length){
        this.swiperIndex++
      }
    }
  },
  mounted () {
    this.height = getSystemHeight();
    this.getTopArticles()
  }
}
</script>

<style lang="scss" scoped>
/* 首页样式模块
  ----------------------------------------------------------------*/
.home {
  width: 100%;
  height: 100%;
}

.home-page {
  width: 100%;
  height: 100%;
}

/* 滑动容器的样式 */
.swiper-box {
  width: 100%;
}

/* 滑动容器item的样式 */
.swiper-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
}

.swiper-card {
  height: 450px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  margin: 0px 20px;
  z-index: -1;

  .one-bg {
    width: 100%;
    height: 380px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #2a2a2a;
    color: #fff;
    .card-header {
      width: 100%;
      height: 25px;
      line-height: 25px;
      padding: 10px;
      box-sizing: border-box;
      .card-header-left {
        float: left;
        font-size: 10px;
        border-radius: 15px;
        padding-left: 4px;
        padding-right: 4px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.2);
        .biaoqian {
          display: inline-block;
          font-size: 12px;
          margin-right: 2px;
        }
      }

      .share-icon {
        float: right;
        font-size: 16px;
        color: #fff;
      }
    }

    .card-content {
      width: 100%;
      height: 355px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      .time {
        font-size: 12px;
      }
      .date {
        font-size: 70px;
        font-weight: bold;
      }
      .yi {
        font-size: 20px;
      }
      .yi-weather {
        margin-top: 10px;
      }
      .line-bold {
        width: 90%;
        height: 4px;
        background: #fff;
        margin-top: 40px;
      }
      .line {
        width: 90%;
        height: 1px;
        background: #fff;
        margin-top: 2px;
      }
      .one-yan {
        width: 90%;
        margin-top: 20px;
        font-size: 13px;
      }
      .auther {
        width: 90%;
        font-size: 12px;
        color: #eee;
        margin-top: 10px;
      }
    }
  }

  .one-bottom {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
    box-sizing: border-box;
    .one-bottom-text {
      font-size: 12px;
      color: #2a2a2a;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}

/* 激活状态下的样式 */
.active {
  transform: scale(1.1);
  transition: all 0.6s ease-in 0s;
  z-index: 1;
}

.home-operation {
  width: 80%;
  margin: 0 auto;
  margin-bottom: -10px;
  display: flex;
  justify-content: space-between;
}

.message {
  position: relative;
  top: -110px;
  width: 150px;
  height: 40px;
  left: 105px;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  background-color: #2a2a2a;
  display: flex;
  flex-direction: row;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    .iconfont {
      font-size: 22px;
    }
    .text {
      font-size: 12px;
    }
  }
}
.message::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 68px;
  bottom: -20px;
  border-width: 14px;
  border-style: solid;
  border-color: #2a2a2a transparent transparent transparent;
}

/* 操作icon背景 */
.home-operation-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 40px;

  .home-operation-icon {
    font-size: 30px;
    color: #2a2a2a;
  }

  .home-icon {
    font-size: 35px;
  }
}

.send {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-top: -10px;
}
</style>
