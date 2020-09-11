/*
 * Author: wangpeng
 * Date: 2020-09-11 14:43:55
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-11 14:44:26
 */
// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
