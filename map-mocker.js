/**
 * @file Mock.js 的配置
 * @author yuanyuanlife
 *
 * 用随机数据模拟 API，Mock 数据的请求都用 /mock/ 开头
 * Mock.js 文档 https://github.com/nuysoft/mock/wiki
 * */

const currentDayZeroOClock = require(process.cwd() + "/mock/random/time.js")();

module.exports = function (app, Mock) {
  // 模拟搜索机房和 VIP 接口
  app.get("/mock/bigscreen_search", (req, res) => {
    const data = Mock.mock({
      // 属性 busgrp_matches 的值是一个数组，其中含有 1 到 10 个元素
      "busgrp_matches|1-10": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "busgrp_id|+1": 1,
          busgrp_name:
            "@cword('电信百度手云世纪小在家文库互联通教育网铁交平台四海地图众测', 6, 20)",
          is_idc: false
        }
      ],
      // 属性 idc_matches 的值是一个数组，其中含有 1 到 10 个元素
      "idc_matches|1-10": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "idc_id|+1": 1,
          "idc_name|6": "@character(upper)", // 一个长度为 6 的大写字母字符串
          is_idc: true,
          busgrp: {
            "busgrp_name|6-20": "@character()",
            busgrp_id: "@natural(1, 100)",
            is_idc: false
          }
        }
      ],
      // 属性 vip_matches 的值是一个数组，其中含有 1 到 10 个元素
      "vip_matches|1-10": [
        {
          vip_range: "@ip",
          busgrp_name: "@ip",
          is_vip: true,
          idc: {
            "busgrp_name|6": "@character(upper)",
            idc_id: "@natural(1, 100)",
            is_idc: true
          },
          busgrp: {
            "busgrp_name|6-20": "@character()",
            busgrp_id: "@natural(1, 100)",
            is_idc: false
          }
        }
      ]
    });
    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });

  // 模拟地图区块点击折线图接口
  const regionApi = require(process.cwd() + "/mock/random/map/region-line.js")(
    app,
    Mock
  );
  app.get("/mock/bigscreen_block", regionApi);

  // 模拟安全状态、异常事件列表的接口
  app.get("/mock/bigscreen_risk", (req, res) => {
    const data = Mock.mock({
      "events|1-10": [
        {
          id: "@natural(10000000)", // ?这是啥？？？不是事件ID?估计是数据库的ID
          event_id: "@natural(100000000)",
          ip: "@ip",
          peak: "@natural(20759175936)",
          detail_txt: "NTP DRDoS",
          type_txt: "DDoS攻击",
          stime_i: "@date('T')",
          type: "@natural(0, 2)",
          status: "@boolean",
          "busgrp_ids|1-5": ["@natural(1, 100)"],
          idc_id: "@natural(0, 999)", // 假设全都是有机房的
          split_ratio: 1,
          duration: "@natural(0, 86400)",
          record: "@date('HH:mm:ss') @csentence(15, 20)"
        }
      ],
      risk_state: "@natural(0, 2)", // safe \ not-bad \ emergency
      attacking: "@boolean" // 有攻击时图标有扫光效果
    });

    data.events.forEach((event) => {
      event.stime_i = Math.round(event.stime_i / 1000);
      event.etime_i = event.stime_i + event.duration;
    });

    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });

  // 饼图引用
  const barMock = require(process.cwd() + "/mock/random/bar.js")(app, Mock);
  // 地图引用
  const mapMock = require(process.cwd() + "/mock/random/map/index.js")(
    app,
    Mock
  );

  // 模拟时间点的数据接口
  app.get("/mock/bigscreen_moment", (req, res) => {
    const data = Mock.mock({
      "isp|0-10": [
        {
          isp_name: "@cword('电信联通教育网铁交', 2, 4)",
          "isp_id|+1": 1
        }
      ],
      "ip_type|1-3": [
        {
          "type|+1": 1,
          name: "IPv@natural(1, 10)"
        }
      ],
      "proportion|0-6": [
        // 饼图
        {
          "k|5-10": "@character(upper)",
          v: "@natural(1, 300000)"
        }
      ],
      idc_isp_perct: [
        {
          idc_name: "M3BGP",
          isp_list: [
            {
              isp_name: "电信",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "铁通",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            }
          ]
        },
        {
          idc_name: "M1BGP",
          isp_list: [
            {
              isp_name: "电信",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "联通",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "移动",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            }
          ]
        },
        {
          idc_name: "M2BGP",
          isp_list: [
            {
              isp_name: "电信",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "联通",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+60": currentDayZeroOClock
                }
              ]
            }
          ]
        }
      ]
    });
    data.isp.splice(0, 0, {
      isp_name: "全部线路",
      isp_id: 0
    });
    data.ddos_geo = barMock; // 条形图
    data.map = mapMock; // 地图

    // 完整返回
    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });

  app.get("/mock/home_moment", (req, res) => {
    const data = Mock.mock({
      "isp|1-10": [
        {
          isp_name: "@cword('电信联通教育网铁交', 2, 4)",
          "isp_id|+1": 1
        }
      ],
      "ip_type|1-3": [
        {
          "type|+1": 1,
          name: "IPv@natural(10)"
        }
      ],
      "proportion|1-6": [
        // 饼图
        {
          "k|5-10": "@character(upper)",
          v: "@natural(1, 300000)"
        }
      ],
      idc_isp_perct: [
        {
          idc_name: "M3BGP",
          isp_list: [
            {
              isp_name: "电信",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "铁通",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            }
          ]
        },
        {
          idc_name: "M1BGP",
          isp_list: [
            {
              isp_name: "电信",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "联通",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "移动",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            }
          ]
        },
        {
          idc_name: "M2BGP",
          isp_list: [
            {
              isp_name: "电信",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            },
            {
              isp_name: "联通",
              max_perct: "@float(70, 100)",
              "data|120": [
                {
                  influx_perct: "@float(0, 40)",
                  dropflux_perct: "@float(50, 100)",
                  "date|+1": currentDayZeroOClock
                }
              ]
            }
          ]
        }
      ]
    });
    data.isp.splice(0, 0, {
      isp_name: "全部线路",
      isp_id: 0
    });
    data.ddos_geo = barMock; // 条形图
    data.map = mapMock; // 地图

    // 完整返回
    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });

  // 流量折线图引用
  const fluxLineMock = require(process.cwd() + "/mock/random/line/flux.js")(
    app,
    Mock
  );

  // 模拟时间段的数据接口
  app.get("/mock/bigscreen_trend", (req, res) => {
    const data = Mock.mock({
      time: {
        title: "@cword('电信联通教育网铁交', 0, 2)",
        "data|1440": [
          {
            total_time: "@float(0, 1)",
            response_time: "@float(0, 1)",
            connect_time: "@float(0, 1)",
            "date|+60": currentDayZeroOClock, // +60 表示从 currentDayZeroOClock 开始， 一分钟一个点
            response_count: "@natural(1, 30)",
            connect_count: "@natural(1, 300)",
            new_conn: "@natural(1, 300000)",
            close: "@natural(1, 300000)"
          }
        ]
      },
      http: {
        title: "@cword('电信联通教育网铁交', 0, 2)",
        "data|1440": [
          {
            http_resp: "@natural(1, 10)",
            cc_count: "@natural(1, 100)",
            http_5xx: "@natural(1, 300)",
            http_404: "@natural(1, 3000)",
            http_4xx: "@natural(1, 2000)",
            http_req: "@natural(1, 300000)",
            "date|+60": currentDayZeroOClock
          }
        ],
        type_list: [
          {
            name: "HTTP",
            value: "HTTP"
          }
        ]
      },
      network: {
        title: "@cword('电信联通教育网铁交', 0, 2)",
        "data|1440": [
          {
            network_time: "@natural(1, 1000)",
            rst_close_perct: "@float(0, 1)",
            jam_perct: "@float(0, 1)",
            repeat_perct: "@float(0, 1)",
            "date|+60": currentDayZeroOClock
          }
        ]
      },
      conn: {
        title: "@cword('电信联通教育网铁交', 0, 2)",
        "data|1440": [
          {
            client_close: "@natural(1, 100)",
            repeat: "@natural(1, 10000)",
            cc_count: "@natural(1, 30)",
            close: "@natural(1, 300)",
            conn: "@natural(1, 3000)",
            repeat_perct: "@natural(1, 1000)",
            rst_close_perct: "@float(0, 1)",
            jam_perct: "@float(0, 1)",
            count: "@natural(1, 3000)",
            rst_close: "@natural(1, 300000)",
            "date|+60": currentDayZeroOClock
          }
        ]
      },
      defence_trend: {
        title: "@cword('电信联通教育网铁交', 0, 2)",
        max_perct: 1,
        "data|1440": [
          {
            local_influx: "@natural(1000, 3000000)",
            cloud_influx: "@natural(10, 300000)",
            tunnel_perct: "@float(0, 1)",
            record: {},
            "date|+60": currentDayZeroOClock
          }
        ]
      }
    });

    // 流量折线图
    data.flux = fluxLineMock;

    // 防御日志的内容
    data.defence_trend.data[20].record = {
      start: [
        "gedongyu，M1BGP-静态-111.111.111.111，启用IP牵引防御",
        "gedongyu2，M1BGP-静态-222.111.111.111，启用IP牵引防御"
      ]
    };
    data.defence_trend.data[179].record = {
      stop: [
        "gedongyu，M1BGP-静态-111.111.111.111，启用IP牵引防御",
        "gedongyu2，M1BGP-静态-222.111.111.111，启用IP牵引防御"
      ],
      other: [
        "gedongyu，M1BGP-静态-111.111.111.333，启用IP牵引防御",
        "gedongyu2，M1BGP-静态-222.111.111.444，启用IP牵引防御"
      ]
    };

    // 完整返回
    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });

  // 模拟回看信息和回看折线图接口
  app.get("/mock/bigscreen_event", (req, res) => {
    const data = Mock.mock({
      event: {
        id: "@natural(10000000)", // ?这是啥？？？不是事件ID?估计是数据库的ID
        event_id: "@natural(100000000)",
        ip: "@ip",
        peak: "@natural(20759175936)",
        detail_txt: "NTP DRDoS",
        type_txt: "DDoS攻击",
        type: "@natural(0, 2)",
        status: "@boolean",
        split_ratio: 1,
        duration:
          "@natural(0, " +
          Math.round(new Date().getTime() / 1000) -
          currentDayZeroOClock +
          ")",
        stime_i: currentDayZeroOClock
      },
      trend: {
        type: "sec_flux", // todo 或者 sec_sla
        "data|1-5": [
          {
            isp_name: "@cword('电信联通教育网铁交', 2, 4)",
            isp_id: "@natural(1, 10)",
            "data|30-1440": [
              {
                "date|+1": currentDayZeroOClock,
                dropflux: "@natural(5558928952)" // todo 或者 cc count
              }
            ]
          }
        ]
      }
    });
    data.event.etime_i = data.event.stime_i + data.event.duration;

    // 完整返回
    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });

  // 模拟维护提示接口
  app.get("/mock/bigscreen_tips", (req, res) => {
    const data = Mock.mock({
      "0|0-5": [
        {
          status: 0,
          operator:
            "@cword('赵钱孙李电信百度手云世纪小在家文库互联通教育网铁交平台四海地图众测', 2, 3)",
          duration: "@date('MM-dd HH:mm') 至 @date('MM-dd HH:mm')",
          idcs: "M1BGP、M2BGP",
          tip:
            "系统将于 @date('MM-dd HH:mm') 开始维护，预计 @date('MM-dd HH:mm') 完成，影响M1BGP、M2BGP获取数据",
          affects: "预计数据将有5-10分钟的中断",
          detail: "@cparagraph()"
        }
      ],
      "1|0-5": [
        {
          status: 1,
          operator:
            "@cword('赵钱孙李电信百度手云世纪小在家文库互联通教育网铁交平台四海地图众测', 2, 3)",
          duration: "@date('MM-dd HH:mm') 至 @date('MM-dd HH:mm')",
          idcs: "M1BGP、M2BGP",
          tip:
            "系统维护中，预计 @date('MM-dd HH:mm') 完成，影响M1BGP、M2BGP获取数据",
          affects: "预计数据将有5-10分钟的中断",
          detail: "@cparagraph()"
        }
      ]
    });

    // 完整返回
    res.json({
      code: "200",
      success: true,
      result: data,
      message: "成功"
    });
  });
};
