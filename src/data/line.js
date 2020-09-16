/*
 * Author: wangpeng
 * Date: 2020-09-15 10:29:57
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-15 19:23:02
 */
export default function getData() {
  return {
    legend: {},
    tooltip: {
      trigger: 'item',
      formatter: '{b} （{c}）',
    },
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: [
        '2019-11',
        '2019-12',
        '2020-01',
        '2020-02',
        '2020-03',
        '2020-04',
        '2020-05',
        '2020-06',
        '2020-07',
        '2020-08',
        '2020-09',
        '2020-10',
      ],
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    grid: {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
    },
    series: [
      {
        data: [26, 34, 56, 27, 67, 102, 77, 34, 44, 13, 14, 80],
        type: 'line',
        itemStyle: {
          normal: {
            color: 'transparent',
            borderColor: 'transparent',
            borderWidth: 1,
            borderType: 'solid',
            shadowColor: '#975fe4',
            shadowBlur: 4,
          },
        },
        lineStyle: {},
        areaStyle: {
          color: '#975fe4',
        },
      },
    ],
  }
}

function randomize() {
  return [0, 0, 0].map((v) => {
    return Math.round(300 + Math.random() * 700) / 10
  })
}
