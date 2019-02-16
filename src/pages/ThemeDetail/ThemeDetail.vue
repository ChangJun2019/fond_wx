<template>
  <div class="td-page">
    <!-- 主题详情页面 -->
    <div class="td-page-top">
      <!-- 主题详情页面头部 -->
      <i class="iconfont top-share-icon">&#xe614;</i>
      <img src="https://images.unsplash.com/photo-1491864483946-1f06be97b71d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
           alt=""
           class="top-img">
      <div class="content">
        <div class="title">{{title}}</div>
        <div class="desc">{{desc}}</div>
        <div class="lookit">1人关注</div>
      </div>
    </div>

    <!-- 主题详情页面导航栏 -->
    <div class="sort-card-tab-bar">
      <div class="item"
           :class="selectedIndex===index?'item-selected':''"
           v-for="(item,index) in items"
           @click="handelTabClick(index)"
           :key="index">{{item}}</div>
    </div>

    <!-- 文章列表 -->
    <div class="theme-card"
         v-for="article in articles"
         :key="article.id"
         @click="toArticleDetail(article.id)"
         v-if="selectedIndex === 0">
      <div class="theme-card-header clearfix">
        <div class="card-user">
          <img :src="article.created_user.user_avatar"
               alt=""
               class="user-avatar">
          <div class="user-other">
            <p class="user-name">{{article.created_user.user_name}}</p>
            <p class="user-time">{{article.update_time}}</p>
          </div>
        </div>
        <div class="card-header-right">
          <div class="jingxuan"
               v-if="article.good===1">精选</div>
          <div class="jingxuan"
               v-if="article.top===1">推荐</div>
        </div>
      </div>
      <div class="theme-card-content">
        <div class="title">{{article.titile}}</div>
        <div class="content-text">
          <p class="text">{{article.desc}}</p>
        </div>
        <div class="theme-card-imgs">
          <img :src="article.cover"
               alt=""
               mode="aspectFill"
               class="card-img-article">
        </div>
      </div>
      <div class="line"></div>
      <div class="operation">
        <div class="like">
          <i class="iconfont operation-icon">&#xe60f;</i>
          <p class="count">{{article.like_count}}</p>
        </div>
        <div class="comment">
          <i class="iconfont operation-icon">&#xe63a;</i>
          <p class="count">{{article.reply_count}}</p>
        </div>
        <div class="share">
          <i class="iconfont operation-icon">&#xe6e6;</i>
          <p class="count">{{article.visit_count}}</p>
        </div>
      </div>
    </div>

    <!-- 动态列表 -->
    <navigator class="theme-card"
               v-if="selectedIndex===1"
               v-for="item in states"
               :key="item.id"
               url="/pages/Detail/Detail"
               hover-class="none">
      <div class="theme-card-header clearfix">
        <div class="card-user">
          <img :src="item.created_user.user_avatar"
               alt=""
               class="user-avatar">
          <div class="user-other">
            <p class="user-name">{{item.created_user.user_name}}</p>
            <p class="user-time">{{item.update_time}}</p>
          </div>
        </div>
        <div class="card-header-right">
          <div class="jingxuan"
               v-if="item.good === 1">精选</div>
          <div class="jingxuan"
               v-if="item.top === 1 ">推荐</div>
        </div>
      </div>
      <div class="theme-card-content">
        <div class="title">{{item.titile}}</div>
        <div class="content-text">
          <p class="text">{{item.content}}</p>
          <!--            <p class="text"> 在核里摇摇晃晃，又因为果肉温柔的包裹，安全又慵懒，这大概就是我们的生活状态。如果没有人咬破甜美的果肉，我们就永远看不见外面的世界。</p> -->
        </div>
        <div class="theme-card-imgs">
          <img v-for="(image,index2) in item.images"
               :src="image"
               :key="index2"
               alt=""
               class="card-img">
        </div>
      </div>
      <div class="line"></div>
      <div class="operation">
        <div class="like">
          <i class="iconfont operation-icon">&#xe60f;</i>
          <p class="count">{{item.like_count}}</p>
        </div>
        <div class="comment">
          <i class="iconfont operation-icon">&#xe63a;</i>
          <p class="count">{{item.reply_count}}</p>
        </div>
        <div class="share">
          <i class="iconfont operation-icon">&#xe6e6;</i>
          <p class="count">{{item.visit_count}}</p>
        </div>
      </div>
    </navigator>

    <!-- 视频动态列表 -->
    <div class="theme-card"
         v-for="item in VideoStates"
         :key="item.id"
         v-if="selectedIndex===2">
      <div class="theme-card-header clearfix">
        <div class="card-user">
          <img :src="item.created_user.user_avatar"
               alt=""
               class="user-avatar">
          <div class="user-other">
            <p class="user-name">{{item.created_user.user_name}}</p>
            <p class="user-time">{{item.update_time}}</p>
          </div>
        </div>
        <div class="card-header-right">
          <div class="jingxuan"
               v-if="item.good === 1">精选</div>
          <div class="jingxuan"
               v-if="item.top === 1 ">推荐</div>
        </div>
      </div>
      <div class="theme-card-content">
        <div class="title">{{item.titile}}</div>
        <video :src="item.videosrc"
               controls
               style="width:100%;height:225px; margin-top: 10px;"></video>
      </div>
      <div class="line"></div>
      <div class="operation">
        <div class="like">
          <i class="iconfont operation-icon">&#xe60f;</i>
          <p class="count">{{item.like_count}}</p>
        </div>
        <div class="comment">
          <i class="iconfont operation-icon">&#xe63a;</i>
          <p class="count">{{item.reply_count}}</p>
        </div>
        <div class="share">
          <i class="iconfont operation-icon">&#xe6e6;</i>
          <p class="count">{{item.visit_count}}</p>
        </div>
      </div>
    </div>

    <div class="td-button" @click="handleFolloadTopic" v-if="isfollowed">订阅话题</div>
    <div class="td-button" @click="handleFolloadTopic" v-if="!isfollowed">取消订阅话题</div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      items: ['文章', '动态', '视频动态'],
      selectedIndex: 0,
      id: 1,
      title: '',
      desc: '',
      articles: [],
      states: [],
      VideoStates: [],
      isfollowed: true
    }
  },
  methods: {
    handelTabClick (index) {
      this.selectedIndex = index
    },
    toArticleDetail (id) {
      wx.navigateTo({
        url: '/pages/Detail/Detail?id=' + id
      })
    },
    // 关注主题
    async handleFolloadTopic(){
      const id = this.id;
      const data = await this.$Cj.request('topics/followed','POST',{id})
      if(data.error_code ===0){
        this.isfollowed = !this.isfollowed
        this.$Cj.showToast('关注或者取消成功')
      }
    }
  },
  async mounted () {
    const articles = await this.$Cj.request('posts/articles', 'POST', { tid: this.id })
    const states = await this.$Cj.request('posts/states', 'POST', { tid: this.id })
    const VideoStates = await this.$Cj.request('posts/vstates', 'POST', { tid: this.id })
    this.articles = this.$Cj.formatTimeForArrary(articles.list)
    this.states = this.$Cj.formatTimeForArrary(states.list)
    this.VideoStates = this.$Cj.formatTimeForArrary(VideoStates.list)
    console.log(articles)
    console.log(states)
    console.log(VideoStates)
  },
  onLoad () {
    this.id = this.$root.$mp.query.id
    this.title = this.$root.$mp.query.title
    this.desc = this.$root.$mp.query.desc
  }
}
</script>
<style lang="scss" scoped>
.td-page {
  width: 100%;
  padding-bottom: 30px;
  background-color: #eee;
}

