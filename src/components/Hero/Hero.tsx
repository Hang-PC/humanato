import "./index.css";
import brain from "../../assets/human-brain.png";
import StyledButton from "../Button/Button";

const Hero = () => {
  return (
    <section className="flex items-center justify-between relative min-h-0">
      <section className="hero-text h-screen">
        <h1 className="hero-main-text font-black mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-300 bg-clip-text text-transparent text-8xl">
          HUMANATO
        </h1>
        <p className="text-gray-400 ps-1 mb-5">
          Essentials of Imaging Anatomy: Simplifying the Complex for Clearer
          Understanding
        </p>

        <StyledButton />
      </section>
      <section className="hero-image relative h-screen w-1/2">
        <div className="w-3/4/3 h-3/4 faded-bg bg-[radial-gradient(circle,_theme('colors.secondary')_-100%,_theme('colors.primary')_60%)] "></div>
        <div className="platform-card absolute top-1/3 left-0 w-1/2 h-1/2 bg-gray-900/70 opacity-40 backdrop-blur-md border bg-gradient-to-r from-indigo-500/10 border-gray-300/20"></div>

        <img
          src={brain}
          className="w-3/4 absolute top-28 left-1/2 transform -translate-x-1/2"
        />
      </section>
    </section>
  );
};

export default Hero;
