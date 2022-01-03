const truncateString = (string, start = 0, charsFromStart = 6, charsFromEnd = 4) => {
  return string.slice(start, charsFromStart) + '...' + `${charsFromEnd === 0 ? '' : string.slice(charsFromEnd * -1)}`;
};

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

export { truncateString, capitalizeString, typeToCoolText };
