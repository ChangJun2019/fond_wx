<template>
  <div class="home-header">
    <div class="header-time">
      <span class="date">16</span>
      <span class="year">Oct.2018</span>
      <div class="triangle"></div>
    </div>
    <div class="header-weather">杭州•阴转多云 22-13℃</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "../../../styles/mixin";

  /* 首页顶部模块
  ----------------------------------------------------------------*/

  .home-header {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-line;
  }

  /* 顶部时间模块 */
  .header-time{
    color: $color-dark;
    font-weight: 900;
    .date{
      font-size: 20px;
      padding-right: 5px;
    }
    .year{
      font-size: 10px;
    }
    /* 三角形 */
    .triangle{
      margin-left: 2px;
      width: 0;
      height: 0;
      border-color:black transparent;
      border-width: 0 0 5px 5px;
      border-style: solid;
      display: inline-block;
    }
    .trianglehover{
      border-color:transparent black ;
    }
  }

  /* 顶部天气 */
  .header-weather{
    color: $color-light;
    font-size: 13px;
  }

</style>
