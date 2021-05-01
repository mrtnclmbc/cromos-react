import axios from 'axios';

// TO-DO fix undefined env vars!
// const OPEN_SEA_BASE_URL = process.env.OPEN_SEA_BASE_URL;
const OPEN_SEA_BASE_URL = 'https://testnets-api.opensea.io/api/v1';

const getAssets = (owner, limit = 10) => {
  // Compose URL
  const url = `${OPEN_SEA_BASE_URL}/assets`;

  // Fetch!
  return axios.get(url, {
    params: {
      owner,
      limit,
      order_direction: 'desc',
      offset: '0',
    }
  })
  .then(function (response) {
    return response.data.assets;
  })
  .catch(function (error) {
    console.log(error);
  });
};

const getAsset = async (contractAddress, tokenId, accountAddress) => {
  // Compose URL
  const url = `${OPEN_SEA_BASE_URL}/asset/${contractAddress}/${tokenId}`;

  // Define options
  const options = {
    method: 'GET',
  };

  // Fetch!
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}

export { getAssets, getAsset };
