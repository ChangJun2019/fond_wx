<template>
  <div class="auth-page">
    <div class="top">
      <div class="no-text">無</div>
      <div class="desc">页面暂时没有相关内容</div>
    </div>
    <div class="bottom">
      <button class="auth-btn">刷新试试</button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
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

.bottom{
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
  box-shadow:#2A2A2A 0px 0px 5px;
  background-color: #2A2A2A;
  border-radius: 0;
}
</style>
