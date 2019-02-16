<template>
  <div>
    <div class="sort-card"
               v-for="item in data"
               :key="item.id"
               @click="toSortDetail(item)">
      <img mode="scaleToFill"
           :src="item.cover"
           class="card-img"
           alt="">
      <p class="sort-label">
        {{item.topic_name}}
      </p>
      <p class="sort-desc">
        {{item.desc}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    toSortDetail(item){
       wx.navigateTo({
        url: `/pages/SortDetail/SortDetail?id=${item.id}&title=${item.topic_name}&desc=${item.desc}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-card {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
  .card-img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    box-shadow: #ddd 0 0 4px;
  }
  .sort-label {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-color: #000;
    font-weight: 800;
    z-index: 1;
  }
  .sort-desc {
    position: absolute;
    bottom: 10px;
    left: 0;
    font-size: 13px;
    color: #fff;
    font-weight: 800;
    line-height: 1.5;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
