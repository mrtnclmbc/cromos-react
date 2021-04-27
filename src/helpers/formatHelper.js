const truncateString = (string) => {
  return string.slice(0, 6) + '...' + string.slice(-4);
};

export { truncateString };
