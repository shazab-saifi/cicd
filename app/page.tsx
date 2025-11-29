export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center font-sans">
      <main className="w-full max-w-xl px-6 py-20 flex flex-col items-center">
        {/* Name and Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-zinc-50 mb-2 text-center">
          Shazab Saifi
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 text-center">
          Design Engineer
        </p>

        {/* Brief About */}
        <p className="max-w-md text-zinc-700 dark:text-zinc-300 text-center mb-12">
          I blend engineering precision with thoughtful design to craft elegant, robust solutions. My focus is on solving real problems through creativity, simplicity, and attention to detail.
        </p>

        {/* Links */}
        <div className="flex gap-5 mt-2">
          <a
            href="mailto:alex.carter@email.com"
            className="text-zinc-700 dark:text-zinc-200 underline underline-offset-2 hover:text-black dark:hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/alexcarter"
            className="text-zinc-700 dark:text-zinc-200 underline underline-offset-2 hover:text-black dark:hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alexcarter"
            className="text-zinc-700 dark:text-zinc-200 underline underline-offset-2 hover:text-black dark:hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
