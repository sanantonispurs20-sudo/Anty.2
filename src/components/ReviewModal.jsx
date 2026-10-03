import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { firestoreService } from '../services/firestoreService';

export default function ReviewModal({ isOpen, onClose, movie }) {
  const { user, loginWithGoogle } = useAuth();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  const handleSave = async () => {
    if (!user) {
      alert('Você precisa fazer login para avaliar.');
      loginWithGoogle();
      return;
    }
    if (!movie) return;

    setSaving(true);
    try {
      await firestoreService.addReview(user.uid, movie, rating, review);
      alert('Avaliação salva com sucesso!');
      onClose();
    } catch (error) {
      alert('Erro ao salvar avaliação. Tente novamente.');
    }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-space-md">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-surface/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-surface-container-low rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-surface-container-high">
        {/* Header */}
        <div className="px-space-lg py-space-md border-b border-surface-container-highest flex items-center justify-between bg-surface-container-lowest">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Registrar no Diário</h2>
          <button 
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-space-lg flex flex-col gap-space-lg">
          <div className="flex gap-space-md items-center">
            <div className="w-16 h-24 bg-surface-container-highest rounded overflow-hidden shadow-md shrink-0">
              {movie?.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Poster" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">movie</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-title-md text-on-surface line-clamp-2">{movie?.title || 'Selecione um filme'}</h3>
              <p className="text-on-surface-variant text-sm">{movie?.release_date?.substring(0, 4) || '2024'}</p>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-on-surface-variant uppercase tracking-wider">Avaliação</label>
            <div className="flex items-center gap-1 text-primary text-[32px] cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star}
                  onClick={() => setRating(star)}
                  className="material-symbols-outlined hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: rating >= star ? "'FILL' 1" : "'FILL' 0" }}
                >
                  star
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label htmlFor="review" className="font-label-md text-on-surface-variant uppercase tracking-wider">Comentário (opcional)</label>
            <textarea
              id="review"
              rows="4"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="O que você achou deste filme?"
              className="w-full bg-surface-container rounded-lg p-space-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow"
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="p-space-md bg-surface-container-lowest border-t border-surface-container-highest flex justify-end gap-space-sm">
          <button 
            onClick={onClose}
            className="px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors font-label-md"
            disabled={saving}
          >
            Cancelar
          </button>
          <button 
            onClick={handleSave}
            disabled={saving}
            className={`px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-primary-fixed transition-colors font-label-md font-bold shadow-[0_0_16px_rgba(245,158,11,0.25)] ${saving ? 'opacity-50' : ''}`}
          >
            {saving ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </div>
    </div>
  );
}
