<template>
  <div class="con-wrapper">
    <Nav :title="title"
      :left-text="backText"
      left-arrow
      @clickLeft="handleClickLeft"/>
    <van-row>
      <van-col spam="6">
        <NavSider :activeKey="siderMenu" @change="handleNavSider"/>
      </van-col>
      <van-col span="18">
        <GoodList :goodList="goodList"/>
      </van-col>
    </van-row>
    <van-button type="primary" to="over" block style="position: fixed; bottom: 0;" color="#FFBA1E">导入</van-button>
  </div>
</template>

<script>
import Nav from './nav/Nav.vue'
import NavSider from './nav/NavSider.vue'
import GoodList from './menu/GoodList.vue';
import navSiderList from '../store/navsider';
import goods from "../store/newgoods.js";

export default {
  name: 'Home',
  components: { Nav, GoodList, NavSider  },
  data() {
    return {
      title: '优选菜单',
      backText: '返回',
      siderMenu: 0,
      goodsType: '001'
    }
  },
  props: {
    msg: String
  },
  computed: {
    goodList() {
      return goods[this.goodsType];
    }
  },
  methods: {
    handleClickLeft() {
      this.$router.go(-1);
    },
    handleNavSider(index) {
      this.siderMenu = index;
      this.goodsType = navSiderList[index].key;
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
