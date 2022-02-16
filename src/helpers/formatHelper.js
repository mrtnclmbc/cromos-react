const truncateString = (string, start = 0, charsFromStart = 6, charsFromEnd = 4) => {
  return string?.length > 4 ? string?.slice(start, charsFromStart) + '...' + `${charsFromEnd === 0 ? '' : string?.slice(charsFromEnd * -1)}` : string;
};

const capitalizeString = (string) => {
  return string?.charAt(0).toUpperCase() + string.slice(1);
};

const typeToCoolText = (type) => {
  switch (type) {
    case "album":
      return "Sticker Album"
    case "audio":
      return "Music Box"
    default:
      return type;
  }
}

const hexNumber = (number, zeroPaddingStart = 0) => {
  return number.toString(16).padStart(zeroPaddingStart, "0");
}

const marketplaceLink = (uri, address, tokenId) => {
  return uri.replace('{address}', address).replace('{tokenId}', tokenId);
}

export { truncateString, capitalizeString, typeToCoolText, hexNumber, marketplaceLink };
