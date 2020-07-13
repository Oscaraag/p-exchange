import numeral from "numeral";

const dolarFilter = price => {
  if (!price) {
    return "$ 0";
  }
  return numeral(price).format("$ 0.00a");
};

const percentFilter = percent => {
  if (!percent) {
    return "0 %";
  }
  return `${Number(percent).toFixed(2)}%`;
};

export { dolarFilter };
export { percentFilter };
