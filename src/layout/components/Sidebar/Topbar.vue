<!--
 * Author: wangpeng
 * Date: 2020-09-08 10:42:55
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-10 18:32:59
-->
<script>
import { mapGetters } from 'vuex'
import path from 'path'
import { isExternal } from '@/utils/validate'
import IconItem from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
import variables from '@/styles/variables.scss'
export default {
  name: 'TopbarItem',
  components: { IconItem, AppLink },
  mixins: [FixiOSBug],
  computed: {
    ...mapGetters(['permission_routes']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    getTopIdx() {
      return this.$store.state.app.idx
    },
  },
  watch: {
    getTopIdx() {
      //监听store中idx的变化
      let idx = this.getTopIdx
      if (idx === 10000)
        this.subMenus = this.createSubItem(this.permission_routes)
      else if (idx === -1) {
        this.subMenus = this.createSubItem([])
        console.log('出现侧边栏、菜单键')
      } else {
        let route = {
          //构造一个更多路由对象
          path: '/',
          name: 'More',
          meta: { title: 'More' },
          children: [],
        }
        let count = 0,
          routes = []
        for (let i = 0; i < this.permission_routes.length; i++) {
          if (!this.permission_routes[i].hidden) {
            if (count <= idx) {
              routes.push(this.permission_routes[i])
              count++
            } else {
              route.children.push(this.permission_routes[i])
            }
          }
        }
        routes.push(route)
        this.subMenus = this.createSubItem(routes)
      }
    },
  },
  data() {
    this.onlyOneChild = null
    return {
      subMenus: null,
    }
  },
  render(h) {
    return (
      <el-menu
        active-text-color={variables.menuActiveText}
        background-color={variables.menuBg}
        default-active={this.activeMenu}
        text-color={variables.menuText}
        class="el-menu-demo"
        mode="horizontal"
      >
        {this.subMenus}
      </el-menu>
    )
  },
  created() {
    console.log(this.permission_routes)
    this.subMenus = this.createSubItem(this.permission_routes)
  },
  methods: {
    createSubItem(arr, base) {
      //base用于记住路由
      let content = []
      arr.map((item) => {
        if (!item.hidden) {
          if (
            this.hasOneShowingChild(item.children, item) &&
            (!this.onlyOneChild.children ||
              this.onlyOneChild.noShowingChildren) &&
            !item.alwaysShow
          ) {
            if (this.onlyOneChild.meta) {
              content.push(
                <app-link
                  to={this.resolvePath(
                    base ? this.resolvePath(base, item.path) : item.path, //此处需要记住父路由
                    this.onlyOneChild.path,
                  )}
                >
                  <el-menu-item
                    index={this.resolvePath(
                      base ? this.resolvePath(base, item.path) : item.path,
                      this.onlyOneChild.path,
                    )}
                  >
                    <template slot="title">
                      <icon-item
                        icon={
                          this.onlyOneChild.meta.icon ||
                          (item.meta && item.meta.icon)
                        }
                        title={this.onlyOneChild.meta.title}
                      />
                    </template>
                  </el-menu-item>
                </app-link>,
              )
            }
          } else {
            content.push(
              <el-submenu
                ref="subMenu"
                index={this.resolvePath(base ? base : item.path, item.path)}
              >
                <template slot="title">
                  <icon-item
                    v-if="item.meta"
                    icon={item.meta && item.meta.icon}
                    title={item.meta.title}
                  />
                </template>
                {this.createSubItem(
                  item.children,
                  this.resolvePath(base ? base : item.path, item.path),
                )}
              </el-submenu>,
            )
          }
        }
      })
      return content
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(basePath, routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(basePath)) {
        return basePath
      }
      return path.resolve(basePath, routePath)
    },
  },
}
</script>
<style lang="scss">
.nav-top-menu .el-menu {
  display: inline-block;
  height: 50px;
  overflow: hidden;
  & > a {
    float: left;
  }
  & > li {
    display: inline-block;
  }
}

.el-menu-item,
.el-submenu__title {
  height: 50px;
  line-height: 50px;
}
.svg-icon {
  margin-right: 8px;
}

.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  margin-top: 0;
}
</style>