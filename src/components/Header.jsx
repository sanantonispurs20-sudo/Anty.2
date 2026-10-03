import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-gutter">
        
        <div className="flex items-center gap-space-md shrink-0">
          <img alt="Movie0 Logo" className="h-8 w-auto object-contain" src="/logo.svg" />
          <Link to="/" className="font-headline-sm text-headline-sm tracking-tight text-on-surface flex items-center gap-space-xs hover:text-primary transition-colors">
            <span>Movie<span className="text-primary">0</span></span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-space-xs p-space-xs bg-surface-container-lowest/60 rounded-xl">
          <Link to="/" className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface font-label-md text-label-md rounded-lg transition-colors">
            Home / Diário
          </Link>
          <Link to="/search" className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface font-label-md text-label-md rounded-lg transition-colors">
            Explorar & Busca TMDB
          </Link>
          {user && (
            <Link to="/profile" className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface font-label-md text-label-md rounded-lg transition-colors">
              Estatísticas & Perfil
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-space-md shrink-0">
          <div className="relative hidden sm:flex items-center">
            <Link to="/search" className="flex items-center gap-space-sm bg-surface-container-low hover:bg-surface-container px-space-md py-space-xs rounded-full text-on-surface-variant hover:text-on-surface transition-all shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              <span className="material-symbols-outlined text-primary text-[18px]">search</span>
              <span className="font-body-sm text-body-sm pr-space-md">Buscar filmes...</span>
            </Link>
          </div>
          
          {user ? (
            <div className="relative flex items-center gap-space-xs pl-space-xs">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-[0_0_0_2px_rgba(245,158,11,0.2)]" src={user.photoURL || '/logo.svg'} />
              <button onClick={logout} className="ml-2 font-label-sm text-primary hover:underline">
                Sair
              </button>
            </div>
          ) : (
            <button onClick={loginWithGoogle} className="flex items-center gap-space-xs bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-md text-label-md font-bold px-space-md py-space-sm rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer">
              <span>Login Google</span>
            </button>
          )}
        </div>
        
      </div>
    </header>
  );
}
