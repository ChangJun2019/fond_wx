<template>
  <div class="sort-page">
    <span class="label-text"># 搜索</span>
    <SearchBar></SearchBar>
    <span class="label-text"># 分类</span>
    <SortCard :data="topics"></SortCard>
  </div>
</template>

<script>
  import SearchBar from '../../components/SearchBar'
  import SortCard from './components/SortCard'

  export default {
    data() {
      return {
        topics:[]
      }
    },
    components: {
      SearchBar,
      SortCard
    },
    methods: {
      async getOneSort(){
        const data = await this.$Cj.request('topics')
        this.topics = data
        console.log(this.topics)
      }
    },
    mounted() {
      this.getOneSort()
    }
  }
</script>

<style lang="scss" scoped>
  .sort-page {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* 页面标签样式 */
  .label-text {
    font-weight: bold;
    font-size: 17px;
    margin: 15px;
  }
</style>
