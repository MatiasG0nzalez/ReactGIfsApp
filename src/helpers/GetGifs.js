export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=B31x1WG23kB9URouj44i25wHkM98Rf4O&q=${encodeURI(
    category
  )}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });

  return gifs;
};
