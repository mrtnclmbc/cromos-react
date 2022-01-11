import axios from 'axios';

const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getCollectible = async (collectibleId) => {
  const url = `${PUBLIC_API_BASE_URL}/nfts/${collectibleId}`;

  return axios.get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

const getCollectibles = async (limit = 6, offset = 0) => {
  const url = `${PUBLIC_API_BASE_URL}/nfts`;

  return axios.get(url, { limit, offset })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

export { getCollectible, getCollectibles };
