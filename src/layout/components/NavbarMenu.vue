<!--
 * Author: wangpeng
 * Date: 2020-09-04 12:02:43
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-11 17:53:46
-->
<template>
  <div class="navbar">
    <div class="navbar-left">
      <img src="@/assets/images/logo.png" />
      <h3 v-if="isTextShow">{{ title }}</h3>
      <hamburger
        :is-active="sidebar.opened"
        @toggleClick="toggleSideBar"
        class="hamburger-container"
        v-if="isShow"
      />
    </div>
    <div class="nav-top-menu">
      <topbar />
    </div>
    <div class="right-menu">
      <navbar-right-menu />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import Hamburger from '@/components/Hamburger'
import Topbar from './Sidebar/Topbar'
import NavbarRightMenu from './NavbarRightMenu'
import { Sidebar } from '.'
export default {
  name: 'NavbarMenu',
  components: { Hamburger, Topbar, NavbarRightMenu },
  data() {
    return {
      title: 'vue-admin-template',
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'device', 'avatar', 'permission_routes']),
    isTextShow() {
      return this.device !== 'mobile'
    },
    isShow() {
      return !this.sidebar.opened && this.device === 'mobile'
    },
    variables() {
      return variables
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  },
}
</script>
<style lang="css">
.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 50px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 50px;
  line-height: 50px;
}
</style>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .navbar-left {
    display: flex;
    align-items: center;
    width: 240px;
    height: 50px;
    padding-left: 20px;
    img {
      width: 32px;
      height: 32px;
    }
    h3 {
      color: #4fc08d;
      font-weight: 600;
      font-size: 18px;
      margin-left: 8px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
    .hamburger-container {
      line-height: 46px;
      height: 100%;
      margin-left: 10px;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }

  .nav-top-menu {
    flex: 1 1 0%;
    min-width: 0;
    overflow: hidden;
  }

  .right-menu {
    min-width: 280px;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      float: right;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }

      .avatar-container {
        margin-right: 20px;
        padding: 0 10px;
        cursor: pointer;
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
  }
}
</style>