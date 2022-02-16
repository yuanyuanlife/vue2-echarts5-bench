/**
 * @file 根据数据拼接地图的 Option
 * @author yuanyuanlife
 * */

const nameMap = {
  Afghanistan: "阿富汗",
  Angola: "安哥拉",
  Albania: "阿尔巴尼亚",
  "United Arab Emirates": "阿联酋",
  Argentina: "阿根廷",
  Armenia: "亚美尼亚",
  "French Southern and Antarctic Lands": "法属南半球和南极领地",
  Australia: "澳大利亚",
  Austria: "奥地利",
  Azerbaijan: "阿塞拜疆",
  Burundi: "布隆迪",
  Belgium: "比利时",
  Benin: "贝宁",
  "Burkina Faso": "布基纳法索",
  Bangladesh: "孟加拉国",
  Bulgaria: "保加利亚",
  "The Bahamas": "巴哈马",
  "Bosnia and Herzegovina": "波斯尼亚和黑塞哥维那",
  Belarus: "白俄罗斯",
  Belize: "伯利兹",
  Bermuda: "百慕大",
  Bolivia: "玻利维亚",
  Brazil: "巴西",
  Brunei: "文莱",
  Bhutan: "不丹",
  Botswana: "博茨瓦纳",
  "Central African Republic": "中非",
  Canada: "加拿大",
  Switzerland: "瑞士",
  Chile: "智利",
  "Ivory Coast": "象牙海岸",
  Cameroon: "喀麦隆",
  Congo: "刚果(布)",
  "Republic of the Congo": "刚果",
  Colombia: "哥伦比亚",
  "Costa Rica": "哥斯达黎加",
  Cuba: "古巴",
  "Northern Cyprus": "北塞浦路斯",
  Cyprus: "塞浦路斯",
  "Czech Republic": "捷克",
  Germany: "德国",
  Djibouti: "吉布提",
  Denmark: "丹麦",
  "Dominican Republic": "多米尼加",
  Algeria: "阿尔及利亚",
  Ecuador: "厄瓜多尔",
  Egypt: "埃及",
  Eritrea: "厄立特里亚",
  Spain: "西班牙",
  Estonia: "爱沙尼亚",
  Ethiopia: "埃塞俄比亚",
  Finland: "芬兰",
  Fiji: "斐济",
  "Falkland Islands": "福克兰群岛",
  France: "法国",
  Gabon: "加蓬",
  "United Kingdom": "英国",
  Georgia: "格鲁吉亚",
  Ghana: "加纳",
  Guinea: "几内亚",
  Gambia: "冈比亚",
  "Guinea Bissau": "几内亚比绍",
  "Equatorial Guinea": "赤道几内亚",
  Greece: "希腊",
  Greenland: "格陵兰",
  Guatemala: "危地马拉",
  "French Guiana": "法属圭亚那",
  Guyana: "圭亚那",
  Honduras: "洪都拉斯",
  Croatia: "克罗地亚",
  Haiti: "海地",
  Hungary: "匈牙利",
  Indonesia: "印尼",
  India: "印度",
  Ireland: "爱尔兰",
  Iran: "伊朗",
  Iraq: "伊拉克",
  Iceland: "冰岛",
  Israel: "以色列",
  Italy: "意大利",
  Jamaica: "牙买加",
  Jordan: "约旦",
  Japan: "日本",
  Kazakhstan: "哈萨克斯坦",
  Kenya: "肯尼亚",
  Kyrgyzstan: "吉尔吉斯斯坦",
  Cambodia: "柬埔寨",
  Korea: "韩国",
  Kosovo: "科索沃",
  Kuwait: "科威特",
  Laos: "老挝",
  Lebanon: "黎巴嫩",
  Liberia: "利比里亚",
  Libya: "利比亚",
  "Sri Lanka": "斯里兰卡",
  Lesotho: "莱索托",
  Lithuania: "立陶宛",
  Luxembourg: "卢森堡",
  Latvia: "拉脱维亚",
  Morocco: "摩洛哥",
  Moldova: "摩尔多瓦",
  Madagascar: "马达加斯加",
  Mexico: "墨西哥",
  Macedonia: "马其顿",
  Mali: "马里",
  Myanmar: "缅甸",
  Montenegro: "黑山",
  Mongolia: "蒙古",
  Mozambique: "莫桑比克",
  Mauritania: "毛里塔尼亚",
  Malawi: "马拉维",
  Malaysia: "马来西亚",
  Namibia: "纳米比亚",
  "New Caledonia": "新喀里多尼亚",
  Niger: "尼日尔",
  Nigeria: "尼日利亚",
  Nicaragua: "尼加拉瓜",
  Netherlands: "荷兰",
  Norway: "挪威",
  Nepal: "尼泊尔",
  "New Zealand": "新西兰",
  Oman: "阿曼",
  Pakistan: "巴基斯坦",
  Panama: "巴拿马",
  Peru: "秘鲁",
  Philippines: "菲律宾",
  "Papua New Guinea": "巴布亚新几内亚",
  Poland: "波兰",
  "Puerto Rico": "波多黎各",
  "Dem. Rep. Korea": "朝鲜",
  Portugal: "葡萄牙",
  Paraguay: "巴拉圭",
  Qatar: "卡塔尔",
  Romania: "罗马尼亚",
  Russia: "俄罗斯",
  Rwanda: "卢旺达",
  "W. Sahara": "西撒哈拉",
  "Saudi Arabia": "沙特阿拉伯",
  Sudan: "苏丹",
  "South Sudan": "南苏丹",
  Senegal: "塞内加尔",
  "Solomon Islands": "所罗门群岛",
  "Sierra Leone": "塞拉利昂",
  "El Salvador": "萨尔瓦多",
  Somaliland: "索马里兰",
  Somalia: "索马里",
  "Republic of Serbia": "塞尔维亚",
  Suriname: "苏里南",
  Slovakia: "斯洛伐克",
  Slovenia: "斯洛文尼亚",
  Sweden: "瑞典",
  Swaziland: "斯威士兰",
  Syria: "叙利亚",
  Chad: "乍得",
  Togo: "多哥",
  Thailand: "泰国",
  Tajikistan: "塔吉克斯坦",
  Turkmenistan: "土库曼斯坦",
  "East Timor": "东帝汶",
  "Trinidad and Tobago": "特里尼达和多巴哥",
  Tunisia: "突尼斯",
  Turkey: "土耳其",
  Tanzania: "坦桑尼亚",
  Uganda: "乌干达",
  Ukraine: "乌克兰",
  Uruguay: "乌拉圭",
  "United States": "美国",
  Uzbekistan: "乌兹别克斯坦",
  Venezuela: "委内瑞拉",
  Vietnam: "越南",
  Vanuatu: "瓦努阿图",
  "West Bank": "西岸",
  Yemen: "也门",
  "South Africa": "南非",
  Zambia: "赞比亚",
  Zimbabwe: "津巴布韦",
  "Lao PDR": "老挝",
  Liechtenstein: "列支敦士登",
  Serbia: "塞尔维亚",
  Aland: "奥兰群岛",
  Andorra: "安道尔",
  "American Samoa": "美属萨摩亚",
  "Fr. S. Antarctic Lands": "南极陆地",
  "Antigua and Barb.": "安提瓜和巴伯",
  Bahrain: "巴林",
  Bahamas: "巴哈马",
  "Bosnia and Herz.": "波斯尼亚",
  Barbados: "巴巴多斯岛",
  "Central African Rep.": "中非",
  "Côte d'Ivoire": "科特迪瓦",
  "Dem. Rep. Congo": "刚果(金)",
  Comoros: "科摩罗",
  "Cape Verde": "佛得角",
  Curaçao: "库拉索",
  "Cayman Is.": "开曼群岛",
  "N. Cyprus": "北塞浦路斯",
  "Czech Rep.": "捷克",
  Dominica: "多米尼克",
  "Dominican Rep.": "多米尼加",
  "Falkland Is.": "福克兰群岛",
  "Faeroe Is.": "法罗群岛",
  Micronesia: "密克罗尼西亚",
  "Guinea-Bissau": "几内亚比绍",
  "Eq. Guinea": "几内亚",
  Grenada: "格林纳达",
  Guam: "关岛",
  "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
  "Isle of Man": "马恩岛",
  "Br. Indian Ocean Ter.": "英属印度洋领地",
  Jersey: "泽西岛",
  "Siachen Glacier": "锡亚琴冰川",
  Kiribati: "基里巴斯",
  "Saint Lucia": "圣卢西亚",
  Malta: "马耳他",
  "N. Mariana Is.": "北马里亚那群岛",
  Montserrat: "蒙塞拉特",
  Mauritius: "毛里求斯",
  Niue: "纽埃岛",
  Palau: "帕劳",
  Palestine: "巴勒斯坦",
  "Fr. Polynesia": "法属波利尼西亚",
  "S. Sudan": "南苏丹",
  Singapore: "新加坡",
  "S. Geo. and S. Sandw. Is.": "南乔治亚岛与南桑威奇群岛",
  "Saint Helena": "圣赫勒拿岛",
  "Solomon Is.": "所罗门群岛",
  "St. Pierre and Miquelon": "圣皮埃尔和密特隆岛",
  "São Tomé and Principe": "圣多美和普林西比",
  Seychelles: "塞舌尔",
  "Turks and Caicos Is.": "特克斯和凯科斯群岛",
  "Timor-Leste": "东帝汶",
  Tonga: "汤加",
  "St. Vin. and Gren.": "圣维恩",
  "U.S. Virgin Is.": "美属维尔京群岛",
  Samoa: "萨摩亚群岛"
};

