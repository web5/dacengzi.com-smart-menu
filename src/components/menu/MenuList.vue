<template>
  <div class="module-menulist-wrapper">
    <template v-for="(menu, index) in menuList">
      <van-cell-group
      :key="index">
        <template #title>
          <span class="custom-title">{{menu.title}}</span>
          <van-tag type="danger">{{ menu.type }}</van-tag>
        </template>
        <van-cell >
          <template #default>
            <template v-for="(good, _index) in menu.goodList">
              <van-card
                :key="_index"
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
          </template>
        </van-cell>
      </van-cell-group>
    </template>
  </div>
</template>
<script>
import menuList from "../../store/menulist.js";

export default {
  name: 'MenuList',
  data() {
    return {
      menuList: menuList,
    }
  },
  
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


