/**
 * @file 折线图随机数据
 * @author yuanyuanlife
 *
 * 生成更逼真的折线图数据
 * */

const getCurrentDayZeroOClock = function () {
  let todayZeroOClock = new Date();
  todayZeroOClock.setHours(0);
  todayZeroOClock.setMinutes(0);
  todayZeroOClock.setSeconds(0);

  return Math.floor(todayZeroOClock.getTime() / 1000);
};

const smoothSingleLine = function (data) {
  const length = data.length;
  const peaks = [];
  const result = [];

  let peakCount = Math.ceil(Math.random() * 10);
  while (peakCount--) {
    const peakDataIndex = Math.ceil(Math.random() * (length - 1));
    peaks.push({
      data: data[peakDataIndex][1],
      date: data[peakDataIndex][0],
      index: peakDataIndex
    });
  }

  // 按照 peakDataIndex 从小到大排序，方便逐个插值
  peaks.sort((peakA, peakB) => {
    return peakA.index - peakB.index;
  });

  let currentPeak = 0;
  let peakDataIndex = peaks[currentPeak].index;
  let lastPeakDataIndex = 0;
  result[0] = data[lastPeakDataIndex];
  for (let i = 1; i < length; i++) {
    if (i === peakDataIndex) {
      result.push(data[i]);

      if (currentPeak < peaks.length - 1) {
        currentPeak++;
        lastPeakDataIndex = peakDataIndex;
        peakDataIndex = peaks[currentPeak].index;
      }
    } else if (i < peakDataIndex) {
      result.push([
        data[i][0],
        Math.round(
          ((data[i][0] - data[lastPeakDataIndex][0]) *
            (peaks[currentPeak].data - data[lastPeakDataIndex][1])) /
            (data[peakDataIndex][0] - data[lastPeakDataIndex][0]) +
            data[lastPeakDataIndex][1]
        )
      ]);
    } else {
      // when i > peakDataIndex && i < length
      result.push([data[i][0], data[peakDataIndex][1] - i + peakDataIndex]);
    }
  }

  return result;
};

const smoothLines = function ({ data, dateProperty }) {
  const result = data.map((item) => {
    return {
      [dateProperty]: item[dateProperty]
    };
  });

  Object.keys(data[0]).forEach((lineDataProperty) => {
    if (lineDataProperty === dateProperty) {
      return;
    }

    const smoothedLine = smoothSingleLine(
      data.map((item) => [item[dateProperty], item[lineDataProperty]])
    );
    result.forEach((item, index) => {
      result[index][lineDataProperty] = smoothedLine[index][1];
    });
  });

  return result;
};

const lineMocker = function (Mock) {
  const result = Mock.mock({
    "data|1440": [
      {
        http_resp: "@natural(1, 5000)",
        attack: "@natural(1, 5000)",
        http_5xx: "@natural(1, 3000)",
        http_404: "@natural(1, 3000)",
        http_4xx: "@natural(1, 3000)",
        http_err: "@natural(1, 3000)",
        http_req: "@natural(1, 5000)",
        "date|+60": getCurrentDayZeroOClock()
      }
    ]
  }).data;

  return smoothLines({
    data: result,
    dateProperty: "date"
  });
};
