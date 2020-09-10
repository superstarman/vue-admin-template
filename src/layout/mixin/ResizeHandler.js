/*
 * Author: wangpeng
 * Date: 2020-09-01 12:14:13
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-10 16:47:53
 */
import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design
let timer = null,
  idx = 10000

export default {
  data() {
    return {
      topbar: null,
      itemList: [],
    }
  },
  computed: {
    getTopIdx() {
      return this.$store.state.app.idx
    },
    layoutMode() {
      return this.$store.state.settings.layoutMode
    },
  },
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    if (this.layoutMode === 'top_down') {
      this.topbar = document.querySelector('.nav-top-menu')
      //遍历topbar>ul获取子元素宽度
      let someVal = 0
      for (let i = 0; i < this.topbar.children[0].children.length; i++) {
        let itemWidth = this.topbar.children[0].children[
          i
        ].getBoundingClientRect().width
        let wid = this.topbar.children[0].children[i].classList.contains(
          'el-submenu',
        )
          ? 3
          : 0
        someVal += itemWidth + wid
        this.itemList[i] = someVal
      }
      this.$_getTopbarIdx()
      const isMobile = this.$_isMobile()
      console.log(isMobile)
      if (isMobile) {
        store.dispatch('app/toggleDevice', 'mobile')
        store.dispatch('app/closeSideBar', { withoutAnimation: true })
      }
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      if (this.layoutMode === 'top_down') {
        return this.getTopIdx === -1
      } else {
        const rect = body.getBoundingClientRect()
        return rect.width - 1 < WIDTH
      }
    },
    $_resizeHandler() {
      //简单防抖
      let self = this
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        self.layoutMode === 'top_down' && self.$_getTopbarIdx()
        if (!document.hidden) {
          const isMobile = this.$_isMobile()
          store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

          if (isMobile) {
            store.dispatch('app/closeSideBar', { withoutAnimation: true })
          }
        }
      }, 100)
    },
    $_getTopbarIdx() {
      /* 用于监测topbar宽度变化 */
      //More长度暂定为92
      let idx = 10000 //默认topbar不需要收缩
      let topbarWidth = this.topbar.getBoundingClientRect().width
      //遍历itemList
      if (this.itemList[this.itemList.length - 1] > topbarWidth) {
        for (var j = this.itemList.length - 2; j >= 0; j--) {
          if (this.itemList[j] + 92 <= topbarWidth) {
            idx = j
            break
          }
        }
        if (j === -1) idx = j
      }
      store.dispatch('app/getTopbarIdx', idx)
    },
  },
}