/* 顶部封面 */
.td-page-top {
  width: 100%;
  background: #000;
  height: 200px;
  .top-share-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    color: #fff;
    font-size: 20px;
  }
  .top-img {
    width: 100%;
    height: 200px;
    opacity: 0.6;
    filter: alpha(opacity=60);
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .desc {
      font-size: 12px;
      margin-top: 10px;
    }
    .lookit {
      font-size: 12px;
      margin-top: 10px;
    }
  }
}

/* 切换tabbar样式 */
.sort-card-tab-bar {
  width: 180px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  font-size: 16px;
  justify-content: space-around;

  .item-selected {
    background-image: url("http://img.hb.aicdn.com/53e055ce5b6db4e882f9f0465fc4ec4ef828d13f8c67d-TbLBYi_fw658");
    background-size: contain;
    font-weight: bold;
  }
}

/* 主题卡片 */
.theme-card {
  width: 90%;
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;

  .theme-card-header {
    width: 100%;
    height: 40px;
    .card-user {
      float: left;
      .user-avatar {
        width: 30px;
        height: 30px;
        display: inline-block;
        border-radius: 50%;
      }
      .user-other {
        margin-left: 5px;
        font-size: 12px;
        display: inline-block;
        .user-time {
          color: #ddd;
        }
      }
    }
    .card-header-right {
      float: right;
    }
    .jingxuan {
      width: 30px;
      height: 15px;
      color: #fff;
      font-size: 10px;
      margin-top: 10px;
      display: inline-block;
      margin-right: 5px;
      text-align: center;
      line-height: 15px;
      border-radius: 2px;
      background-color: #2a2a2a;
    }
  }
  .line {
    width: 100%;
    margin: 0 auto;
    height: 2px;
    background: #2a2a2a;
    margin-top: 20px;
  }
  .operation {
    width: 100%;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    .operation-icon {
      text-align: center;
    }
    .count {
      font-size: 10px;
      color: #999;
    }
  }
}

.theme-card-content {
  margin-top: 10px;
  .title {
    font-weight: bold;
    font-size: 13px;
  }
  .content-text {
    margin-top: 5px;
    font-size: 12px;
    .text {
      margin-top: 5px;
    }
  }
  .theme-card-imgs {
    width: 95%;
    margin-top: 10px;
    .card-img {
      width: 31%;
      height: 60px;
      margin-top: 5px;
      margin-left: 5px;
      border-radius: 5px;
    }
    .card-img-article {
      width: 100%;
      height: 120px;
      margin-top: 5px;
      margin-left: 5px;
      border-radius: 5px;
    }
  }
}

.td-button {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 30px;
  padding: 10px;
  width: 160px;
  text-align: center;
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  background: #2a2a2a;
  color: #fff;
  border-radius: 20px;
}
</style>

