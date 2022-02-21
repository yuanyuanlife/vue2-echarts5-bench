/**
 * @file 折线图随机数据
 * @author yuanyuanlife
 *
 * 插值生成更平滑的折线图数据
 * */

const getCurrentDayZeroOClock = function () {
  let todayZeroOClock = new Date();
  todayZeroOClock.setHours(0);
  todayZeroOClock.setMinutes(0);
  todayZeroOClock.setSeconds(0);

  return Math.floor(todayZeroOClock.getTime() / 1000);
};

const lineMocker = function (Mock) {
  const result = Mock.mock({
    "data|1440": [
      {
        http_resp: "@natural(1, 10)",
        attack: "@natural(1, 10)",
        http_5xx: "@natural(1, 300)",
        http_404: "@natural(1, 3000)",
        http_4xx: "@natural(1, 2000)",
        http_err: "@natural(1, 2000)",
        http_req: "@natural(1, 300000)",
        "date|+60": getCurrentDayZeroOClock()
      }
    ]
  }).data;

  console.log("line mock result", result);

  return result;
};
