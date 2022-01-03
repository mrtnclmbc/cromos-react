import * as rax from 'retry-axios';
import axios from 'axios';

const OPEN_SEA_BASE_URL = process.env.OPEN_SEA_BASE_URL;

const randomCase = (string) => string.split('').map((v) =>
  Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
).join('');

const getAssets = (owner, limit = 50) => {
  const url = `${OPEN_SEA_BASE_URL}/assets`;

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
  const url = `${OPEN_SEA_BASE_URL}/asset/${contractAddress}/${tokenId}`;

  const options = {
    method: 'GET',
  };

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
