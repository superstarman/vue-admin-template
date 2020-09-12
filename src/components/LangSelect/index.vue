<template>
  <div>
    <el-dropdown @command="handleSetLanguage" trigger="hover">
        <div>
          <svg-icon icon-class="language" style="font-size: 16px" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :disabled="language==='zh'" command="zh">cn 简体中文</el-dropdown-item>
          <el-dropdown-item :disabled="language==='en'" command="en">us English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LangSelect',
  inject: ['reload'],
  computed: {
    language() {
      return this.$store.getters.language
    },
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: this.$t('navbar.switchLanguage'),
        type: 'success',
      })
      this.reload()
    }
  }
}
</script>

<style>

</style>