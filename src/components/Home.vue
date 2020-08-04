<template>
  <div class="con-wrapper">
    <Nav :title="title" 
      :right-text="nextText"
      @clickRight="handleClickRight"/>
    <GoodList />
  </div>
</template>

<script>
import Nav from './nav/Nav.vue'
import GoodList from './menu/GoodList.vue';

export default {
  name: 'Home',
  components: { GoodList, Nav  },
  data() {
    return {
      title: '商品列表',
      nextText: '智能菜单'
    }
  },
  props: {
    msg: String
  },
  methods: {
    handleClickLeft() {
      
    },
    handleClickRight() {
      this.$router.push({
        path: '/menu'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
