export const extractTitleFromMetadata = (metadata) => {
  if (metadata.name) {
    return metadata.name;
  }
  return null;
};

export const extractDescriptionFromMetadata = (metadata) => {
  if (metadata.description) {
    return metadata.description;
  }
  return null;
};

export const extractImageFromMetadata = (metadata) => {
  let imageUrl = null;
  if (metadata.image) {
    imageUrl = metadata.image;
  } else if (metadata.image_url) {
    imageUrl = metadata.image_url;
  }
  return convertIpfsUrlToHttps(imageUrl);
};

export const extractAnimationFromMetadata = (metadata) => {
  let animationUrl = null;
  if (metadata.animation) {
    animationUrl = metadata.animation;
  } else if (metadata.animation_url) {
    animationUrl = metadata.animation_url;
  }
  return convertIpfsUrlToHttps(animationUrl);
};

export const extractTraitsFromMetadata = (metadata) => {
  if (metadata.attributes) {
    return metadata.attributes;
  }
  return [];
};

export const extractTraitValueFromMetadata = (metadata, trait) => {
  if (metadata.attributes) {
    const attribute = metadata.attributes.find(attribute => attribute.trait_type === trait);
    return attribute?.value;
  }
  return undefined;
};

export const convertIpfsUrlToHttps = (ipfsUrl) => {
  return ipfsUrl?.replace('ipfs://', 'https://ipfs.io/ipfs/');
};

export const sanitizeTokenUriForId = (tokenUri, tokenId) => {
  let sanitizedTokenUri = tokenUri.replace('0x{id}', '{id}').replace('{id}', tokenId);
  if (sanitizedTokenUri.startsWith('ipfs://')) {
    sanitizedTokenUri = convertIpfsUrlToHttps(sanitizedTokenUri);
  }
  return sanitizedTokenUri;
};