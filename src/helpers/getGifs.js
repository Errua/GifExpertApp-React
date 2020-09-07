
export const getGifs = async ( category ) => {
  
  const api_key = "qZldgS1EPmPHCEmRG2ta8IGyaoBVAAKV";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return { id, title, url };
    }
  );

  return (gifs);
  
};