// 地图位置和缩放的常量
const roam = {
  center: [52.44872345818078, 34.35064284250075], // 地图默认中心点
  zoom: 2.3579476910000032, // 地图默认放大倍数
  scaleLimit: {
    min: 1,
    max: 5
  },
  boundingCoords: [
    [-180, 90],
    [180, -90]
  ]
};

const colors = {
  // 地图上 visual map 的颜色的透明度
  areaDataOpacity: 0.4,
  // visual map 控件的颜色的透明度
  controllerOpacity: 0.7,
  // 所有 visual map 现在都用这几种颜色
  blue: "0, 136, 87",
  green: "27, 202, 120",
  yellow: "255, 201, 62",
  orange: "255, 135, 69",
  red: "222, 58, 58",
  // 中国地图的边框颜色
  highlightBorderColor: "rgba(255, 255, 255, 0.15)",
  // 地图的背景
  background: "#001019",
  areaColor: "rgba(89, 97, 101, 0.30)",
  borderColor: "#000E1B",
  borderWidth: 1,
  // 文字颜色
  fontColor: "rgba(255, 255, 255, 0.7)",
  // 攻击点
  dotColor: "#C43755",
  // 业务点颜色
  burdenColor: "#F0844A",
  notBadColor: "#FBCA4D",
  goodColor: "#16C8A9",
  // 飞线的颜色
  lines: {
    white: [
      {
        offset: 0,
        color: "rgba(255, 255, 255, 0)"
        // 设计稿是 0.27 但实际上太深了,干脆也弄成 0 了
      },
      {
        offset: 1,
        color: "rgba(255, 255, 255, 1)"
      }
    ],
    orange: [
      {
        offset: 0,
        color: "rgba(255, 155, 0, 0)"
      },
      {
        offset: 1,
        color: "rgba(255, 155, 0, 1)"
      }
    ],
    red: [
      {
        offset: 0,
        color: "rgba(196, 55, 85, 0)"
      },
      {
        offset: 1,
        color: "rgba(196, 55, 85, 1)"
      }
    ]
  },
  linesWidth: 1
};
const getColors = function (opacity) {
  let colorBase = [
    colors.blue,
    colors.green,
    colors.yellow,
    colors.orange,
    colors.red
  ];

  let result = [];
  colorBase.forEach((color) => {
    result.push(opacity ? `rgba(${color}, ${opacity})` : `rgb(${color})`);
  });

  return result;
};
const getPieces = function ({ property, payload }) {
  let result = this.ranges[property];

  if (typeof result === "function") {
    return result(payload);
  }
  result = _.defaultsDeep({}, result);

  const rangeColors = getColors(colors.controllerOpacity);
  result.forEach((item, index) => {
    item.color = rangeColors[index];
    item.itemSymbol = "rect";
  });

  return result;
};

