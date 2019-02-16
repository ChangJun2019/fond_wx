<template>
  <div class="v-card">
    <!-- 卡片展示 -->
    <div class="v-card-like-text">有334人喜欢了</div>
    <!-- 没有desc的布局 -->
    <div class="v-card-content-one" v-if="true">
      <img src="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" class="v-card-img">
      <div class="v-card-content-one-title">看完让人沉默的好片,再不看可能就就没了</div>
    </div>

    <!-- 有desc的布局 -->
    <div class="v-card-content-two clearfix" v-if="false">
      <div class="v-card-content-two-left">
        <div class="v-card-content-two-left-title">
          读了20多本书，只想安利这5本只想安利这5本
        </div>
        <div class="desc">
          总有一些书，让我们可以反复阅读。
        </div>
      </div>
      <div class="v-card-content-two-img"><img src="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&h=350"
             alt=""
             class="v-card-tow-img"></div>
    </div>

    <div class="v-card-bottom clearfix">
      <div class="v-card-bottom-left">
        1天前
      </div>
      <div class="v-card-bottom-right">
        <i class="iconfont cj-font">&#xe600;</i>
        <i class="iconfont cj-font">&#xe650;</i>
        <i class="iconfont cj-font">&#xe687;</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.v-card {
  width: 88%;
  margin: 0 auto;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  background-color: #fff;
}

.v-card-like-text {
  font-size: 14px;
  padding-left: 10px;
  color: #b5b5b5;
}

.v-card-content-one {
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 100%;
  .v-card-img {
    width: 100%;
    height: 150px;
  }
  .v-card-content-one-title {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
  }
}

.v-card-content-two {
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  .v-card-content-two-left {
    float: left;
    width: 76%;
    .v-card-content-two-left-title {
      font-size: 16px;
      font-weight: 600;
    }
    .desc{
      color: #b5b5b5;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .v-card-content-two-img {
    float: left;
    .v-card-tow-img {
      width: 60px;
      height: 60px;
    }
  }
}

.v-card-bottom{
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .v-card-bottom-left{
    font-size: 12px;
  }
  .v-card-bottom-right{
    display: flex;
    flex-direction: row;
    margin-left: 160px;
    .cj-font{
      font-size: 22px;
      margin-right: 15px;
    }
  }
}
</style>
