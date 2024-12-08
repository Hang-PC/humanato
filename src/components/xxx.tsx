

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
          Automate Browser-Based
          <br />
          Workflows with AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Transform your browser automation with AI-powered workflows. Build,
          test, and deploy automated tasks without writing a single line of
          code.
        </p>

        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button>
            Get Started
          </button>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Home;