const area = {
  ranges: {
    network_time: [
      {
        lte: 20,
        label: "好"
      },
      {
        gt: 20,
        lte: 60,
        label: "较好"
      },
      {
        gt: 60,
        lte: 120,
        label: "警告"
      },
      {
        gt: 120,
        lte: 200,
        label: "较差"
      },
      {
        gt: 200,
        label: "非常差"
      }
    ],
    repeat_perct: [
      {
        lte: 0.001,
        label: "好"
      },
      {
        gt: 0.001,
        lte: 0.008,
        label: "警告"
      },
      {
        gt: 0.008,
        lte: 0.02,
        label: "差"
      },
      {
        gt: 0.02,
        lte: 0.08,
        label: "很差"
      },
      {
        gt: 0.08,
        label: "非常差"
      }
    ],
    jam_perct: [
      {
        lte: 0.005,
        label: "好"
      },
      {
        gt: 0.005,
        lte: 0.025,
        label: "警告"
      },
      {
        gt: 0.025,
        lte: 0.05,
        label: "差"
      },
      {
        gt: 0.05,
        lte: 0.1,
        label: "很差"
      },
      {
        gt: 0.1,
        label: "非常差"
      }
    ],
    rst_close_perct: [
      {
        lte: 0.005,
        label: "好"
      },
      {
        gt: 0.005,
        lte: 0.025,
        label: "警告"
      },
      {
        gt: 0.025,
        lte: 0.05,
        label: "差"
      },
      {
        gt: 0.05,
        lte: 0.1,
        label: "很差"
      },
      {
        gt: 0.1,
        label: "非常差"
      }
    ],
    visit_num: function (average) {
      return [
        {
          max: average * 0.7
        },
        {
          min: average * 0.7,
          max: average * 0.9
        },
        {
          min: average * 0.9,
          max: average * 1.1
        },
        {
          min: average * 1.1,
          max: average * 1.3
        },
        {
          min: average * 1.3
        }
      ];
    }
  },
  getPieces: getPieces,
  options: {
    continuous: {
      type: "continuous",
      orient: "horizontal",
      inverse: true,
      range: null,
      text: ["高", "低"],
      textStyle: {
        color: colors.fontColor,
        fontSize: 10
      },
      formatter() {
        // 去掉数字，让宽度固定
        return "";
      },
      padding: [5, 10, 5, 10],
      backgroundColor: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "rgba(23, 98, 121, 0.6)" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(0, 59, 85, 0.414)" // 100% 处的颜色
          }
        ]
      },
      borderColor: "rgba(20, 115, 137, 0.42)",
      borderRadius: 2,
      borderWidth: 1,
      showLabel: false,
      itemGap: 0,
      itemWidth: 14,
      itemHeight: 78,
      left: 45,
      bottom: 12,
      realtime: false,
      calculable: true,
      // 以下两行需要用 data 来生成
      // min: data.extra.min_visit,
      // max: data.extra.max_visit,
      target: {
        inRange: {
          color: getColors(colors.areaDataOpacity)
        },
        outOfRange: {
          color: colors.areaColor
        }
      },
      controller: {
        inRange: {
          color: [
            "#7E232A",
            "#A75D0B",
            "#A28F1A",
            "#317861",
            "#016C91"
          ].reverse()
        }
      },
      handleStyle: {
        borderColor: "rgba(20,115,137,.28)"
      },
      indicatorStyle: {
        shadowColor: "rgba(0, 16, 25, 0.20)"
      }
    },
    piecewise: {
      type: "piecewise",
      orient: "horizontal",
      inverse: true,
      text: ["差 ", " 好"],
      textStyle: {
        color: colors.fontColor,
        fontSize: 10
      },
      padding: [9, 5, 10, 5],
      backgroundColor: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "rgba(23, 98, 121, 0.6)" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(0, 59, 85, 0.414)" // 100% 处的颜色
          }
        ]
      },
      borderColor: "rgba(20, 115, 137, 0.42)",
      borderRadius: 2,
      borderWidth: 1,
      showLabel: false,
      itemGap: 0,
      itemWidth: 20,
      itemHeight: 8,
      left: 45,
      bottom: 12,
      // 以下属性 需要用 data 来生成
      // pieces: this.getVisualMapPieces({
      //     property: this.visualMapParams.prop,
      //     data: data
      // }),
      target: {
        inRange: {
          color: getColors(),
          colorAlpha: colors.areaDataOpacity
        },
        outOfRange: {
          color: colors.areaColor
        }
      },
      controller: {
        inRange: {
          symbol: "rect",
          color: ["#7E232A", "#A75D0B", "#A28F1A", "#317861", "#016C91"]
        },
        outOfRange: {
          symbol: "rect",
          color: colors.areaColor
        }
      }
    }
  }
}; // 地图的地区颜色计算规则
const geo = {
  itemStyle: {
    areaColor: colors.areaColor,
    borderColor: colors.borderColor,
    borderWidth: colors.borderWidth
  },
  emphasis: {
    itemStyle: {
      color: "none",
      borderColor: "#fff"
    },
    label: {
      show: false
    }
  }
}; // 地图的地区默认样式配置
const chinaProvinces = [
  "中国台湾",
  "河北",
  "山西",
  "内蒙古",
  "辽宁",
  "吉林",
  "黑龙江",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "广西",
  "海南",
  "四川",
  "贵州",
  "云南",
  "西藏",
  "陕西",
  "甘肃",
  "青海",
  "宁夏",
  "新疆",
  "北京",
  "天津",
  "上海",
  "重庆",
  "中国香港",
  "中国澳门"
];
const regions = (function () {
  let result = [];

  chinaProvinces.forEach((province) => {
    result.push({
      name: province,
      itemStyle: {
        borderColor: colors.highlightBorderColor
      }
    });
  });

  return result;
})(); // 地图的国家名称的中文翻译

