<template>
  <van-sidebar v-bind="$attrs" v-on="$listeners">
      <van-sidebar-item :title="item.name" :key="item.key" v-for="item in navList"/>
  </van-sidebar>
</template>
<script>
import navList from "../../store/navsider.js";

export default {
  data() {
    return {
      navList
    }
  },
  props: {
  }
}
</script>