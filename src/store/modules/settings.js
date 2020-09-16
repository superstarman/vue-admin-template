/*
 * Author: wangpeng
 * Date: 2020-09-14 18:21:25
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-15 22:32:29
 */
import Cookies from 'js-cookie'
import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo, layoutMode } = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  layoutMode: Cookies.get('layoutMode') || layoutMode,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  SET_LAYOUT_MODE: (state, layoutMode) => {
    state.layoutMode = layoutMode
    Cookies.set('layoutMode', layoutMode)
  },
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  setLayoutMode({ commit }, layoutMode) {
    commit('SET_LAYOUT_MODE', layoutMode)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
