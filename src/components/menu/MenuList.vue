<template>
  <div class="module-menulist-wrapper">
    <template v-for="(menu, index) in menuList">
      <van-cell-group
      :key="index">
        <template #title>
          <span class="custom-title">{{menu.title}}</span>
        </template>
        <van-cell >
          <template #default>
            <template v-for="(good, _index) in menu.goodList">
             <van-card
              :key="_index"
              :num="good.num"
              :price="good.price"
              :title="good.title"
              :origin-price="good.origin_price"
              :thumb="good.thumb"
            >
                <template #title>
                  {{good.title}} <van-tag plain type="danger" v-if="good.exist">本店已存在</van-tag>
                </template>
                <template #tags>
                  <van-tag type="danger" v-if="good.active">{{good.active}}</van-tag>
                </template>
                <template #desc>
                  <van-radio-group v-model="good.selected_price">
                    <van-radio :name="1" icon-size="1rem" checked-color="#FFBA1E">智能价&nbsp;¥&nbsp;{{good.price}}</van-radio>
                    <van-radio :name="0" icon-size="1rem" checked-color="#FFBA1E">原价&nbsp;¥&nbsp;{{good.origin_price}}</van-radio>
                  </van-radio-group>
                </template>
                <template #price>
                  月销&nbsp;{{good.num}}&nbsp;点赞&nbsp;{{good.up}}
                </template>
                <template #origin-price>
                   
                </template>
                <template #num>
                  
                </template>
                <template #footer>
                  <van-checkbox v-model="good.checked" 
                  checked-color="#FFBA1E" shape="square" icon-size="16px"></van-checkbox>
                </template>
              </van-card>
            </template>
          </template>
        </van-cell>
      </van-cell-group>
    </template>
  </div>
</template>
<script>
export default {
  name: 'MenuList',
  data() {
    return {
    }
  },
  props: {
    menuList: {
      type: Array,
      defaut: () => []
    }
  }
  
}
</script>
<style lang="less">
  .module-menulist-wrapper {
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


