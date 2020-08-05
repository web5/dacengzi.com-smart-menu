<template>
  <div class="con-wrapper">
    <Nav :title="title" 
      :left-text="backText"
      left-arrow
      :next-text="nextText"
      @clickLeft="handleClickLeft"
      @clickRight="handleClickRight"  />
    <MenuList :menuList="menuList"/>
    <van-button type="primary" to="newGoods" block style="position: fixed; bottom: 0;" color="#FFBA1E">下一步</van-button>
  </div>
</template>

<script>
import Nav from './nav/Nav.vue'
import MenuList from './menu/MenuList.vue';
import activemenu from "../store/activemenu.js";

export default {
  name: 'Menu',
  components: {  Nav, MenuList },
  data() {
    return {
      title: '智能活动',
      backText: '返回',
      nextText: '下一步',
      menuList: activemenu
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
