/*
 * Author: wangpeng
 * Date: 2020-09-01 12:14:13
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-10 12:23:07
 */
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
    withoutAnimation: false,
  },
  device: 'desktop',
  idx: 10000, //顶部导航栏状态
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  GET_TOPBAR_IDX: (state, idx) => {
    state.idx = idx
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  getTopbarIdx({ commit }, idx) {
    commit('GET_TOPBAR_IDX', idx)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
