<!--
 * Author: wangpeng
 * Date: 2020-09-04 12:02:43
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-04 17:31:22
-->
<template>
  <div class="navbar">
    <div>
      <img class="nav-top-logo" src="@/assets/images/logo.png" />
      <h1 class="nav-top-title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenu',
  data() {
    return {
      title: 'Vue Admin Template',
      logo: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .nav-top-logo {
    width: 32px;
    height: 32px;
    margin: 9px 10px 0 20px;
  }
  .nav-top-title {
    display: inline-block;
    margin: 0;
    color: #4fc08d;
    font-weight: 600;
    line-height: 50px;
    font-size: 15px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: top;
  }
}
</style>