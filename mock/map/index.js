/**
 * @file 地图随机数据
 * @author yuanyuanlife
 *
 * 地图的数据等彼此之间有一些关联性，额外处理，使其更逼真
 * */

const shuffle = _.shuffle;
const ChineseProvinces = [
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
const WorldCountries = [
  "阿富汗",
  "安哥拉",
  "阿尔巴尼亚",
  "阿联酋",
  "阿根廷",
  "亚美尼亚",
  "法属南半球和南极领地",
  "澳大利亚",
  "奥地利",
  "阿塞拜疆",
  "布隆迪",
  "比利时",
  "贝宁",
  "布基纳法索",
  "孟加拉国",
  "保加利亚",
  "巴哈马",
  "波斯尼亚和黑塞哥维那",
  "白俄罗斯",
  "伯利兹",
  "百慕大",
  "玻利维亚",
  "巴西",
  "文莱",
  "不丹",
  "博茨瓦纳",
  "中非",
  "加拿大",
  "瑞士",
  "智利",
  "中国",
  "象牙海岸",
  "喀麦隆",
  "刚果(布)",
  "刚果",
  "哥伦比亚",
  "哥斯达黎加",
  "古巴",
  "北塞浦路斯",
  "塞浦路斯",
  "捷克",
  "德国",
  "吉布提",
  "丹麦",
  "多米尼加",
  "阿尔及利亚",
  "厄瓜多尔",
  "埃及",
  "厄立特里亚",
  "西班牙",
  "爱沙尼亚",
  "埃塞俄比亚",
  "芬兰",
  "斐济",
  "福克兰群岛",
  "法国",
  "加蓬",
  "英国",
  "格鲁吉亚",
  "加纳",
  "几内亚",
  "冈比亚",
  "几内亚比绍",
  "赤道几内亚",
  "希腊",
  "格陵兰",
  "危地马拉",
  "法属圭亚那",
  "圭亚那",
  "洪都拉斯",
  "克罗地亚",
  "海地",
  "匈牙利",
  "印尼",
  "印度",
  "爱尔兰",
  "伊朗",
  "伊拉克",
  "冰岛",
  "以色列",
  "意大利",
  "牙买加",
  "约旦",
  "日本",
  "哈萨克斯坦",
  "肯尼亚",
  "吉尔吉斯斯坦",
  "柬埔寨",
  "韩国",
  "科索沃",
  "科威特",
  "老挝",
  "黎巴嫩",
  "利比里亚",
  "利比亚",
  "斯里兰卡",
  "莱索托",
  "立陶宛",
  "卢森堡",
  "拉脱维亚",
  "摩洛哥",
  "摩尔多瓦",
  "马达加斯加",
  "墨西哥",
  "马其顿",
  "马里",
  "缅甸",
  "黑山",
  "蒙古",
  "莫桑比克",
  "毛里塔尼亚",
  "马拉维",
  "马来西亚",
  "纳米比亚",
  "新喀里多尼亚",
  "尼日尔",
  "尼日利亚",
  "尼加拉瓜",
  "荷兰",
  "挪威",
  "尼泊尔",
  "新西兰",
  "阿曼",
  "巴基斯坦",
  "巴拿马",
  "秘鲁",
  "菲律宾",
  "巴布亚新几内亚",
  "波兰",
  "波多黎各",
  "朝鲜",
  "葡萄牙",
  "巴拉圭",
  "卡塔尔",
  "罗马尼亚",
  "俄罗斯",
  "卢旺达",
  "西撒哈拉",
  "沙特阿拉伯",
  "苏丹",
  "南苏丹",
  "塞内加尔",
  "所罗门群岛",
  "塞拉利昂",
  "萨尔瓦多",
  "索马里兰",
  "索马里",
  "塞尔维亚",
  "苏里南",
  "斯洛伐克",
  "斯洛文尼亚",
  "瑞典",
  "斯威士兰",
  "叙利亚",
  "乍得",
  "多哥",
  "泰国",
  "塔吉克斯坦",
  "土库曼斯坦",
  "东帝汶",
  "特里尼达和多巴哥",
  "突尼斯",
  "土耳其",
  "坦桑尼亚",
  "乌干达",
  "乌克兰",
  "乌拉圭",
  "美国",
  "乌兹别克斯坦",
  "委内瑞拉",
  "越南",
  "瓦努阿图",
  "西岸",
  "也门",
  "南非",
  "赞比亚",
  "津巴布韦",
  "老挝",
  "列支敦士登",
  "塞尔维亚",
  "奥兰群岛",
  "安道尔",
  "美属萨摩亚",
  "南极陆地",
  "安提瓜和巴伯",
  "巴林",
  "巴哈马",
  "波斯尼亚",
  "巴巴多斯岛",
  "中非",
  "科特迪瓦",
  "刚果(金)",
  "科摩罗",
  "佛得角",
  "库拉索",
  "开曼群岛",
  "北塞浦路斯",
  "捷克",
  "多米尼克",
  "多米尼加",
  "福克兰群岛",
  "法罗群岛",
  "密克罗尼西亚",
  "几内亚比绍",
  "几内亚",
  "格林纳达",
  "关岛",
  "赫德岛和麦克唐纳群岛",
  "马恩岛",
  "英属印度洋领地",
  "泽西岛",
  "锡亚琴冰川",
  "基里巴斯",
  "圣卢西亚",
  "马耳他",
  "北马里亚那群岛",
  "蒙塞拉特",
  "毛里求斯",
  "纽埃岛",
  "帕劳",
  "巴勒斯坦",
  "法属波利尼西亚",
  "南苏丹",
  "新加坡",
  "南乔治亚岛与南桑威奇群岛",
  "圣赫勒拿岛",
  "所罗门群岛",
  "圣皮埃尔和密特隆岛",
  "圣多美和普林西比",
  "塞舌尔",
  "特克斯和凯科斯群岛",
  "东帝汶",
  "汤加",
  "圣维恩",
  "美属维尔京群岛",
  "萨摩亚群岛"
];

const businessRandom = {
  influx: "@natural(1)",
  idc_influx: "@natural(1)",
  loader: '@character("低中高")',
  lat: "@integer(15, 40)", // 范围小点飞线好看
  idc_id: 11018, // idc_id 有用吗
  lng: "@integer(75, 135)" // 范围小点飞线好看
};

const lineRandom = {
  attack_type: "@natural(1, 3)",
  src_ip_lat: "@integer(-90, 90)",
  src_ip_lng: "@integer(-180, 180)",
  // "dst_ip_lat": '@integer(-90, 90)', // 随便选一个业务点
  // "dst_ip_lng": '@integer(-180, 180)', // 随便选一个业务点
  idc_id: "11005", // idc_id 是干嘛的？
  src_ip_attack_cnt: "@natural(1)"
};

const colorRandom = {
  // "province": '@province', // 随便选一个中国的省份或者外国的国家
  visit_num: "@natural(1, 1000000)", // 范围小点别那么高
  jam_perct: "@float(5, 100)",
  visit_perct: "@float(0, 1)",
  network_time: "@float(1, 200)",
  rst_close_perct: "@float(5, 100)",
  repeat_perct: "@float(1, 80)"
};

const mapMocker = function (Mock) {
  // 生成随机的业务点
  let loaders = Mock.mock({
    "loader|1-5": [businessRandom] // 必须至少有一个，因为后面要选业务点为飞线目标
  }).loader;
  // 生成随机的飞线和起始点
  let lines = Mock.mock({
    "line|0-100": [lineRandom]
  }).line;
  // 随机为飞线选择一个业务点作为攻击目标
  lines.forEach((l) => {
    const targetIndex = Math.floor(Math.random() * loaders.length);
    const target = loaders[targetIndex];

    l.dst_ip_lat = target.lat;
    l.dst_ip_lng = target.lng;
  });
  // 生成随机的地图区块颜色
  let sources = Mock.mock({
    "source|150-270": [colorRandom]
  }).source.map((s) => {
    return {
      network_time: s.network_time,
      repeat_perct: s.repeat_perct / 1000,
      jam_perct: s.jam_perct / 1000,
      rst_close_perct: s.rst_close_perct / 1000,
      visit_num: s.visit_num,
      visit_perct: s.visit_perct,
      province_id: "339" // province id 是干啥的？
    };
  });
  // 为每个省份寻找一个颜色，找完为止
  let sourceIndex = 0;
  shuffle(ChineseProvinces).forEach((p) => {
    if (!sources[sourceIndex]) {
      return;
    }

    sources[sourceIndex].province = p;
    sourceIndex++;
  });
  // 为每个国家寻找一个颜色，找完为止
  shuffle(WorldCountries).forEach((c) => {
    if (!sources[sourceIndex]) {
      return;
    }

    sources[sourceIndex].province = c;
    sourceIndex++;
  });
  // 这两个数据有用来生成地图颜色
  let extra = {
    min_visit: Math.min(...sources.map((s) => s.visit_num)),
    max_visit: Math.max(...sources.map((s) => s.visit_num)),
    average_visit:
      sources.reduce((sum, s) => sum + s.visit_num) / sources.length
  };

  return {
    map_loader: loaders,
    map_srcs: sources,
    map_lines: lines,
    extra: extra
  };
};
