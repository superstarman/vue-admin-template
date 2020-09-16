/*
 * Author: wangpeng
 * Date: 2020-09-15 17:12:58
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-15 20:12:49
 */
export default function getData(self) {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      right: 10,
      data: [
        self.$t('dashboard.item1'),
        self.$t('dashboard.item2'),
        self.$t('dashboard.item3'),
        self.$t('dashboard.item4'),
        self.$t('dashboard.item5'),
      ],
    },
    series: [
      {
        name: self.$t('dashboard.resource'),
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: self.$t('dashboard.item1') },
          { value: 310, name: self.$t('dashboard.item2') },
          { value: 234, name: self.$t('dashboard.item3') },
          { value: 135, name: self.$t('dashboard.item4') },
          { value: 1548, name: self.$t('dashboard.item5') },
        ],
      },
    ],
  }
}
