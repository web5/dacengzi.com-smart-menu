<template>
  <div class="con-wrapper">
    <Nav :title="title" 
      :left-text="backText"
      left-arrow
      :next-text="nextText"
      @clickLeft="handleClickLeft"
      @clickRight="handleClickRight"  />
    <MenuList />
  </div>
</template>

<script>
import Nav from './nav/Nav.vue'
import MenuList from './menu/MenuList.vue';

export default {
  name: 'Menu',
  components: {  Nav, MenuList },
  data() {
    return {
      title: '智能菜单',
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
