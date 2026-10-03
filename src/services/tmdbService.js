const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbService = {
  searchMovies: async (query) => {
    if (!query) return [];
    try {
      // Usando search multi para buscar por filmes e pessoas (atores/diretores) simultaneamente
      const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR`);
      const data = await response.json();
      
      let allMovies = [];
      const seenIds = new Set();
      
      // Filtra diretamente os filmes do resultado
      const moviesOnly = (data.results || []).filter(item => item.media_type === 'movie');
      moviesOnly.forEach(m => {
        if (!seenIds.has(m.id)) {
          seenIds.add(m.id);
          allMovies.push(m);
        }
      });
      
      // Extrai os IDs das pessoas encontradas para buscar sua filmografia
      const peopleIds = (data.results || [])
        .filter(item => item.media_type === 'person')
        .map(person => person.id);
        
      if (peopleIds.length > 0) {
        // Para simplificar, pegamos a filmografia da pessoa mais relevante (a primeira)
        const topPersonId = peopleIds[0];
        const creditsRes = await fetch(`${BASE_URL}/person/${topPersonId}/movie_credits?api_key=${API_KEY}&language=pt-BR`);
        const creditsData = await creditsRes.json();
        
        // Juntamos filmes onde atuou e onde participou da equipe (ex: Diretor)
        const personMovies = [
          ...(creditsData.cast || []),
          ...(creditsData.crew || [])
        ];
        
        // Adicionamos os filmes dessa pessoa cuidando para não repetir com os que já vieram na busca principal
        personMovies.forEach(m => {
          if (!seenIds.has(m.id)) {
            seenIds.add(m.id);
            allMovies.push(m);
          }
        });
        
        // Ordena para que os mais populares/recentes dessa pessoa apareçam melhor
        allMovies.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      }
      
      return allMovies.slice(0, 20); // Retorna os 20 principais
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  },
  
  getMovieDetails: async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  },
  
  getTrendingMovies: async () => {
    try {
      const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=pt-BR`);
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  }
};
