export const getImage = async () => {
  const idImage = Math.floor(Math.random() * 4999);

  const url = `https://jsonplaceholder.typicode.com/photos/${idImage}`;
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
