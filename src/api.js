const url = "https://api.coincap.io/v2";

async function GetAssets() {
  const request = await fetch(`${url}/assets?limit=20`);
  const data = await request.json();
  return data.data;
}

async function GetAsset(coin) {
  const request = await fetch(`${url}/assets/${coin}`);
  const data = await request.json();
  return data.data;
}

async function GetAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const request = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const data = await request.json();
  return data.data;
}

async function getMarkets(coin) {
  const request = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  const data = await request.json();
  return data.data;
}

async function getExchange(id) {
  const request = await fetch(`${url}/exchanges/${id}`);
  const data = await request.json();
  return data.data;
}

export default {
  GetAssets,
  GetAsset,
  getMarkets,
  getExchange,
  GetAssetHistory
};