// 地图的数据浮层
const numFormatSmallCase = function (num, mustInt) {
  let ret = "";
  if (num > 1000000000) {
    ret = parseFloat(Number(num / 1000000000.0).toFixed(2)) + "b";
  } else if (num > 1000000) {
    ret = parseFloat(Number(num / 1000000.0).toFixed(2)) + "m";
  } else if (num >= 10000) {
    ret = parseFloat(Number(num / 1000.0).toFixed(2)) + "k";
  } else {
    return mustInt ? Math.round(num) : num;
  }
  return ret;
};
const tooltip = {
  option: {
    appendToBody: true,
    renderMode: "html",
    showDelay: 0,
    hideDelay: 200,
    enterable: true,
    triggerOn: "mousemove",
    trigger: "item",
    // formatter 在 map-chart.js 里
    textStyle: {
      color: "rgba(221, 223, 232, 0.9)",
      fontSize: 12
    },
    padding: [12, 15, 12, 15],
    backgroundColor: "rgba(23, 88, 121, 0.8)",
    borderColor: "transparent",
    extraCssText: "border-radius: 2px",
    axisPointer: {
      lineStyle: {
        color: "rgba(221, 223, 232, 0.15)"
      }
    }
  },
  titles: {
    network_time: "网络时延",
    repeat_perct: "重传率",
    jam_perct: "拥塞率",
    rst_close_perct: "闪断率",
    visit_num: "访问数"
  },
  formatters: {
    network_time(v) {
      return v ? `${Math.floor(v)}ms` : "-";
    },
    repeat_perct(v) {
      return `${parseFloat(Number(v * 1000).toFixed(3))}‰`;
    },
    jam_perct(v) {
      return `${parseFloat(Number(v * 1000).toFixed(3))}‰`;
    },
    rst_close_perct(v) {
      return `${parseFloat(Number(v * 1000).toFixed(3))}‰`;
    },
    visit_num(v) {
      if (v > 0 && v < 1) {
        return `${Math.ceil(v * 60)}次/分钟`;
      }

      return `${numFormatSmallCase(v, true)}次`;
    }
  }
};

