import * as rax from 'retry-axios';

import axios from 'axios';

// TO-DO fix undefined env vars!
// const OPEN_SEA_BASE_URL = process.env.OPEN_SEA_BASE_URL;
const OPEN_SEA_BASE_URL = 'https://testnets-api.opensea.io/api/v1';

const randomCase = (string) => string.split('').map((v) =>
  Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
).join('');

const getAssets = (owner, limit = 50) => {
  // Compose URL
  const url = `${OPEN_SEA_BASE_URL}/assets`;

  // Fetch!
  rax.attach();
  return axios.get(url, {
    params: {
      owner: randomCase(owner),
      limit,
      order_direction: 'desc',
      offset: 0
    }
  })
  .then(function (response) {
    return response.data.assets;
  })
  .catch(function (error) {
    console.log(error);
  });
};

const getAsset = async (contractAddress, tokenId) => {
  // Compose URL
  const url = `${OPEN_SEA_BASE_URL}/asset/${contractAddress}/${tokenId}`;

  // Define options
  const options = {
    method: 'GET',
  };

  // Fetch!
  rax.attach();
  return axios.get(url)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

const getAssetsInfo = async (contractAddress, tokenIds, limit = 50) => {
  // Compose URL
  const url = `${OPEN_SEA_BASE_URL}/assets?asset_contract_address=${contractAddress}${tokenIds.reduce((acc, tokenId) => acc + `&token_ids=${tokenId}`, '')}`;

  // Fetch!
  rax.attach();
  return axios.get(url, {
    params: { limit }
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export { getAssets, getAsset, getAssetsInfo };
