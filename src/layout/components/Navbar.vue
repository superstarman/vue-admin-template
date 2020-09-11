<template>
  <div class="navbar">
    <img class="navbar-logo" src="@/assets/images/logo.png" v-if="isShow" />
    <hamburger
      :is-active="sidebar.opened"
      @toggleClick="toggleSideBar"
      class="hamburger-container"
      v-if="isShow"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <navbar-right-menu />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import NavbarRightMenu from './NavbarRightMenu'

export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
    NavbarRightMenu,
  },
  computed: {
    ...mapGetters(['sidebar', 'device', 'avatar']),
    isShow() {
      return !this.sidebar.opened && this.device === 'mobile'
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .navbar-logo {
    float: left;
    width: 32px;
    height: 32px;
    margin: 9px 10px 0 20px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
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
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
