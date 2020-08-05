<template>
  <div class="module-goodlist-wrapper">
    <van-checkbox-group v-model="checkGoods">
    <template v-for="(good, index) in goodList">
      <van-card
        :key="index"
        :num="good.num"
        :title="good.title"
        :price="good.price"
        :thumb="good.thumb"
      >
        <template #tags>
          <van-tag type="danger" v-if="good.active">{{good.active}}</van-tag>
        </template>
        <template #desc>
          ¥ {{good.price}}
        </template>
        <template #price>
          月销&nbsp;{{good.num}}&nbsp;点赞&nbsp;{{good.up}}
        </template>
        <template #origin-price>
            
        </template>
        <template #num>
          
        </template>
        <template #footer>
          <van-checkbox :name="good.key" v-if="good.checked !== undefined"
          checked-color="#FFBA1E" shape="square" icon-size="16px"></van-checkbox>
        </template>
      </van-card>
    </template>
    </van-checkbox-group>
  </div>
</template>
<script>

export default {
  name: 'GoodList',
  data() {
    return {
      checkGoods: ['001001']
    }
  },
  props: {
    goodList: Array,
    default: () => []
  },
  computed: {
  },
  methods: {
  }
  
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


