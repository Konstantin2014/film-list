const mapper = films => {
  return films.map(({ id, title, backdrop_path: img }) => ({
    img,
    id,
    title,
    watched: false,
  }));
};

export default mapper;
