<template>
  <div class="att-page">
    <div class="att-item"
         v-for="x in 10"
         :key="x">
      <img src="http://image.52chinaweb.com/FgbRUutvfEce8dWf83rt1I0gJsss"
           alt=""
           class="user-img">
      <div class="user-name">常峻</div>
      <div class="user-desc">没有过不去的火焰山</div>
      <div class="atten-btn">关注</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.att-page {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}

.att-item {
  width: 50%;
  text-align: center;
  margin-top: 20px;
  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .user-name {
    font-size: 16px;
    font-weight: bold;
    color: #2a2a2a;
    margin-top: 5px;
  }
  .user-desc {
    font-size: 12px;
    margin-top: 5px;
    color: #2a2a2a;
  }
  .atten-btn {
    margin-top: 10px;
    color: #fff;
    font-weight: bold;
    padding: 4px 10px;
    display: inline-block;
    box-sizing: border-box;
    background-color: #2a2a2a;
    border-radius: 5px;
  }
}
</style>
