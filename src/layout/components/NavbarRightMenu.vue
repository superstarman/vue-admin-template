<!--
 * Author: wangpeng
 * Date: 2020-09-11 10:37:24
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-11 21:45:36
-->
<template>
  <div>
    <div class="right-menu-item">
      <lang-select />
    </div>
    <div class="right-menu-item">
      <el-dropdown class="avatar-container" trigger="hover">
        <div class="avatar-wrapper">
          <div class="user-avatar">
            <img alt="handsome" src="@/assets/images/avatar.png" />
          </div>
          <span>{{username}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>{{$t('navbar.dashboard')}}</el-dropdown-item>
          </router-link>
          <a href="https://github.com/superstarman/vue-admin-template" target="_blank">
            <el-dropdown-item>{{$t('navbar.github')}}</el-dropdown-item>
          </a>
          <el-dropdown-item @click.native="logout" divided>
            <span style="display:block;">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
export default {
  name: 'NavbarRightMenu',
  components: { LangSelect },
  computed: {
    username() {
      return this.$store.getters.name
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.right-menu-item {
  float: right;
  padding: 0 12px;
  height: 100%;
  font-size: 18px;
  color: #5a5e66;
  cursor: pointer;
  vertical-align: text-bottom;

  &.hover-effect {
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  &:first-child {
    margin-right: 20px;
    .svg-icon {
      margin-right: 0;
    }
  }

  .avatar-container {
    .avatar-wrapper {
      display: flex;
      align-items: center;
      .user-avatar {
        display: flex;
        align-items: center;
        margin-right: 4px;
      }
    }
  }
}
</style>