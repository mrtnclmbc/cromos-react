const truncateString = (string, start = 0, charsFromStart = 6, charsFromEnd = 4) => {
  return string.slice(start, charsFromStart) + '...' + `${charsFromEnd === 0 ? '' : string.slice(charsFromEnd * -1)}`;;
};

export { truncateString };
