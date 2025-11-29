import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-blue-100 dark:from-black dark:to-zinc-900 flex flex-col items-center justify-center font-sans">
      <main className="relative w-full max-w-xl px-6 py-20 flex flex-col items-center bg-white/70 dark:bg-zinc-950/80 rounded-3xl shadow-[0_4px_24px_0_rgba(0,0,0,0.14)] ring-1 ring-zinc-200 dark:ring-zinc-800 backdrop-blur-md">
        {/* Accent Circle */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-linear-to-br from-blue-400 to-blue-600 ring-4 ring-white dark:ring-zinc-950 w-24 h-24 flex items-center justify-center shadow-lg">
            <span className="text-white text-5xl font-bold">S</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="mt-20 text-4xl sm:text-5xl font-extrabold bg-linear-to-tr from-blue-600 via-blue-400 to-indigo-500 bg-clip-text text-transparent text-center drop-shadow mb-2">
          Shazab Saifi
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8 text-center font-medium tracking-wide">
          Design Engineer
        </p>

        {/* Brief About */}
        <p className="max-w-md text-zinc-700 dark:text-zinc-300 text-center mb-12 text-base sm:text-lg">
          I blend <span className="font-semibold text-blue-500 dark:text-blue-400">engineering precision</span> with <span className="font-semibold text-indigo-600 dark:text-indigo-400">thoughtful design</span> to craft elegant, robust solutions. My focus is on solving real problems through <span className="italic">creativity</span>, <span className="italic">simplicity</span>, and <span className="italic">attention to detail</span>.
        </p>

        {/* Links */}
        <div className="flex gap-6 mt-2">
          <a
            href="mailto:shazabdev@email.com"
            className="group flex items-center gap-2 px-5 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition text-zinc-700 dark:text-zinc-200 font-medium text-base"
            aria-label="Email"
          >
            <FaEnvelope className="text-blue-600 dark:text-blue-300 group-hover:scale-110 group-hover:text-blue-800 transition" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/shazab-saifi-85a207338"
            className="group flex items-center gap-2 px-5 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition text-zinc-700 dark:text-zinc-200 font-medium text-base"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-blue-700 dark:text-blue-400 group-hover:scale-110 group-hover:text-blue-800 transition" />
            LinkedIn
          </a>
          <a
            href="https://github.com/shazab-saifi"
            className="group flex items-center gap-2 px-5 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition text-zinc-700 dark:text-zinc-200 font-medium text-base"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-zinc-900 dark:text-zinc-100 group-hover:scale-110 group-hover:text-blue-800 transition" />
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
