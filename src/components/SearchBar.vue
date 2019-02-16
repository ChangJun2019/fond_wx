<template>
  <div class="search-bar">
    <input type="text" class="search-box" placeholder-style="color:#B5B5B5;" placeholder="Fond什么都有">
    <span class="search-text">搜索</span>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  /* 这是searchBar组件样式
  ----------------------------------------------------------------*/
  @import "../styles/mixin.scss";

  .search-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .search-box {
      width: 260px;
      height: 40px;
      background-color: $color-line;
      padding-left: 15px;
      border-radius: 20px;
    }
    .search-text {
      margin-left: 20px;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
