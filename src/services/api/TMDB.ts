const API_KEY = '2a242fa0df20d340193b2cbe2361e997';
const BASE_URL = 'https://api.themoviedb.org/3';

interface Filme {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface ApiResponse {
  results: Filme[];
}

export const GetProcurarFilmes = async (query: string): Promise<Filme[]> => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=pt-BR`);
  const data: ApiResponse = await response.json();
  return data.results;
};

export const getLacamento = async (): Promise<Filme[]> => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR`);
  const data: ApiResponse = await response.json();
  return data.results;
};

export const GetDescricaoFilmes = async (movieId: number): Promise<Filme> => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
  const data: Filme = await response.json();
  console.log(data);
  return data;
};