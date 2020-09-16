<!--
 * Author: wangpeng
 * Date: 2020-09-14 18:21:25
 * LastEditors: wangpeng
 * LastEditTime: 2020-09-15 20:17:52
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-content">
      <el-row>
        <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="24">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.totalSales')}}</span>
                </div>
                <div class="charts-total">
                  <span>￥126560</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <div class="charts-content-sub">
                  <span>
                    {{$t('dashboard.wowChange')}}
                    <span class="charts-content-sub-trendtext">12%</span>
                  </span>
                  <span class="el-icon-caret-top charts-content-sub-up"></span>
                </div>
                <div class="charts-content-sub">
                  <span>
                    {{$t('dashboard.dodChange')}}
                    <span class="charts-content-sub-trendtext">11%</span>
                  </span>
                  <span class="el-icon-caret-bottom charts-content-sub-bottom"></span>
                </div>
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.dailySales')}}</span>
                <span>￥12,423</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="0">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.visits')}}</span>
                </div>
                <div class="charts-total">
                  <span>8,846</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <e-charts :options="line" autoresize ref="line" />
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.dailyVisits')}}</span>
                <span>1,234</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="6" :md="0" :sm="0" :xl="6" :xs="0" class="lg-xl-style">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.payments')}}</span>
                </div>
                <div class="charts-total">
                  <span>6,560</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <e-charts :options="bar" autoresize ref="bar" />
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.conversationRates')}}</span>
                <span>60%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="6" :md="0" :sm="0" :xl="6" :xs="0" class="lg-xl-style">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.oEffect')}}</span>
                </div>
                <div class="charts-total">
                  <span>78%</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <div class="progress-style">
                  <el-progress :percentage="78" :stroke-width="20" :text-inside="true"></el-progress>
                </div>
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.wowChange')}}</span>
                <span>12%</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="0" :md="12" :sm="12" :xl="0" :xs="0">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t("dashboard.payments")}}</span>
                </div>
                <div class="charts-total">
                  <span>6,560</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <e-charts :options="bar" autoresize ref="bar" />
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.conversationRates')}}</span>
                <span>60%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="0" :md="12" :sm="12" :xl="0" :xs="0">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.oEffect')}}</span>
                </div>
                <div class="charts-total">
                  <span>78%</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <div class="progress-style">
                  <el-progress :percentage="78" :stroke-width="20" :text-inside="true"></el-progress>
                </div>
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.wowChange')}}</span>
                <span>12%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="24">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.visits')}}</span>
                </div>
                <div class="charts-total">
                  <span>8,846</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <e-charts :options="line" autoresize ref="line" />
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.dailyVisits')}}</span>
                <span>1,234</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
      </el-row>
      <el-row>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="24">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.payments')}}</span>
                </div>
                <div class="charts-total">
                  <span>6,560</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <e-charts :options="bar" autoresize ref="bar" />
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.conversationRates')}}</span>
                <span>60%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
      </el-row>
      <el-row>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="24">
          <div class="grid-content-wrapper">
            <div class="grid-content">
              <div class="charts-top">
                <div class="charts-title">
                  <span>{{$t('dashboard.oEffect')}}</span>
                </div>
                <div class="charts-total">
                  <span>78%</span>
                </div>
                <span class="svg-class">
                  <el-tooltip
                    :content="$t('dashboard.introduce')"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <svg-icon icon-class="info" />
                  </el-tooltip>
                </span>
              </div>
              <div class="charts-content">
                <div class="progress-style">
                  <el-progress :percentage="78" :stroke-width="20" :text-inside="true"></el-progress>
                </div>
              </div>
              <div class="charts-footer">
                <span>{{$t('dashboard.wowChange')}}</span>
                <span>12%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
        <el-col :lg="0" :md="0" :sm="0" :xl="0" :xs="0"></el-col>
      </el-row>

      <el-row>
        <el-col :lg="12" :md="24" :sm="24" :xl="12" :xs="24">
          <div class="grid-content-wrapper">
            <div class="grid-content-other">
              <div class="grid-content-other-header">
                <div class="grid-content-other-header-title">{{$t('dashboard.onlineTopSearch')}}</div>
                <div class="switch-btn">
                  <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="switchVal"></el-switch>
                </div>
              </div>
              <div class="grid-content-other-body">
                <el-table
                  :data="tableData"
                  :default-sort="{prop: 'date', order: 'descending'}"
                  fit
                  style="width: 100%"
                >
                  <el-table-column
                    :label="$t('dashboard.date')"
                    align="center"
                    prop="date"
                    sortable
                  ></el-table-column>
                  <el-table-column
                    :label="$t('dashboard.rank')"
                    align="center"
                    prop="rank"
                    sortable
                  ></el-table-column>
                  <el-table-column
                    :formatter="formatter"
                    :label="$t('dashboard.count')"
                    align="center"
                    prop="count"
                  ></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="12" :md="0" :sm="0" :xl="12" :xs="0" class="lg-xl-style">
          <div class="grid-content-wrapper">
            <div class="grid-content-other">
              <div class="grid-content-other-header">
                <div class="grid-content-other-header-title">{{$t('dashboard.propOfSales')}}</div>
              </div>
              <div class="grid-content-other-body" style="height: 331px">
                <e-charts :options="pie" autoresize />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="0" :md="24" :sm="24" :xl="0" :xs="24">
          <div class="grid-content-wrapper">
            <div class="grid-content-other">
              <div class="grid-content-other-header">
                <div class="grid-content-other-header-title">The Proportion Of Sales</div>
              </div>
              <div class="grid-content-other-body" style="height: 331px">
                <e-charts :options="pie" autoresize />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="echarts-scatter">
        <e-charts :options="scatter" autoresize />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

