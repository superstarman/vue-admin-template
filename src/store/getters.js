/*
 * Author: wangpeng
 * Date: 2020-09-01 12:14:13
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-15 22:24:29
 */
const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  language: (state) => state.app.language,
  layoutMode: (state) => state.settings.layoutMode,
  roles: (state) => state.user.roles,
  permission_routes: (state) => state.permission.routes,
}
export default getters
