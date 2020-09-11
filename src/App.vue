<!--
 * Author: wangpeng
 * Date: 2020-09-01 12:14:13
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-11 19:16:07
-->
<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  //isRouterAlive用于无刷新更新系统
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
  },
}
</script>