import getLine from '@/data/line'
import getBar from '@/data/bar'
import getPie from '@/data/pie'
import scatter from '@/data/scatter'

export default {
  name: 'Dashboard',
  components: { ECharts },
  computed: {
    ...mapGetters(['name', 'roles']),
  },
  data() {
    return {
      switchVal: true,
      tableData: [
        {
          date: '2016-05-02',
          rank: 1,
          count: 12500,
        },
        {
          date: '2016-05-04',
          rank: 5,
          count: 25,
        },
        {
          date: '2016-05-01',
          rank: 3,
          count: 1500,
        },
        {
          date: '2016-05-03',
          rank: 2,
          count: 8000,
        },
        {
          date: '2016-07-03',
          rank: 4,
          count: 1000,
        },
      ],
      line: getLine(),
      bar: getBar(this),
      pie: getPie(this),
      scatter,
    }
  },
  methods: {
    formatter(row, column) {
      return row.count
    },
  },
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.dashboard-container {
  position: relative;
  margin: 30px;
  .dashboard-content {
    max-width: 1200px;
    margin: 0 auto;
    .el-row {
      margin-left: -12px;
      margin-right: -12px;

      .el-col {
        margin-bottom: 24px;
        .grid-content-wrapper {
          padding: 0 12px;
          .grid-content {
            padding: 20px 24px 8px;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            .charts-top {
              position: relative;
              .charts-title {
                height: 22px;
                line-height: 22px;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
              }
              .charts-total {
                height: 38px;
                line-height: 38px;
                margin-top: 4px;
                font-size: 30px;
                color: rgba(0, 0, 0, 0.85);
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                overflow: hidden;
              }
              .svg-class {
                position: absolute;
                top: 0;
                right: -4px;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
                cursor: pointer;
              }
            }
            .charts-content {
              height: 44px;
              &-sub {
                display: inline-block;
                font-size: 14px;
                line-height: 22px;
                margin-right: 16px;
                color: rgba(0, 0, 0, 0.85);
                &-trendtext {
                  margin-left: 8px;
                }
                &-up {
                  color: #ff0000;
                  margin-left: 4px;
                }
                &-bottom {
                  color: #4fc08d;
                  margin-left: 4px;
                }
              }

              .progress-style {
                position: relative;
                width: 100%;
                top: 12px;
              }
            }
            .charts-footer {
              padding-top: 9px;
              margin-top: 8px;
              font-size: 14px;
              color: rgba(0, 0, 0, 0.85);
              border-top: 1px solid #f0f0f0;
              & > span:first-child {
                margin-right: 8px;
              }
            }
          }
          .grid-content-other {
            background-color: #fff;
            &-header {
              position: relative;
              display: flex;
              align-items: center;
              padding: 16px 24px;
              font-size: 16px;
              border: 1px solid #f0f0f0;
              .switch-btn {
                position: absolute;
                top: 15px;
                right: 20px;
              }
            }
            &-body {
              padding: 16px 24px;
            }
          }
        }
      }

      .lg-xl-style {
        @media only screen and (min-width: 1200px) {
          display: block;
        }
      }
    }

    .echarts-scatter {
      width: 100%;
      height: 400px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
