<template>
  <div class="module-nav-wrapper">
    <van-nav-bar
      v-bind="$attrs"
      :fixed="true"
      :placeholder="true"
      @click-left="handleClickLeft"
      @click-right="handleClickRight"
    ></van-nav-bar>
  </div>
</template>
<script>
export default {
  name:'Nav',
  data() {
    return {
      backText: '上一步'
    }
  },
  props: {
  },
  methods: {
    handleClickLeft() {
      this.$emit('clickLeft');
    },
    handleClickRight() {
      this.$emit('clickRight');
    }
  }
}
</script>
<style lang="less">
  .module-nav-wrapper{
    //margin-bottom: 10px;
    // .van-nav-bar {
    //   color: @white;
    //   background: @orange-dark;
    // }
    .van-nav-bar__title {
      color: @orange;
    }
  }
</style>


