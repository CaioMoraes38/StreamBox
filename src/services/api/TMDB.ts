const API_KEY = 'SUA KEY';
const BASE_URL = 'https://api.themoviedb.org/3';


export const GetProcurarFilmes = async (query: string) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  return data.results;
};

export const getLacamento = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  return data.results;
};

export const GetDescricaoFilmes = async (movieId: number) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  console.log(data);
  return data;
};
