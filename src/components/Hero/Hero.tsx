import "./index.css";
import brain from "../../assets/human-brain.png";
import { CirclePlay } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex items-center justify-between relative min-h-0 bg-gradient-to-tr from-secondary/30 from-0% to-transparent to-30%">
      <div className="bubble"></div>
      <section className="hero-text h-screen">
        <h1 className="hero-main-text font-black mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-300 bg-clip-text text-transparent text-7xl">
          HUMANATO
        </h1>
        <p className="hero-secondary-text text-gray-400 ps-1 mb-5">
          Explore the world’s most intuitive imaging anatomy atlas, designed to
          make understanding <br /> complex anatomical structures effortless.
          With clear labeling and detailed visuals, <br />
          learning anatomy has never been this easy or accessible.
        </p>

        <div className="flex gap-3 mt-10">
          <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-teal-50 bg-gradient-to-tr from-secondary/30 via-blue-900/70 to-teal-900/30 ring-4 ring-teal-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-teal-50/10 before:blur-xl">
            Open Atlas
          </button>
          <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-teal-50  rounded-full overflow-hidden hover:opacity-90 transition-opacity ring-4 ring-teal-900/20 ">
            <CirclePlay /> Watch Demo
          </button>
        </div>
      </section>
      <section className="hero-image relative h-screen w-1/2 ">
        <div className="w-3/4/3 h-3/4 faded-bg bg-[radial-gradient(circle,_theme('colors.secondary')_-80%,_theme('colors.primary')_60%)] "></div>
        <div className="platform-card absolute top-1/4 left-14 w-1/2 h-1/2 bg-gray-900/70 opacity-40 backdrop-blur-md border bg-gradient-to-r from-indigo-500/10 border-gray-300/20"></div>

        <img
          src={brain}
          className="w-3/4 absolute top-40 left-14 transform -translate-x-1/2 floating"
        />
      </section>
    </section>
  );
};

export default Hero;
