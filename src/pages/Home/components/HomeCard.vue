<template>
  <div class="home-card"
       @click="toPostsDetail(data.id)">
    <!-- 卡片图片 -->
    <img :src="data.cover"
         mode="scaleToFill"
         class="card-image"
         alt="">
    <!-- 卡片内容 -->
    <div class="card-content">
      <!-- 头部 -->
      <div class="card-header">
        <div class="card-header-left">
          <i class="iconfont biaoqian">&#xe633;</i>{{data.from_topic.topics_name}}
        </div>
        <i class="iconfont share-icon" @click.stop="save">&#xe614;</i>
      </div>
      <!-- 文字 -->
      <div class="card-body">
        <div class="title">#{{data.titile}}</div>
        <div class="line">{{data.desc}}</div>
      </div>

      <!-- 用户 -->
      <div class="card-user">
        <img :src="data.created_user.user_avatar"
             alt=""
             class="user-avatar">
        <div class="user-other">
          <p class="user-name">{{data.created_user.user_name}}</p>
          <p class="user-time">{{data.update_time}}</p>
        </div>
      </div>

      <!-- 卡片操作栏 -->
      <div class="operation">
        <div class="like">
          <i class="iconfont operation-icon">&#xe60f;</i>
          <p class="count">{{data.like_count}}</p>
        </div>
        <div class="comment">
          <i class="iconfont operation-icon">&#xe63a;</i>
          <p class="count">{{data.reply_count}}</p>
        </div>
        <div class="share">
          <i class="iconfont operation-icon">&#xe6e6;</i>
          <p class="count">{{data.visit_count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ["data"],
  methods: {
    toPostsDetail (id) {
      wx.navigateTo({
        url: '/pages/Detail/Detail?id=' + id
      })
  },
}
}
</script>

<style lang="scss" scoped>
/* 首页卡片组件样式
----------------------------------------------------------------*/

/* 图片外层盒子样式 */
.home-card {
  height: 450px;
  width: 300px;
  position: relative;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: #000;
}

/* 图片样式 */
.card-image {
  height: 450px;
  width: 300px;
  border-radius: 10px;
  opacity: 0.6;
  filter: alpha(opacity=60);
}

/* 卡片文字内容 */
.card-content {
  height: 450px;
  width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
}

/* 卡片头部 */
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
  }
}

/* 卡片主题内容样式 */
.card-body {
  margin-top: 20px;
  width: 100%;
  height: 320px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 内容标题 */
  .title {
    margin-bottom: 10px;
    font-size: 18px;
  }
  /* 行样式 */
  .line {
    margin-top: 10px;
  }
}
/* 卡片操作栏 */
.operation {
  position: absolute;
  bottom: 10px;
  right: 5px;
  text-align: center;

  .operation-icon {
    font-size: 25px;
    margin-top: 10px;
  }
  .count {
    font-size: 10px;
  }
}
/* 卡片底部样式 */
.card-user {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: row;
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .user-other {
    margin-left: 5px;
    font-size: 12px;
    .user-time {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
