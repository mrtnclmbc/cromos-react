import axios from 'axios';

const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getDapp = async (dappId) => {
  const url = `${PUBLIC_API_BASE_URL}/dapps/${dappId}`;

  return axios.get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

const getDapps = async (limit = 6, offset = 0) => {
  const url = `${PUBLIC_API_BASE_URL}/dapps`;

  return axios.get(url, { limit, offset })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

const searchDapps = async (query, signal) => {
  const url = `${PUBLIC_API_BASE_URL}/search`;

  const trimmedQuery = query.trim().toLowerCase();

  return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
      },
      signal,
      body: JSON.stringify({ query: trimmedQuery })
    })
    .then(res => res.json());
}

export { getDapp, getDapps, searchDapps };
