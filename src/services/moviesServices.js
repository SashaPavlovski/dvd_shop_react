const moviesArr = [
  {
    id: 1,
    title: "THE BATMAN",
    genre: "action",
    rate: 10,
    stock: 5,
    like: false,
  },
  { id: 2, title: "MAVERICK", genre: "action", rate: 6, stock: 8, like: false },
  {
    id: 3,
    title: "TURNING RED",
    genre: "animated",
    rate: 9,
    stock: 8,
    like: false,
  },
  { id: 4, title: "NOPE", genre: "horror", rate: 5, stock: 3, like: false },
  { id: 5, title: "HUSTLE", genre: "drama", rate: 3, stock: 9, like: false },
  {
    id: 6,
    title: "THE BAD GUYS",
    genre: "animated",
    rate: 10,
    stock: 6,
    like: false,
  },
];

export const moviesFromServer = () => {
  //Retrieving data from the server
  return moviesArr;
};
