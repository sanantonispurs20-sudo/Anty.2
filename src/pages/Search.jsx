import { useState, useEffect } from 'react';
import { tmdbService } from '../services/tmdbService';
import ReviewModal from '../components/ReviewModal';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      const data = await tmdbService.getTrendingMovies();
      setMovies(data);
      setLoading(false);
    };
    fetchTrending();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const data = await tmdbService.searchMovies(query);
    setMovies(data);
    setLoading(false);
  };

  const openReviewModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Backdrop Glow Glow Ambient Light */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-gradient-to-b from-primary/10 via-primary-container/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        
        {/* Search Terminal Header */}
        <div className="relative z-10 pt-space-lg pb-space-md flex flex-col items-center">
          {/* API Status Pill & Metatag */}
          <div className="flex items-center gap-space-sm mb-space-sm">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              TMDB API Live • v3 Gateway
            </span>
          </div>

          {/* Main Search Input Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-3xl relative px-space-xs">
            <div className="relative flex items-center bg-surface-container-low hover:bg-surface-container focus-within:bg-surface-container rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all">
              <button type="submit" className="pl-space-md pr-space-sm flex items-center text-primary">
                <span className="material-symbols-outlined text-[26px]">search</span>
              </button>
              <input 
                className="w-full py-4 pr-24 bg-transparent font-title-md text-title-md text-on-surface placeholder:text-outline focus:outline-none" 
                id="tmdbSearchInput" 
                placeholder="Buscar filme por título na API do TMDB..." 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="absolute right-3 flex items-center gap-space-xs">
                <button onClick={() => setQuery('')} type="button" className="px-space-xs py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1">
                  <span>ESC</span>
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-space-md items-start">
        {/* Primary Results Stream */}
        <div className="lg:col-span-9 flex flex-col gap-space-md">
          <div className="flex items-center justify-between px-space-xs">
            <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
              <span>Resultados Oficiais</span>
            </h2>
          </div>

          {/* Results Grid */}
          <div className="flex flex-col gap-space-md">
            
            {loading ? (
              <div className="text-on-surface p-4 text-center">Buscando filmes...</div>
            ) : (
              movies.map((movie) => (
                <article key={movie.id} className="group relative flex flex-col sm:flex-row bg-surface-container-low hover:bg-surface-container rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all cursor-pointer">
                  <div className="relative w-full sm:w-44 shrink-0 aspect-[2/3] overflow-hidden bg-surface-container-highest">
                    {movie.poster_path ? (
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-outline"><span className="material-symbols-outlined text-[48px]">movie</span></div>
                    )}
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-on-surface font-label-md text-label-md shadow-md">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="font-bold text-primary">{movie.vote_average?.toFixed(1) || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-space-sm">
                        <div>
                          <div className="flex items-center gap-space-xs">
                            <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary-container uppercase tracking-wider">Filme</span>
                            <span className="text-outline font-label-sm text-label-sm">{movie.release_date?.substring(0, 4)}</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-0.5">
                            {movie.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant/90 mt-space-sm line-clamp-2">
                        {movie.overview || "Sem sinopse disponível."}
                      </p>
                    </div>
                    <div className="mt-space-md pt-space-sm bg-surface-container-lowest/60 -mx-space-md -mb-space-md px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <button onClick={() => openReviewModal(movie)} className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-bold font-label-md text-label-md shadow-[0_0_16px_rgba(245,158,11,0.25)] hover:shadow-[0_0_22px_rgba(245,158,11,0.45)] transition-all flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[16px]">add_circle</span>
                          <span>+ Registrar no Diário</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
            
          </div>
        </div>

        {/* Aside */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col gap-space-md sticky top-28">
          <div className="bg-surface-container-low p-space-md rounded-xl shadow-lg border border-surface-container-highest">
            <h3 className="font-title-md text-title-md text-on-surface mb-space-sm">O que buscar?</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Você pode buscar por títulos em português ou inglês e os resultados retornarão com as informações completas usando os dados oficiais da The Movie Database (TMDB).
            </p>
          </div>
        </aside>
      </div>

      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        movie={selectedMovie} 
      />
    </div>
  );
}