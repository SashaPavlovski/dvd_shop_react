export const sortMovies = (a, b) => {
  if (a.title > b.title) return 1;
  else if (a.title < b.title) return -1;
  return 0;
};
