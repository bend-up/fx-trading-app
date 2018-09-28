export const priceTrend = {
  raising: 1,
  falling: -1,
  unknown: 0
};

const lastData = {
  'USD CHF': { trend: priceTrend.unknown },
  'GBP USD': { trend: priceTrend.unknown },
  'GBP CHF': { trend: priceTrend.unknown },
  'EUR SEK': { trend: priceTrend.unknown },
  'USD JPY': { trend: priceTrend.unknown },
  'EUR JPY': { trend: priceTrend.unknown }
};

export const getPriceTrend = (event, pair) => {
  let raising = priceTrend.unknown;
  if (event && event.buy) {
    const pairData = lastData[pair];
    if (pairData.price) {
      if (event.buy > pairData.price) {
        raising = priceTrend.raising;
      } else if (event.buy < pairData.price) {
        raising = priceTrend.falling;
      } else {
        raising = pairData.trend;
      }
    }
    lastData[pair].price = event.buy;
    lastData[pair].trend = raising;
  }
  return raising;
};