const sizeBy = [1000, 10000];
const sizes = [4, 6, 8];
const getSize = function (times) {
  if (times < sizeBy[0]) {
    return sizes[0];
  }

  let result = sizes[0];
  sizeBy.forEach((step, index) => {
    if (times >= step) {
      result = sizes[index + 1];
    }
  });

  return result;
};
const series = {
  name: "攻击来源",
  type: "scatter",
  coordinateSystem: "geo",
  symbol: "circle",
  symbolSize(value) {
    return getSize(value[2]);
  },
  zlevel: 2,
  itemStyle: {
    color: colors.dotColor
  },
  silent: true
};

const getSeries = function () {
  return _.defaultsDeep({}, series);
};
const dot = {
  getSize: getSize,
  getSeries: getSeries
}; // 地图的小红点
const effectScatter = {
  series: {
    低: {
      name: "业务低负载",
      type: "effectScatter",
      coordinateSystem: "geo",
      symbolSize: 3,
      symbol: "circle",
      zlevel: 3,
      rippleEffect: {
        brushType: "stroke",
        zlevel: 3,
        scale: 5
      },
      itemStyle: {
        color: colors.goodColor,
        opacity: 1
      }
    },
    中: {
      name: "业务中负载",
      type: "effectScatter",
      coordinateSystem: "geo",
      symbolSize: 3,
      symbol: "circle",
      zlevel: 3,
      rippleEffect: {
        brushType: "stroke",
        zlevel: 3,
        scale: 5
      },
      itemStyle: {
        color: colors.notBadColor,
        opacity: 1
      }
    },
    高: {
      name: "业务高负载",
      type: "effectScatter",
      coordinateSystem: "geo",
      symbolSize: 3,
      symbol: "circle",
      zlevel: 3,
      rippleEffect: {
        brushType: "stroke",
        zlevel: 3,
        scale: 5
      },
      itemStyle: {
        color: colors.burdenColor,
        opacity: 1
      }
    }
  },
  getSeries(loader) {
    return _.defaultsDeep({}, this.series[loader]);
  }
}; // 地图的发光点
const colorStops = {
  1: colors.lines.red,
  2: colors.lines.orange,
  3: colors.lines.white
};
const curve = 0.2;

