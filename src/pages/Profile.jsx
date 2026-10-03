export default function Profile() {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      <div className="relative w-full overflow-hidden pt-space-lg">
        <div className="flex flex-col items-center gap-space-md z-10 relative">
          <img 
            alt="Profile Avatar" 
            className="w-24 h-24 rounded-full object-cover shadow-[0_0_0_4px_rgba(245,158,11,0.2)]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1kTzT6PtnM4MGGSxidG0eTYjDpgZfU2lHZtlSpTtSbONi5xti7xS2Ih0zDtgLGTqMwX76ekgefFQlOonjPtBEdkmXfWbLGkPUoFhUO8ZuZVGVeT4rN1Wv0un4eC2VDu9P7dcKgaj0Q8xnU-KfjJDoNZ7fxzsseioGwgOvjNkyi9cg20IWKdCP8bfxcb2osFEaQ_Yk8LwrgI1wPhEnx2a0d2A6_gflVfxe6wK8h5mW1YAhDRBjwMxT" 
          />
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface">Seu Perfil</h1>
          
          <div className="flex gap-space-md mt-4">
            <div className="bg-surface-container-low p-space-md rounded-xl text-center">
              <span className="block text-primary font-headline-md">184</span>
              <span className="text-on-surface-variant text-sm">Filmes</span>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-xl text-center">
              <span className="block text-primary font-headline-md">4.2</span>
              <span className="text-on-surface-variant text-sm">Média</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}