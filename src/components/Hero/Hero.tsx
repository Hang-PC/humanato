import "./index.css";
import brain from "../../assets/human-brain.png";
import { CirclePlay } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex items-center justify-between relative min-h-0">
      <section className="hero-text h-screen">
        <h1 className="hero-main-text font-black mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-300 bg-clip-text text-transparent text-7xl">
          HUMANATO
        </h1>
        <p className="text-gray-400 ps-1 mb-5">
          Essentials of Imaging Anatomy: Simplifying <br /> the Complex for
          Clearer Understanding
        </p>

        <div className="flex gap-3">
          <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-teal-50 bg-gradient-to-tr from-secondary/30 via-blue-900/70 to-teal-900/30 ring-4 ring-teal-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-teal-50/10 before:blur-xl">
            Open Atlas
          </button>
          <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-teal-50  rounded-full overflow-hidden hover:opacity-90 transition-opacity ring-4 ring-teal-900/20 ">
            <CirclePlay /> Watch Demo
          </button>
        </div>
      </section>
      <section className="hero-image relative h-screen w-1/2">
        <div className="w-3/4/3 h-3/4 faded-bg bg-[radial-gradient(circle,_theme('colors.secondary')_-100%,_theme('colors.primary')_60%)] "></div>
        <div className="platform-card absolute top-1/3 left-0 w-1/2 h-1/2 bg-gray-900/70 opacity-40 backdrop-blur-md border bg-gradient-to-r from-indigo-500/10 border-gray-300/20"></div>

        <img
          src={brain}
          className="w-3/4 absolute top-28 left-10 transform -translate-x-1/2 floating"
        />
      </section>
    </section>
  );
};

export default Hero;
