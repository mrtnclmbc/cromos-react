const fetch = require('node-fetch');
// TO-DO fix undefined env vars!
// const OPEN_SEA_BASE_URL = process.env.API_BASE_URL;
const API_BASE_URL = 'https://cromy.io/api/v1';

// Mock DB for testing
const db = require('./db.js');

const getAlbum = async (albumId) => {
  // Compose URL
  const url = `${API_BASE_URL}/albums/${albumId}`;

  // Define options
  const options = {
    method: 'GET',
  };

  // Fetch!
  // fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error('error:' + err));

  // Testing
  return db.default.find(album => album.album_id == albumId);
}

export { getAlbum };
