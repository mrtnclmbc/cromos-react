const fetch = require('node-fetch');
// TO-DO fix undefined env vars!
// const OPEN_SEA_BASE_URL = process.env.API_BASE_URL;
const API_BASE_URL = 'https://cromy.io/api/v1';

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
  return {
    album_id: 2,
    title: 'Nakamoto\'s Adventures',
    description: 'Completa las aventuras del héroe descentralizado, Satoshi Nakamoto, que vino a devolvernos la privacidad y la libertdad que el mundo perdió',
    image: null,
    gap: 'gap-1',
    type: 'comic',
    assets: [
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858104333930594305',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 2,
          height: 1,
        },
        size: {
          columns: 6,
          rows: 2,
        },
      },
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858105433442222081',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 2,
          height: 1,
        },
        size: {
          columns: 6,
          rows: 2,
        },
      },
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858106532953849857',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 1,
          height: 1,
        },
        size: {
          columns: 4,
          rows: 2,
        },
      },
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858107632465477633',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 1,
          height: 1,
        },
        size: {
          columns: 4,
          rows: 2,
        },
      },
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858108731977105409',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 1,
          height: 1,
        },
        size: {
          columns: 4,
          rows: 2,
        },
      },
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858109831488733185',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 1,
          height: 1,
        },
        size: {
          columns: 4,
          rows: 2,
        },
      },
      {
        token_id: '105665526449733265606596008423351073540659047519780003086054858110931000360961',
        address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
        aspect_ratio:  {
          width: 3,
          height: 1,
        },
        size: {
          columns: 8,
          rows: 2,
        },
      },
    ]
  }
    // return {
    // album_id: 1,
    // title: 'Momentos del Fútbol',
    // description: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
    // image: null,
    // gap: 'gap-1',
    // padding: 'p-1',
    // type: 'album',
    // assets: [
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920970',
    //     address: '0xe99C918E3Ad0eBa0B873cB472D1DC08979660499',
    //     size: 'lg'
    //   },
    //   {
    //     token_id: '31712412',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'md'
    //   },
    //   {
    //     token_id: '1797908753318167498064568441076271140892002045234138787585013810849535492097',
    //     address: '0xe99C918E3Ad0eBa0B873cB472D1DC08979660499',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '179790875331816749806456844107627114089200204523413878758501381084953549209',
    //     address: '0xe99C918E3Ad0eBa0B873cB472D1DC08979660499',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920971',
    //     address: '0xe99C918E3Ad0eBa0B873cB472D1DC08979660499',
    //     size: 'md'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920974',
    //     address: '0xe99C918E3Ad0eBa0B873cB472D1DC08979660499',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920975',
    //     address: '0xe99C918E3Ad0eBa0B873cB472D1DC08979660499',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920976',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'md'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920973',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920972',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '179790875331816749806456844107627114089200204523413878758501381084953549209703',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'md'
    //   },
    //   {
    //     token_id: '1797908753318167498064568441076271140892002045234138787585013810849535492097051',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'md'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920970123',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '1797908753318167498064568441076271140892002045234138787585013810849535492097014',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920970152',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'sm'
    //   },
    //   {
    //     token_id: '17979087533181674980645684410762711408920020452341387875850138108495354920970123 ',
    //     address: '0xee45b41d1ac24e9a620169994deb22739f64f231',
    //     size: 'sm'
    //   },
    // ]
    // }
}

export { getAlbum };
