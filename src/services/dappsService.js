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

export { getDapp, getDapps };
