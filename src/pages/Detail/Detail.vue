<template>
  <div class="detail-page">
    <!-- 这是详情页面 -->

    <!-- 标题 -->
    <div class="c-title">{{data.titile}}</div>

    <div class="auther-msg">
      <!-- 作者 -->
      <div class="c-auther">
        <img :src="data.created_user.user_avatar"
             alt="">
        <div class="name">{{data.created_user.user_name}}</div>
      </div>
      <!-- 时间 -->
      <div class="c-time">{{data.update_time}}</div>
      <!-- 关注 -->
      <div class="attention-box">
        <div class="attention">关注它</div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="c-content">
      <wxParse :content="data.content"
               @preview="preview"
               @navigate="navigate" />
      <div class="footer clearfix">
        <div class="theme"><i class="iconfont cj-font-1">&#xe633;</i>{{data.from_topic.topics_name}}</div>
        <div class="pageview">点赞 {{data.like_count}}</div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="c-comment">
      <div class="cc-title">全部评论 •<div class="count">10</div>
      </div>
      <div class="cc-card"
           v-for="x in 5"
           :key="x">
        <img src="http://image.52chinaweb.com/FgbRUutvfEce8dWf83rt1I0gJsss"
             alt=""
             class="user-img">
        <div class="cc-card-right">
          <div class="ccr-header">
            <div class="user-name">ChangJun</div>
            <div class="time">5小时56分钟前</div>
            <div class="phone">iphone XR</div>
            <div class="location">杭州</div>
          </div>
          <div class="ccr-content">
            说起来虽然挺简单，但是实施起来真的很难。对于一些没有接触过的东西，刚开始接触总是会没头没脑。我当然也是没有否定你，对于大二的我来说，时间真的是一个问题...
          </div>
        </div>
      </div>

      <!-- 没有评论时展示内容 -->
      <!-- <div class="cc-card-no">
        <div class="no-text">無</div>
        <div class="desc">暂时没有相关评论</div>
      </div> -->
    </div>

    <!-- 点赞 -->
    <div class="circle-box lick-icon">
      <i class="iconfont">&#xe60f;</i>
    </div>

    <!-- 评论 -->
    <div class="circle-box comment-icon"
         @click="handleCommentBtnClick">
      <i class="iconfont">&#xe60d;</i>
    </div>

    <div class="share-box">
      <i class="iconfont">&#xe614;</i>分享给好友
    </div>

    <!-- 发表评论的组件 -->
    <div class="send-comment-box"
         v-if="commentShow">
      <textarea class="comment-input"
                auto-height
                :fixed="true"
                :show-confirm-bar="false"
                :cursor-spacing="10"
                :maxlength="150"
                placeholder="评论一下..." />

      <div class="sc-btn">发表</div>
      <div class="sc-btn" @click="handleCommentBtnCance">取消</div>
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { article } from './data.js'
import moment from 'moment'


export default {
  components: {
    wxParse
  },
  data () {
    return {
      article,
      commentShow: false,
      id:1,
      data:{}
    }
  },
  methods: {
    preview (src, e) {
      // do something
    },
    navigate (href, e) {
      // do something
    },
    /* 点击评论icon */
    handleCommentBtnClick () {
      this.commentShow = true;
    },
    handleCommentBtnCance () {
      this.commentShow = false;
    }
  },
  async onLoad () {
    this.id = this.$root.$mp.query.id
    this.data = await this.$Cj.request('posts/article','POST',{id:this.id})
    this.data.update_time = moment.unix(this.data.update_time).fromNow()
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
@import url("~mpvue-wxparse/src/wxParse.css");

/* 详情页面 */
.detail-page {
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  box-sizing: border-box;
}

/* 标题 */
.c-title {
  font-size: 22px;
  font-weight: bold;
  color: #2a2a2a;
}

/* 作者相关信息 */
.auther-msg {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.c-auther {
  display: flex;
  align-items: center;
  font-size: 12px;
  .name {
    margin-left: 5px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }
}

.c-time {
  margin-left: 5px;
  font-size: 12px;
  color: #999;
}
.attention-box {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.attention {
  padding: 4px;
  background-color: #2a2a2a;
  margin-right: 10px;
  border-radius: 2px;
  font-size: 12px;
  color: #fff;
}

.c-content {
  margin-top: 20px;
  .footer {
    width: 100%;
    font-size: 12px;
    .theme {
      float: left;
      padding: 4px;
      background-color: #2a2a2a;
      color: #fff;
      border-radius: 4px;
      .cj-font-1 {
        display: inline;
        font-size: 10px;
        padding-right: 2px;
      }
    }
    .pageview {
      float: right;
      color: #999;
    }
  }
}

.line {
  width: 100%;
  height: 2px;
  background-color: #2a2a2a;
}

.c-comment {
  margin-top: 20px;
  width: 100%;
  .cc-title {
    font-size: 22px;
    font-weight: bold;
    color: #2a2a2a;
    margin-bottom: 10px;
    .count {
      display: inline;
      margin-left: 5px;
    }
  }
}

.cc-card {
  width: 100%;
  padding: 10px 5px;
  margin-top: 10px;
  // padding-top: 10px;
  // padding-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  // border-top: 1px solid #e6e6e6;
  // border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  .user-img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }
  .cc-card-right {
    flex: 1;
    margin-left: 10px;
    font-size: 12px;
    .ccr-header {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #999;
      .user-name {
        font-size: 12px;
        font-weight: bold;
        color: #2a2a2a;
      }
      .time {
        margin-left: 10px;
      }
      .phone {
        margin-left: 5px;
      }
      .location {
        flex: 1;
        text-align: right;
        margin-right: 10px;
      }
    }
    .ccr-content {
      margin-top: 5px;
    }
  }
}

.cc-card-no {
  width: 100%;
  padding: 10px 5px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .no-text {
    font-size: 20px;
    font-weight: bold;
    color: #2a2a2a;
  }
  .desc {
    color: #b5b5b5;
    font-size: 10px;
    margin-top: 10px;
  }
}

.circle-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2a2a2a;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 40px;
  .iconfont {
    font-size: 25px;
    color: #fff;
  }
}

.lick-icon {
  position: fixed;
  bottom: 20px;
  right: 10px;
}

.comment-icon {
  position: fixed;
  bottom: 20px;
  left: 10px;
}

.share-box {
  position: fixed;
  bottom: 20px;
  right: 50%;
  margin-right: -60px;
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 13px;
  background-color: #2a2a2a;
  border-radius: 20px;
  color: #fff;
  .iconfont {
    display: inline;
    padding-right: 5px;
    font-size: 12px;
  }
}

.send-comment-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px 20px 20px;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  .comment-input {
    width: 65%;
    border-radius: 20px;
    padding: 8px;
    padding-left: 10px;
    background-color: #ddd;
  }
  .send-btn {
    width: 40px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    margin-left: 5px;
    background-color: #2a2a2a;
    color: #fff;
    border-radius: 4px;
  }
  .sc-btn {
    width: 40px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    margin-left: 10px;
    background-color: #2a2a2a;
    color: #fff;
    border-radius: 4px;
  }
}
</style>