// 需要根据 data.coords 自己判断飞线的方向，返回正确的渐变的方向
// 默认是左边是 0% 右边是 1%，如果线是从右边飞到左边的，需要反过来

const boundingCoords = roam.boundingCoords;
const getColor = function (type) {
  return function ({ data }) {
    let position = {
      x:
        data.coords[0][0] - boundingCoords[0][0] >
        data.coords[1][0] - boundingCoords[0][0]
          ? 1
          : 0,
      y:
        -data.coords[0][1] + boundingCoords[0][1] >
        -data.coords[1][1] + boundingCoords[0][1]
          ? 1
          : 0
    };
    position.x2 = position.x === 0 ? 1 : 0;
    position.y2 = position.y === 0 ? 1 : 0;

    return _.defaultsDeep(position, {
      // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比。
      // 如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
      type: "linear",
      colorStops: colorStops[type],
      global: false // 缺省为 false
    });
  };
};

const linesSeries = {
  1: {
    name: "飞线1",
    type: "lines",
    zlevel: 4,
    effect: {
      show: true,
      period: 2,
      trailLength: 0.4,
      symbolSize: 3
    },
    animation: false,
    lineStyle: {
      color: getColor(1),
      width: colors.linesWidth,
      type: "solid",
      curveness: curve
    },
    silent: true
  },
  2: {
    name: "飞线2",
    type: "lines",
    zlevel: 5,
    effect: {
      period: 2,
      show: true,
      trailLength: 0.4,
      symbolSize: 3
    },
    animation: false,
    lineStyle: {
      color: getColor(2),
      width: colors.linesWidth,
      type: "solid",
      curveness: curve
    },
    silent: true
  },
  3: {
    name: "飞线3",
    type: "lines",
    zlevel: 6,
    effect: {
      period: 2,
      show: true,
      trailLength: 0.1,
      symbolSize: 3
    },
    animation: false,
    lineStyle: {
      color: getColor(3),
      width: colors.linesWidth,
      type: "solid",
      curveness: curve
    },
    silent: true
  }
};
const lines = {
  getSeries(type) {
    return _.defaultsDeep({}, linesSeries[type]);
  }
}; // 地图的飞线

