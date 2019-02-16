<template>
  <div class="sort-detail-page">

    <!-- 分类封面 -->
    <img src="https://images.pexels.com/photos/65437/pexels-photo-65437.jpeg?auto=compress&cs=tinysrgb&h=350"
         alt=""
         class="sort-top-img">

    <!-- 分类卡片 -->
    <div class="sort-card">
      <div class="sort-card-title">{{title}}</div>
      <div class="sort-card-icon">
        <i class="iconfont cj-font">&#xe614;</i>
      </div>
      <div class="sort-card-title-desc">{{desc}}</div>
    </div>

    <div class="sort-theme">
      <div class="sort-theme-title">主题</div>
      <div class="sort-theme-item"
                 url="/pages/ThemeDetail/ThemeDetail"
                 @click="handelToSortList(item)"
                 v-for="item in data"
                 :key="item.id"
                 hover-class="none">
        <img :src="item.cover"
             alt="">
        <p class="sort-theme-item-text">{{item.topic_name}}</p>
      </div>
    </div>

    <!-- 精选或者最新 -->
    <!-- <div class="sort-card-tab-bar">
      <div class="item item-selected">精选</div>
      <div class="item">最新</div>
    </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      id:0,
      data:[],
      title:'',
      desc:''
    }
  },
  methods: {
    handelToSortList(item){
       wx.navigateTo({
        url: `/pages/ThemeDetail/ThemeDetail?id=${item.id}&title=${item.topic_name}&desc=${item.desc}`
      })
    }
  },
  async mounted() {
    const api = `topics/${this.id}`
    this.data = await this.$Cj.request(api)
    console.log(this.data)
  },
   onLoad () {
    this.id = this.$root.$mp.query.id
    this.title = this.$root.$mp.query.title
    this.desc = this.$root.$mp.query.desc
  }
}
</script>

<style lang="scss" scoped>
.sort-detail-page {
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
  position: relative;
}

.sort-top-img {
  width: 100%;
  height: 160px;
}

.sort-card {
  width: 80%;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 15px;
  .sort-card-title {
    font-size: 20px;
    font-weight: 800;
  }
  .sort-card-title-desc {
    font-size: 12px;
    color: #b5b5b5;
    margin-top: 10px;
  }
  .sort-card-icon {
    position: absolute;
    top: 18px;
    right: 15px;
    display: flex;
    flex-direction: row;
    .cj-font {
      font-size: 22px;
      margin-right: 10px;
    }
  }
}

.sort-theme {
  width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  .sort-theme-title {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .sort-theme-item {
    width: 45%;
    position: relative;
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;
    img {
      width: 100%;
      height: 80px;
      border-radius: 5px;
    }
    .sort-theme-item-text {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      transform: translate(-50%, -50%);
    }
  }
}
.sort-card-tab-bar {
  width: 100px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  font-size: 14px;
  justify-content: space-around;

  .item-selected {
    background-image: url("http://img.hb.aicdn.com/53582109a62b574d00910a78b87ed9d528f02b6f6429-luS7Hq_fw658");
    background-size: contain;
  }
}
</style>
