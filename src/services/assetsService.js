const fetch = require('node-fetch');

// TO-DO fix undefined env vars!
// const OPEN_SEA_BASE_URL = process.env.OPEN_SEA_BASE_URL;
const OPEN_SEA_BASE_URL = 'https://api.opensea.io/api/v1';

const getAssets = async (owner, limit = 10) => {
  // Compose URL
  const url = `${OPEN_SEA_BASE_URL}/assets`;

  // Define options
  const options = {
    method: 'GET',
    qs: {
      owner,
      limit,
      order_direction: 'desc',
      offset: '0',
    }
  };

  // Fetch!
  // let status;
  // fetch(url, options)
  //   .then(res => {
  //     status = res.status;
  //     console.log(res.json());
  //     return res.json();
  //   })
  //   .catch(err => console.error('error:' + err));
  return [
    {
      "id": 22731951,
      "token_id": "17979087533181674980645684410762711408920020452341387875850138108495354920970",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/yLyXGxX_gK_Kf-D0LXS7jRtwioplvFifHu8GOY0StpcTL2wjxA21OS1AQt46vwL-NeukLTIuAf-j-TrXK5Pcdyifen6Y-rZjvARKRro=s0",
      "image_preview_url": null,
      "image_thumbnail_url": null,
      "image_original_url": null,
      "animation_url": null,
      "animation_original_url": null,
      "name": null,
      "description": null,
      "external_link": null,
      "asset_contract": {
        "address": "0xe99C918E3Ad0eBa0B873cB472D1DC08979660499",
        "asset_contract_type": "non-fungible",
        "created_date": "2020-12-18T09:38:36.982226",
        "name": null,
        "nft_version": null,
        "opensea_version": null,
        "owner": null,
        "schema_name": "ERC721",
        "symbol": "",
        "total_supply": null,
        "description": null,
        "external_link": null,
        "image_url": null,
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 0,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 250,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": null
      },
      "owner": {
        "user": null,
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
        "address": "0x0000000000000000000000000000000000000000",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0x661c9fe3523b0d14a5efd0314aefb2910761a19c/363594",
      "collection": {
        "banner_image_url": null,
        "chat_url": null,
        "created_date": "2020-12-18T09:38:37.984737",
        "default_to_fiat": false,
        "description": null,
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "0",
        "discord_url": null,
        "display_data": {
          "card_display_style": "contain",
          "images": []
        },
        "external_url": null,
        "featured": false,
        "featured_image_url": null,
        "hidden": true,
        "safelist_request_status": "not_requested",
        "image_url": null,
        "is_subject_to_whitelist": false,
        "large_image_url": null,
        "medium_username": null,
        "name": "0x661c9fe3523b0d14a5efd0314aefb2910761a19c",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "250",
        "payout_address": null,
        "require_email": false,
        "short_description": null,
        "slug": "0x661c9fe3523b0d14a5efd0314aefb2910761a19c",
        "telegram_url": null,
        "twitter_username": null,
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": null,
      "sell_orders": null,
      "creator": {
        "user": null,
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/18.png",
        "address": "0x611c61403106637ca7be5ff4f51a52f4c24600e9",
        "config": "",
        "discord_id": ""
      },
      "traits": [],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    },
    {
      "id": 22731950,
      "token_id": "317",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/mrsSz1oelwc5PxFgyeW9IH5l2BJ-AdDqIpZytFoPCLKiiliU1KhhweCCuPfLP0CxL83hFeyriH3jQ9C-U0vSAY2sZsIYQSb1PVV8",
      "image_preview_url": "https://lh3.googleusercontent.com/mrsSz1oelwc5PxFgyeW9IH5l2BJ-AdDqIpZytFoPCLKiiliU1KhhweCCuPfLP0CxL83hFeyriH3jQ9C-U0vSAY2sZsIYQSb1PVV8=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/mrsSz1oelwc5PxFgyeW9IH5l2BJ-AdDqIpZytFoPCLKiiliU1KhhweCCuPfLP0CxL83hFeyriH3jQ9C-U0vSAY2sZsIYQSb1PVV8=s128",
      "image_original_url": "http://wearable-api.decentraland.org/v2/collections/release_the_kraken/wearables/kraken_hat/image",
      "animation_url": null,
      "animation_original_url": null,
      "name": "Kraken Hat",
      "description": "The Kraken is released upon Decentraland \n\nDCL Wearable 56/10000",
      "external_link": null,
      "asset_contract": {
        "address": "0xffc5043d9a00865d089d5eefa5b3d1625aec6763",
        "asset_contract_type": "non-fungible",
        "created_date": "2020-12-16T00:43:59.391530",
        "name": "dcl://release_the_kraken",
        "nft_version": "3.0",
        "opensea_version": null,
        "owner": 12532793,
        "schema_name": "ERC721",
        "symbol": "DCLRLSTHKRKN",
        "total_supply": "0",
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "external_link": "https://decentraland.org/",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 250,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 0,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"
      },
      "owner": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0xffc5043d9a00865d089d5eefa5b3d1625aec6763/317",
      "collection": {
        "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
        "chat_url": null,
        "created_date": "2019-11-14T17:59:36.156897",
        "default_to_fiat": false,
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "250",
        "discord_url": "https://discord.gg/k5ydeZp",
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": "https://decentraland.org/",
        "featured": false,
        "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
        "hidden": false,
        "safelist_request_status": "verified",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
        "medium_username": null,
        "name": "Decentraland Wearables",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "0",
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
        "require_email": false,
        "short_description": null,
        "slug": "decentraland-wearables",
        "telegram_url": null,
        "twitter_username": "decentraland",
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": 0,
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "traits": [
        {
          "trait_type": "category",
          "value": "Hat",
          "display_type": null,
          "max_value": null,
          "trait_count": 172,
          "order": null
        },
        {
          "trait_type": "collection",
          "value": "Release the kraken",
          "display_type": null,
          "max_value": null,
          "trait_count": 314,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base male",
          "display_type": null,
          "max_value": null,
          "trait_count": 314,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base female",
          "display_type": null,
          "max_value": null,
          "trait_count": 314,
          "order": null
        },
        {
          "trait_type": "rarity",
          "value": "uncommon",
          "display_type": null,
          "max_value": null,
          "trait_count": 171,
          "order": null
        }
      ],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    },
    {
      "id": 22731949,
      "token_id": "1029",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/J1Hr4JlYjW1v0Oc0vr3vfYAnJqW17oRdkWLZWAXrXFekw9OWcijhTzgL6g4mRAx_h4fAYcObseNHFSxAob7Yr0p4FRndTu6UF1Ku",
      "image_preview_url": "https://lh3.googleusercontent.com/J1Hr4JlYjW1v0Oc0vr3vfYAnJqW17oRdkWLZWAXrXFekw9OWcijhTzgL6g4mRAx_h4fAYcObseNHFSxAob7Yr0p4FRndTu6UF1Ku=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/J1Hr4JlYjW1v0Oc0vr3vfYAnJqW17oRdkWLZWAXrXFekw9OWcijhTzgL6g4mRAx_h4fAYcObseNHFSxAob7Yr0p4FRndTu6UF1Ku=s128",
      "image_original_url": "http://wearable-api.decentraland.org/v2/collections/xmas_2020/wearables/santa_xmas_2020_hat/image",
      "animation_url": null,
      "animation_original_url": null,
      "name": "Christmas Santa Hat",
      "description": "A festive gift from Save Xmas 2020 \n\nDCL Wearable 223/1000",
      "external_link": null,
      "asset_contract": {
        "address": "0xecf073f91101ce5628669c487aee8f5822a101b1",
        "asset_contract_type": "non-fungible",
        "created_date": "2020-12-16T00:25:35.149036",
        "name": "dcl://xmas_2020",
        "nft_version": "3.0",
        "opensea_version": null,
        "owner": 12532793,
        "schema_name": "ERC721",
        "symbol": "DCLXMAS2020",
        "total_supply": "0",
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "external_link": "https://decentraland.org/",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 250,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 0,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"
      },
      "owner": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0xecf073f91101ce5628669c487aee8f5822a101b1/1029",
      "collection": {
        "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
        "chat_url": null,
        "created_date": "2019-11-14T17:59:36.156897",
        "default_to_fiat": false,
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "250",
        "discord_url": "https://discord.gg/k5ydeZp",
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": "https://decentraland.org/",
        "featured": false,
        "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
        "hidden": false,
        "safelist_request_status": "verified",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
        "medium_username": null,
        "name": "Decentraland Wearables",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "0",
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
        "require_email": false,
        "short_description": null,
        "slug": "decentraland-wearables",
        "telegram_url": null,
        "twitter_username": "decentraland",
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": 0,
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "traits": [
        {
          "trait_type": "collection",
          "value": "Xmas 2020",
          "display_type": null,
          "max_value": null,
          "trait_count": 968,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base male",
          "display_type": null,
          "max_value": null,
          "trait_count": 968,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base female",
          "display_type": null,
          "max_value": null,
          "trait_count": 968,
          "order": null
        },
        {
          "trait_type": "rarity",
          "value": "epic",
          "display_type": null,
          "max_value": null,
          "trait_count": 619,
          "order": null
        },
        {
          "trait_type": "category",
          "value": "Hat",
          "display_type": null,
          "max_value": null,
          "trait_count": 222,
          "order": null
        }
      ],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    },
    {
      "id": 22731948,
      "token_id": "581",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/y-er-8WDz5gfZL4yf3fSxpxlpNZvead57XMPfJav3_oRB_9xxmXomfCO_Ql5TA2mCTrzuYhhPHWaIeIaUDYH0Xrds4_o4ylyNL-HvQ",
      "image_preview_url": "https://lh3.googleusercontent.com/y-er-8WDz5gfZL4yf3fSxpxlpNZvead57XMPfJav3_oRB_9xxmXomfCO_Ql5TA2mCTrzuYhhPHWaIeIaUDYH0Xrds4_o4ylyNL-HvQ=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/y-er-8WDz5gfZL4yf3fSxpxlpNZvead57XMPfJav3_oRB_9xxmXomfCO_Ql5TA2mCTrzuYhhPHWaIeIaUDYH0Xrds4_o4ylyNL-HvQ=s128",
      "image_original_url": "http://wearable-api.decentraland.org/v2/collections/atari_launch/wearables/atari_blue_hat/image",
      "animation_url": null,
      "animation_original_url": null,
      "name": "Blue Atari Cap",
      "description": "Atari's signature logo on a blue cap. \n\nDCL Wearable 53/1000",
      "external_link": null,
      "asset_contract": {
        "address": "0x4c290f486bae507719c562b6b524bdb71a2570c9",
        "asset_contract_type": "non-fungible",
        "created_date": "2021-02-04T00:14:24.472599",
        "name": "dcl://atari_launch",
        "nft_version": "3.0",
        "opensea_version": null,
        "owner": 12532793,
        "schema_name": "ERC721",
        "symbol": "DCLTR",
        "total_supply": "0",
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "external_link": "https://decentraland.org/",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 250,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 0,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"
      },
      "owner": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0x4c290f486bae507719c562b6b524bdb71a2570c9/581",
      "collection": {
        "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
        "chat_url": null,
        "created_date": "2019-11-14T17:59:36.156897",
        "default_to_fiat": false,
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "250",
        "discord_url": "https://discord.gg/k5ydeZp",
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": "https://decentraland.org/",
        "featured": false,
        "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
        "hidden": false,
        "safelist_request_status": "verified",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
        "medium_username": null,
        "name": "Decentraland Wearables",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "0",
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
        "require_email": false,
        "short_description": null,
        "slug": "decentraland-wearables",
        "telegram_url": null,
        "twitter_username": "decentraland",
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": 0,
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "traits": [
        {
          "trait_type": "category",
          "value": "Hat",
          "display_type": null,
          "max_value": null,
          "trait_count": 268,
          "order": null
        },
        {
          "trait_type": "collection",
          "value": "Atari launch",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "rarity",
          "value": "epic",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base male",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base female",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        }
      ],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    },
    {
      "id": 22731947,
      "token_id": "580",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/jx2gA8QHXP6qzzwPAmSJrddlKez2GqBM6uaLpLAPSC-UY2EoW95qQrTk2tgdEwxt0O4hStzJ6S0_rv7aRaZm8NvIVeTOMY5-mG-O7g",
      "image_preview_url": "https://lh3.googleusercontent.com/jx2gA8QHXP6qzzwPAmSJrddlKez2GqBM6uaLpLAPSC-UY2EoW95qQrTk2tgdEwxt0O4hStzJ6S0_rv7aRaZm8NvIVeTOMY5-mG-O7g=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/jx2gA8QHXP6qzzwPAmSJrddlKez2GqBM6uaLpLAPSC-UY2EoW95qQrTk2tgdEwxt0O4hStzJ6S0_rv7aRaZm8NvIVeTOMY5-mG-O7g=s128",
      "image_original_url": "http://wearable-api.decentraland.org/v2/collections/atari_launch/wearables/atari_purple_upper_body/image",
      "animation_url": null,
      "animation_original_url": null,
      "name": "Purple Atari Tee",
      "description": "Atari's signature logo on a purple tee. \n\nDCL Wearable 56/1000",
      "external_link": null,
      "asset_contract": {
        "address": "0x4c290f486bae507719c562b6b524bdb71a2570c9",
        "asset_contract_type": "non-fungible",
        "created_date": "2021-02-04T00:14:24.472599",
        "name": "dcl://atari_launch",
        "nft_version": "3.0",
        "opensea_version": null,
        "owner": 12532793,
        "schema_name": "ERC721",
        "symbol": "DCLTR",
        "total_supply": "0",
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "external_link": "https://decentraland.org/",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 250,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 0,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"
      },
      "owner": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0x4c290f486bae507719c562b6b524bdb71a2570c9/580",
      "collection": {
        "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
        "chat_url": null,
        "created_date": "2019-11-14T17:59:36.156897",
        "default_to_fiat": false,
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "250",
        "discord_url": "https://discord.gg/k5ydeZp",
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": "https://decentraland.org/",
        "featured": false,
        "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
        "hidden": false,
        "safelist_request_status": "verified",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
        "medium_username": null,
        "name": "Decentraland Wearables",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "0",
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
        "require_email": false,
        "short_description": null,
        "slug": "decentraland-wearables",
        "telegram_url": null,
        "twitter_username": "decentraland",
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": 0,
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "traits": [
        {
          "trait_type": "collection",
          "value": "Atari launch",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "rarity",
          "value": "epic",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base male",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base female",
          "display_type": null,
          "max_value": null,
          "trait_count": 559,
          "order": null
        },
        {
          "trait_type": "category",
          "value": "Upper body",
          "display_type": null,
          "max_value": null,
          "trait_count": 291,
          "order": null
        }
      ],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    },
    {
      "id": 22731946,
      "token_id": "300",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/L2-myf0ZuywJq_MwPXNRVyCn4Uyj8CXPSCwSTMHEVJUEA_fduVHkju_yBW5wNH1SmsfzQwQN9JTOheYtwqEkX83POjIqzxKPLTIFIA",
      "image_preview_url": "https://lh3.googleusercontent.com/L2-myf0ZuywJq_MwPXNRVyCn4Uyj8CXPSCwSTMHEVJUEA_fduVHkju_yBW5wNH1SmsfzQwQN9JTOheYtwqEkX83POjIqzxKPLTIFIA=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/L2-myf0ZuywJq_MwPXNRVyCn4Uyj8CXPSCwSTMHEVJUEA_fduVHkju_yBW5wNH1SmsfzQwQN9JTOheYtwqEkX83POjIqzxKPLTIFIA=s128",
      "image_original_url": "http://wearable-api.decentraland.org/v2/collections/3lau_basics/wearables/3lau_tshirt_b_upper_body/image",
      "animation_url": null,
      "animation_original_url": null,
      "name": "3LAU Blue Triangle Tee",
      "description": "3LAU's signature triangle on a black and blue tee. \n\nDCL Wearable 75/100",
      "external_link": null,
      "asset_contract": {
        "address": "0xe1ecb4e5130f493551c7d6df96ad19e5b431a0a9",
        "asset_contract_type": "non-fungible",
        "created_date": "2020-12-16T12:58:17.898774",
        "name": "dcl://3lau_basics",
        "nft_version": "3.0",
        "opensea_version": null,
        "owner": 12532793,
        "schema_name": "ERC721",
        "symbol": "DCL3LBSCS",
        "total_supply": "0",
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "external_link": "https://decentraland.org/",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 250,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 0,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"
      },
      "owner": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0xe1ecb4e5130f493551c7d6df96ad19e5b431a0a9/300",
      "collection": {
        "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
        "chat_url": null,
        "created_date": "2019-11-14T17:59:36.156897",
        "default_to_fiat": false,
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "250",
        "discord_url": "https://discord.gg/k5ydeZp",
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": "https://decentraland.org/",
        "featured": false,
        "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
        "hidden": false,
        "safelist_request_status": "verified",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
        "medium_username": null,
        "name": "Decentraland Wearables",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "0",
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
        "require_email": false,
        "short_description": null,
        "slug": "decentraland-wearables",
        "telegram_url": null,
        "twitter_username": "decentraland",
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": 0,
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "traits": [
        {
          "trait_type": "body_shapes",
          "value": "base male",
          "display_type": null,
          "max_value": null,
          "trait_count": 299,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base female",
          "display_type": null,
          "max_value": null,
          "trait_count": 299,
          "order": null
        },
        {
          "trait_type": "category",
          "value": "Upper body",
          "display_type": null,
          "max_value": null,
          "trait_count": 194,
          "order": null
        },
        {
          "trait_type": "rarity",
          "value": "legendary",
          "display_type": null,
          "max_value": null,
          "trait_count": 271,
          "order": null
        },
        {
          "trait_type": "collection",
          "value": "3lau basics",
          "display_type": null,
          "max_value": null,
          "trait_count": 277,
          "order": null
        }
      ],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    },
    {
      "id": 22731945,
      "token_id": "1028",
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/CQN8DprBJryZhIHECmj_KgpNl5LvEhB8qWBJZhquwAkG7Xa0vIw-iNByNjI5B6e4IJglIMQHExWcUDEYL9cTN-GDk_0hESHA7zjF",
      "image_preview_url": "https://lh3.googleusercontent.com/CQN8DprBJryZhIHECmj_KgpNl5LvEhB8qWBJZhquwAkG7Xa0vIw-iNByNjI5B6e4IJglIMQHExWcUDEYL9cTN-GDk_0hESHA7zjF=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/CQN8DprBJryZhIHECmj_KgpNl5LvEhB8qWBJZhquwAkG7Xa0vIw-iNByNjI5B6e4IJglIMQHExWcUDEYL9cTN-GDk_0hESHA7zjF=s128",
      "image_original_url": "http://wearable-api.decentraland.org/v2/collections/xmas_2020/wearables/santa_xmas_2020_upper_body/image",
      "animation_url": null,
      "animation_original_url": null,
      "name": "Santa Christmas Suit",
      "description": "A festive gift from Save Xmas 2020 \n\nDCL Wearable 162/1000",
      "external_link": null,
      "asset_contract": {
        "address": "0xecf073f91101ce5628669c487aee8f5822a101b1",
        "asset_contract_type": "non-fungible",
        "created_date": "2020-12-16T00:25:35.149036",
        "name": "dcl://xmas_2020",
        "nft_version": "3.0",
        "opensea_version": null,
        "owner": 12532793,
        "schema_name": "ERC721",
        "symbol": "DCLXMAS2020",
        "total_supply": "0",
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "external_link": "https://decentraland.org/",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 250,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 0,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"
      },
      "owner": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "permalink": "https://opensea.io/assets/0xecf073f91101ce5628669c487aee8f5822a101b1/1028",
      "collection": {
        "banner_image_url": "https://storage.opensea.io/static/banners/dclwearables-banner.png",
        "chat_url": null,
        "created_date": "2019-11-14T17:59:36.156897",
        "default_to_fiat": false,
        "description": "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Wearables are worn in game by avatars, and collecting and trading these unique NFTs is a great way for users to integrate themselves into the growing community. The digital assets are dropped in limited-edition collections, and will be available to purchase right here in this store.",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "250",
        "discord_url": "https://discord.gg/k5ydeZp",
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": "https://decentraland.org/",
        "featured": false,
        "featured_image_url": "https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png",
        "hidden": false,
        "safelist_request_status": "verified",
        "image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY",
        "medium_username": null,
        "name": "Decentraland Wearables",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "0",
        "payout_address": "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
        "require_email": false,
        "short_description": null,
        "slug": "decentraland-wearables",
        "telegram_url": null,
        "twitter_username": "decentraland",
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": 0,
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "OhDimitri"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        "address": "0xc96d61b2291e87438614258fef3d23fdda19243f",
        "config": "",
        "discord_id": ""
      },
      "traits": [
        {
          "trait_type": "category",
          "value": "Upper body",
          "display_type": null,
          "max_value": null,
          "trait_count": 728,
          "order": null
        },
        {
          "trait_type": "collection",
          "value": "Xmas 2020",
          "display_type": null,
          "max_value": null,
          "trait_count": 968,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base male",
          "display_type": null,
          "max_value": null,
          "trait_count": 968,
          "order": null
        },
        {
          "trait_type": "body_shapes",
          "value": "base female",
          "display_type": null,
          "max_value": null,
          "trait_count": 968,
          "order": null
        },
        {
          "trait_type": "rarity",
          "value": "epic",
          "display_type": null,
          "max_value": null,
          "trait_count": 619,
          "order": null
        }
      ],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": false,
      "transfer_fee_payment_token": null,
      "transfer_fee": null
    }
  ];

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