// 空数据
const emptyData = {
  map_lines: {},
  map_loader: {},
  map_srcs: {}
};

class MapChartHelper {
  constructor() {
    // 缩放平移的时候要用
    this.center = roam.center;
    this.zoom = roam.zoom;

    // 地图区块的颜色
    // 地图区块的浮层提示
    this.visualMap = {
      property: "network_time",
      time: "", // 地图地区的 tooltip 要用，但实际旧版从没见它出来过，不知道该拷贝到哪里
      isp: {
        value: 0,
        label: "全部线路" // 区块颜色 Tooltip 要用，展示当前的线路
      }
    };

    // 是否展示某些数据
    this.showLoaders = true; // 发光点是否显示
    this.showFlyLines = true;
  }

  destroy() {
    super.destroy();
  }

  getMapPosition() {
    return {
      left: 0,
      top: 0,
      boundingCoords: roam.boundingCoords,
      center: this.center,
      zoom: this.zoom
    };
  }

  getGeoOption() {
    let position = this.getMapPosition();
    let option = {
      map: "world",
      // roam: true,
      roam: "move",
      // 王超说通过控件放大缩小，这样才能限定它的最大最小，鼠标只允许移动
      // 但是控件缩放还是过于生硬，一次 10% 比较不友好，如果细粒度的话可能得做长按的效果
      regions: regions,
      nameMap: nameMap,
      scaleLimit: roam.scaleLimit
    };

    option.label = geo.label;
    option.itemStyle = geo.itemStyle;
    option.emphasis = geo.emphasis;

    return Object.assign(position, option);
  }

  getGeoTooltipFormatter() {
    return (params) => {
      let d = params.data;

      if (!d || !d.raw) {
        return "";
      }
      let raw = d.raw;

      const names = tooltip.titles;
      const formatter = tooltip.formatters;

      let result = "";
      let time = raw.time; // 旧版拷贝过来的。这个好像没用，回看、分析、实时接口，都没找到这个 time 数据。
      if (time) {
        result = `<div class="map-region-tooltip-time">${time}</div>`;
      }
      result += `<div class="map-region-tooltip-name"
                          data-event="show-map-region-line-chart">
                              ${d.name}${
        this.visualMap.isp && this.visualMap.isp.value !== 0
          ? "-" + this.visualMap.isp.label
          : ""
      }
                     </div>`; // 在 tooltip 中使用 data-event 可以被外层容器 MapChart.vue 捕获到，并触发同名的 EventBus 事件

      Object.keys(names).forEach((name) => {
        result += `<div class="map-region-tooltip-item">
                               ${names[name]}: ${formatter[name](raw[name])}
                             </div>`;
      });

      return `<div class="map-region-tooltip">${result}</div>`;
    };
  }

  getFullOption(data) {
    let result = {
      animation: false,
      geo: [this.getGeoOption()],
      series: this.getMapSeries(data),
      tooltip: tooltip.option
    };
    result.tooltip.formatter = this.getGeoTooltipFormatter();

    if (this.hasVisualMap(data)) {
      result.visualMap = this.getVisualMapOptions(data);
      result.visualMap.seriesIndex = result.series.length - 1;
    }

    return result;
  }

  getVisualMapOptions(data) {
    let prop = this.visualMap.property;
    if (prop === "visit_perct" || prop === "visit_num") {
      return this.getVisitVisualMapOptions(data);
    }

    return this.getOtherVisualMapOptions(data);
  }

  getOtherVisualMapOptions(data) {
    let result = defaultsDeep({}, area.options.piecewise);
    result.pieces = this.getVisualMapPieces({
      property: this.visualMap.property,
      data: data
    });

    return result;
  }

  getVisitVisualMapOptions(data) {
    if (!data.extra) {
      return;
    }

    let result = defaultsDeep({}, area.options.continuous);
    result.min = data.extra.min_visit;
    result.max = data.extra.max_visit;

    if (result.min === result.max) {
      // 只有一条数据的情况
      let averageVisit = data.extra.src_visit_all / data.extra.src_province_all;

      result.min = averageVisit * 0.7;
      result.max = averageVisit * 1.3;
    }

    return result;
  }

