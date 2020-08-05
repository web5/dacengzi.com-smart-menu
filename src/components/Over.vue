<template>
  <div class="con-wrapper">
    <Nav :title="title" 
      :left-text="backText"
      left-arrow
      :next-text="nextText"
      @clickLeft="handleClickLeft"
      @clickRight="handleClickRight"  />
    <van-row style="margin-top: 120px; text-align: center;">
      <van-col span="8"></van-col>
      <van-col span="8">
        <van-icon name="passed" color="#07c160" size="3rem"/>
        <div>导入成功</div>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>
    <van-button type="primary" to="goods" block style="position: fixed; bottom: 0;" color="#FFBA1E">返回首页</van-button>
  </div>
</template>

<script>
import Nav from './nav/Nav.vue'

export default {
  name: 'Menu',
  components: {  Nav },
  data() {
    return {
      title: '完成',
      backText: '返回',
      nextText: '下一步'
    }
  },
  props: {
    msg: String
  },
  methods: {
    handleClickLeft() {
      this.$router.go(-1);
    },
    handleClickRight() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
