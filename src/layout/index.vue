<template>
  <!-- 左右布局 -->
  <div :class="classObj" class="app-wrapper" v-if="layoutMode === 'left_right'">
    <div @click="handleClickOutside" class="drawer-bg" v-if="device==='mobile'&&sidebar.opened" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
  <!-- 上下布局 -->
  <div :class="classObj" class="app-wrapper" v-else>
    <div @click="handleClickOutside" class="drawer-bg" v-if="device==='mobile'&&sidebar.opened" />
    <sidebar class="sidebar-container" v-if="device==='mobile'" />
    <div :class="{'fixed-header fixed-header-else':fixedHeader}">
      <navbar-menu />
    </div>
    <app-main />
  </div>
</template>

<script>
import { Navbar, NavbarMenu, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    NavbarMenu,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    layoutMode() {
      return this.$store.state.settings.layoutMode
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    /* 左右布局 */
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar:
          (this.layoutMode === 'left_right' ||
            (this.layoutMode === 'top_down' && this.device === 'mobile')) &&
          !this.sidebar.opened,
        openSidebar:
          (this.sidebar.opened &&
            this.device !== 'mobile' &&
            this.layoutMode === 'left_right') ||
          (this.layoutMode === 'top_down' &&
            this.device === 'mobile' &&
            this.sidebar.opened),
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      }
    },
  },
  created() {
    console.log(this.device)
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.fixed-header-else {
  width: 100%;
}

.hideSidebar .fixed-header-else {
  width: 100%;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
