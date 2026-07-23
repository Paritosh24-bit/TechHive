const clientImages = ['/clients-row-1.png', '/clients-row-2.png'];

export const ClientsSection = () => (
  <section className="py-25 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-150">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="font-sans font-black uppercase tracking-tighter leading-none text-4xl sm:text-5xl lg:text-6xl text-[#0d131f]">
        Our Clients
      </h2>
    </div>
    <div className="marquee-row overflow-hidden py-1.5">
      <div className="marquee-track flex w-max items-center" style={{ animationDuration: '32s' }}>
        {clientImages.map((src, i) => (
          <img
  key={`a-${i}`}
  src={src}
  alt="Client logos"
  className="h-20 md:h-24 w-auto shrink-0 block"
/>
        ))}
        {clientImages.map((src, i) => (
          <img
  key={`b-${i}`}
  src={src}
  alt="Client logos"
  className="h-20 md:h-24 w-auto shrink-0 block"
  aria-hidden="true"
/>
        ))}
      </div>
    </div>
  </section>
);
