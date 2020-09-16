<!--
 * Author: wangpeng
 * Date: 2020-09-14 18:21:25
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-16 09:02:02
-->
<template>
  <div>
    <el-dropdown @command="handleSetLayoutMode" trigger="hover">
      <div>
        <svg-icon icon-class="mode" style="font-size: 16px" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :disabled="layoutMode==='left_right'" command="left_right">左右布局</el-dropdown-item>
        <el-dropdown-item :disabled="layoutMode==='top_down'" command="top_down">上下布局</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LayoutModeSelect',
  inject: ['reload'],
  computed: {
    layoutMode() {
      return this.$store.getters.layoutMode
    },
  },
  methods: {
    handleSetLayoutMode(layoutMode) {
      this.$store.dispatch('settings/setLayoutMode', layoutMode)
      this.$message({
        message: this.$t('navbar.switchMode'),
        type: 'success',
      })
      this.reload()
    },
  },
}
</script>

<style>
</style>