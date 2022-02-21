/**
 * @file 根据数据拼接折线图的 Option
 * @author yuanyuanlife
 * */

const yAxisSplitNum = 3;
const lineChartConfig = {
  lineBaseOption: {
    animation: false,
    grid: {
      left: 14,
      right: 14,
      top: 22,
      bottom: 22
    },
    legend: {
      width: "82%",
      right: 37,
      top: 0,
      icon: "circle",
      itemWidth: 6,
      itemHeight: 6,
      itemGap: 10,
      align: "left",
      textStyle: {
        color: "rgba(221, 223, 232, 0.6)",
        fontSize: 10,
        padding: [0, -1]
      },
      inactiveColor: "rgba(221, 223, 232, 0.3)"
    },
    tooltip: {
      trigger: "axis",
      triggerOn: "mousemove",
      appendToBody: true,
      showDelay: 0,
      hideDelay: 0,
      confine: false,
      enterable: true,
      textStyle: {
        color: "rgba(221, 223, 232, 0.9)",
        fontSize: 12
      },
      padding: 0,
      backgroundColor: "transparent",
      borderColor: "transparent",
      extraCssText: "border-radius: 2px",
      axisPointer: {
        lineStyle: {
          color: "rgba(221, 223, 232, 0.15)"
        }
      }
    },
    xAxis: {
      type: "time",
      axisLine: {
        lineStyle: {
          color: "rgba(221, 223, 232, 0.15)"
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: "rgba(255, 255, 255, 0.3)",
        margin: 2,
        showMinLabel: false,
        showMaxLabel: false,
        fontSize: 10
      },
      axisPointer: {
        type: "shadow"
      },
      axisTick: {
        show: false
      },
      splitNumber: 3
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255, 255, 255, 0.3)",
        align: "left",
        margin: 0,
        verticalAlign: "top",
        showMinLabel: false,
        fontSize: 10
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, .08)"
        }
      },
      splitNumber: yAxisSplitNum
    }
  },
  seriesBaseOption: {
    type: "line",
    symbol: "circle",
    showSymbol: false,
    lineStyle: {
      width: 1
    },
    emphasis: {
      itemStyle: {
        opacity: 1,
        borderColor: "#fff",
        borderWidth: 0.8
      }
    },
    zlevel: 1 // echarts 5 以后把 zlevel 设为非 0，响应 zRenderFixTooltip 事件
  },
  lineSeries: {
    http_req: {
      color: "#16C8A9",
      name: "请求",
      dataMode: "all"
    },
    http_resp: {
      color: "#39ACE8",
      name: "响应",
      dataMode: "all"
    },
    http_404: {
      color: "#FBCA4D",
      name: "404",
      dataMode: "all"
    },
    http_4xx: {
      color: "#F0844A",
      name: "4XX",
      dataMode: "all"
    },
    http_5xx: {
      color: "#DC5E19",
      name: "5XX",
      dataMode: "all"
    },
    http_err: {
      color: "#DC5E19",
      name: "错误",
      dataMode: "all"
    },
    attack: {
      color: "#C43755",
      name: "攻击",
      dataMode: "all",
      area: true
    }
  },
  hiddenLineStyle: {
    width: 0,
    opacity: 0
  }
};

class LineChartHelper {
  constructor() {
    this.highlightTime = false;
  }

  getFullOption(data) {
    const result = _.defaultsDeep({}, lineChartConfig.lineBaseOption);
    result.series = this.getLineSeriesList(data);
    return result;
  }

  getLineSeriesList(data) {
    const result = [];
    const propList = Object.keys(lineChartConfig.lineSeries);
    propList.forEach((prop) => {
      const series = this.getLineSeriesOption(prop);
      if (data[0] && data[0][prop] === undefined) {
        return;
      }
      series.data = this.getSeriesData({ data, prop });
      result.push(series);
    });

    return result;
  }

  getLineSeriesOption(prop) {
    const config = lineChartConfig.lineSeries[prop];
    const result = _.defaultsDeep({}, lineChartConfig.seriesBaseOption, {
      symbolSize: config.hidden ? 0 : 6,
      name: config.name,
      color: config.hidden ? "transparent" : config.color,
      lineStyle: config.hidden
        ? lineChartConfig.hiddenLineStyle
        : {
            width: 1
          }
    });

    return result;
  }

  getSeriesData({ data, prop }) {
    let lineData = data.data || data; // 某些接口包了一层 data
    if (!lineData || !lineData.length) {
      return [];
    }
    let len = lineData.length;
    let date = lineData[len - 13].date * 1000;
    let increment = lineData[1].date - lineData[0].date;
    let hasSecondsData = lineData[len - 1].date - lineData[len - 2].date === 5;
    let ret = [];
    for (let i = 0; i < len; i++) {
      if (hasSecondsData && i >= len - 12) {
        date += increment * 1000;
        ret.push([date, lineData[i][prop], prop]);
      } else {
        ret.push([lineData[i].date * 1000, lineData[i][prop], prop]);
      }
    }

    return ret;
  }
}
