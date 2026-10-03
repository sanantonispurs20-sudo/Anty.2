export default function MovieDetail() {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl mt-4">
        <img 
          alt="Filme Cover" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm7WpsheNjoJx3hthBpG_JvKzPke0Rq8mrt5wi8bGT8rsYAfKg7mHtGUIMBt_7lTWo7baKpdyTyCR7uKE_5EUu8VDUdPwvx7MYzlzjwt8vahq76wzRiTg8_d0YnNbG8dF4rhpMP7gTbs2PF0PCbWMyJMVBHos44gn6t9B8h_I9J0tzU6cLn-aSFxoEqn5n3UShFG3dNIjRBbLVltMIxoX_5P_M0DgRyCplRq1-gaw8jguOYMHVPFpK" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-space-lg flex items-end gap-space-lg">
          <img 
            alt="Poster" 
            className="w-40 rounded-xl shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm7WpsheNjoJx3hthBpG_JvKzPke0Rq8mrt5wi8bGT8rsYAfKg7mHtGUIMBt_7lTWo7baKpdyTyCR7uKE_5EUu8VDUdPwvx7MYzlzjwt8vahq76wzRiTg8_d0YnNbG8dF4rhpMP7gTbs2PF0PCbWMyJMVBHos44gn6t9B8h_I9J0tzU6cLn-aSFxoEqn5n3UShFG3dNIjRBbLVltMIxoX_5P_M0DgRyCplRq1-gaw8jguOYMHVPFpK"
          />
          <div className="mb-4">
            <h1 className="font-display-lg text-display-lg text-on-surface">Duna: Parte 2</h1>
            <p className="text-primary font-headline-sm mt-2">Denis Villeneuve • 2024</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mt-space-lg">
        <div className="md:col-span-2">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Sinopse</h2>
          <p className="text-on-surface-variant font-body-lg">
            Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.
          </p>
        </div>
        <div>
          <div className="bg-surface-container-low p-space-md rounded-xl">
            <h3 className="font-title-md text-on-surface mb-2">Sua Avaliação</h3>
            <div className="flex text-primary text-[24px]">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
            </div>
            <p className="text-on-surface-variant text-sm mt-4 italic">
              "Masterpiece visual e sonora. Uma experiência cinematográfica única."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}