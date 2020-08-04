<template>
  <div class="module-goodlist-wrapper">
    <template v-for="(good, index) in goodList">
      <van-card
        :key="index"
        :num="good.num"
        :price="good.price"
        :desc="good.desc"
        :title="good.title"
        :thumb="good.thumb"
      >
        <template #tags>
          <van-tag plain type="danger">特价</van-tag>
          <van-tag plain type="danger">热销</van-tag>
        </template>
        <template #footer>
          <van-checkbox v-model="good.checked" 
          checked-color="#FFBA1E" shape="square" icon-size="16px"></van-checkbox>
        </template>
      </van-card>
    </template>
  </div>
</template>
<script>
import goodList from "../../store/goodlist.js";

export default {
  name: 'GoodList',
  data() {
    return {
      goodList: goodList,
    }
  },
  
}
</script>
<style lang="less">
  .module-goodlist-wrapper {
    .van-tag--danger {
      // background-color: @orange;
      &.van-tag--plain {
        color: @orange-dark;
      }
    }
    .van-checkbox {
      display: inline-block;
    }
    
    .van-card {
      // color: @orange;
      background-color: @white;
    }
  }
</style>


