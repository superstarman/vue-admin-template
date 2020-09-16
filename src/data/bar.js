/*
 * Author: wangpeng
 * Date: 2020-09-15 10:29:57
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-15 19:46:17
 */
export default function getData(self) {
  return {
    tooltip: {},
    dataset: {
      // Provide data.
      source: [
        [self.$t('dashboard.product'), '2015', '2016', '2017'],
        [self.$t('dashboard.mLatte'), ...randomize()],
        [self.$t('dashboard.milkTea'), ...randomize()],
        [self.$t('dashboard.cheeseCocoa'), ...randomize()],
        [self.$t('dashboard.wBrownie'), ...randomize()],
      ],
    },
    // Declare X axis, which is a category axis, mapping
    // to the first column by default.
    xAxis: {
      type: 'category',
      show: false, //不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
    },
    // Declare Y axis, which is a value axis.
    yAxis: {
      show: false,
      splitLine: {
        show: false, //不显示网格线
      },
    },
    grid: {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
    },
    // Declare several series, each of them mapped to a
    // column of the dataset by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  }
}

function randomize() {
  return [0, 0, 0].map((v) => {
    return Math.round(300 + Math.random() * 700) / 10
  })
}