  getMapSeries(data) {
    let result = this.getAttackSourceSeries(data);

    result = result.concat(
      this.getAttackLineSeries(this.showFlyLines ? data : emptyData)
    );
    result = result.concat(
      this.getBusinessSeries(this.showLoaders ? data : emptyData)
    );

    if (this.hasVisualMap(data)) {
      result.push(this.getVisualMapSeries(data));
    } // visual map 必须放最后面

    return result;
  }

  getAttackSourceSeries(data) {
    let series = dot.getSeries();
    series.data = this.getAttackSources(data);
    return [series];
  }

  getAttackLineSeries(data) {
    let result = [];
    [1, 2, 3].forEach((type) => {
      let series = lines.getSeries(type);
      series.data = this.getAttackLines(data, type);

      result.push(series);
    });

    return result;
  }

  getBusinessSeries(data) {
    let result = [];
    ["低", "中", "高"].forEach((loader) => {
      let series = effectScatter.getSeries(loader);
      series.data = this.getBusiness(data, loader);
      result.push(series);
    });

    return result;
  }

  getVisualMapPieces({ property, data }) {
    return area.getPieces({
      property,
      payload: data.extra // 首页无此字段
        ? data.extra.src_visit_all / data.extra.src_province_all // @dingruiwen 平均值的定义
        : undefined
    });
  }

  getExtraDataForTooltip(item) {
    let result = {
      time: this.visualMap.time
    };

    return Object.assign(
      result,
      this.showLoaders
        ? item
        : {
            visit_num: item.visit_num
            // 某些情况下只有访问数啥的，不过这个逻辑好像弃用了
            // 以上一行是老版原样搬过来的注释
          }
    );
  }

  getVisualMapSeries(data) {
    let result = {
      emphasis: {
        itemStyle: {
          areaColor: "transparent",
          borderColor: "#fff"
        },
        label: {
          show: false,
          color: "transparent"
        }
      },
      selectedMode: false,
      itemStyle: {
        color: colors.areaColor
      }
    };
    result.name = tooltip.titles[this.visualMap.property];
    result.data = [];
    result.type = "map";
    result.geoIndex = 0;
    result.zlevel = 1;

    data.map_srcs.forEach &&
      data.map_srcs.forEach((v) => {
        result.data.push({
          name: v.province,
          value: v[this.visualMap.property],
          raw: this.getExtraDataForTooltip(v)
        });
      });

    return result;
  }

  getAttackSources(data) {
    let lines = data.map_lines;
    let resultO = {};
    let result = [];

    lines &&
      lines.length &&
      lines.forEach((l) => {
        let key = l.src_ip_lng + "," + l.src_ip_lat;
        if (!resultO[key]) {
          resultO[key] = l;
        } else {
          // eslint-disable-next-line
          resultO[key].src_ip_attack_cnt += l.src_ip_attack_cnt;
        }
      });

    Object.keys(resultO).forEach((key) => {
      let l = resultO[key];
      result.push([l.src_ip_lng, l.src_ip_lat, l.src_ip_attack_cnt]);
    });

    return result;
  }

  getBusiness(data, loadAmount) {
    let loaders = data.map_loader;
    let result = [];

    loaders.length &&
      loaders.forEach((l) => {
        if (l.loader === loadAmount) {
          result.push({
            name: "",
            value: [l.lng, l.lat]
          });
        }
      });

    return result;
  }

  getAttackLines(data, attackType) {
    let lines = data.map_lines;
    let resultO = {};
    let result = [];

    lines.length &&
      lines.forEach((l) => {
        if (l.attack_type === attackType) {
          resultO[
            `${l.src_ip_lng},${l.src_ip_lat},${l.dst_ip_lng},${l.dst_ip_lat}`
          ] = {
            fromName: "",
            toName: "",
            coords: [
              [l.src_ip_lng, l.src_ip_lat],
              [l.dst_ip_lng, l.dst_ip_lat]
            ]
          };
        }
      });
    Object.keys(resultO).forEach((key) => {
      result.push(resultO[key]);
    });

    return result;
  }

  hasVisualMap(data) {
    return data.map_srcs && !isEmpty(data.map_srcs);
  }
}
