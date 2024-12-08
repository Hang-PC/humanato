import "./index.css";
const Hero = () => {
  return (
    <section className="flex h-full items-center justify-between">
      <section className="hero-text h-full">
        <div className="floating-text">
          <h1 className="hero-main-text text-6xl font-bold mb-5">Humanato</h1>
          <p>
            Essentials of Imaging Anatomy: Simplifying the Complex for Clearer
            Understanding
          </p>
        </div>
      </section>
      <section className="h-full w-1/2">
        <div className="hero-image faded-border h-full w-full bg-[radial-gradient(circle,_theme('colors.secondary')_-150%,_theme('colors.primary')_60%)]"></div>
      </section>
    </section>
  );
};

export default Hero;
