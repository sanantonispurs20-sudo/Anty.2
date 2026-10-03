export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Cinema Grain & Ambient Glow Background Effects */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Editorial Welcome Hero Banner */}
        <div className="pt-6 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-space-lg relative z-10">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Projeção Ativa • Outubro 2024
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">Sessão #412</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
              Seu Diário <span className="italic font-normal text-primary">Cinematográfico</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              O registro tátil da sua jornada pelas sombras e luzes da sétima arte. Cada frame pausado, cada crítica lapidada com precisão de montagem.
            </p>
          </div>
          
          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm shrink-0 bg-surface-container-lowest/80 backdrop-blur-md p-space-sm rounded-xl shadow-lg">
            <div className="flex flex-col px-space-md py-space-xs bg-surface-container-low rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Assistidos</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-md text-headline-md text-on-surface font-semibold">184</span>
                <span className="font-label-sm text-label-sm text-primary font-medium">total</span>
              </div>
            </div>
            {/* Outras métricas podem vir aqui (dinâmico via Firebase depois) */}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start mt-6">
        <section className="xl:col-span-8 flex flex-col gap-space-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[22px]">theaters</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Últimas Projeções</h2>
            </div>
            <span className="text-on-surface-variant font-body-sm text-body-sm">Passe o cursor para ler as notas</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-space-md">
            {/* Aqui renderizamos a lista de filmes dinamicamente. Por enquanto um placeholder com a estetica do projeto */}
            <article className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Oppenheimer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoaH4XcHIGaj0g8bXPX83JJCO0jpZ_cPZXM7b9--QSGWJaewS9sL-aLntbsn_ke6D33nJKd6RO8Fl8Z4I4H72Y_G_IpNN_S-fF6m1gtz6cRoV6IFVy8yezAM_n1n8EJ2rj7jBk-6MOU2bdByXzQcZxZ1sBajkTB9doNLmirV4bQiVUxifGe691yD75L83dl1scDHQeh4elM4iyxs4zf3rcZnw_lnatarsHPAxk4jIqjgb0VxifUhuB"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/40 opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute top-2 left-2 flex items-center gap-1 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-0.5 rounded-full shadow-lg">
                  <span className="text-primary text-[12px] font-bold">★★★★★</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-bold">5.0</span>
                </div>
              </div>
              <div className="p-space-sm flex flex-col flex-1 justify-between gap-1">
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Oppenheimer</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">2023 • Christopher Nolan</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <aside className="xl:col-span-4 flex flex-col gap-space-lg">
          <div className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden shadow-xl relative p-space-md">
            <h3 className="font-title-lg text-title-lg text-on-surface">Destaque do Mês</h3>
            <p className="text-on-surface-variant text-sm mt-2">Área para recomendações ou destaques.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
