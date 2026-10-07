'use client';
import {
  ArrowUpRight,
  Mail,
  Code2,
  Download,
  FolderGit2,
  Brain,
  BarChart3,
  Menu,
  X,
} from 'lucide-react';


import Image from "next/image";
import { useState } from 'react';

const projects = [
  {
    n: '01',
    title: 'Machine Learning',
    desc: 'Optimization of Heart Disease Risk Prediction Using a Hybrid Gradient Boosting Method Based on a Combination of XGBoost and LightGBM Models.',
    tags: ['Python', 'hybrid ','XGBoost', 'LightGBM'],
    stat: 'Experiment #001',
    github: 'https://github.com/fauzsanno/hybrid-xgboost-lightgbm-heart-prediction',
    deploy: 'https://hybrid-xgboost-lightgbm-heart-prediction-n6j49etywmwt48vc58d5h.streamlit.app/',

  },
  {
    n: '02',
    title: 'Portfolio Web Application',
    desc: 'A practical web application featuring intuitive user flows, responsive UI, and a clean interface.',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    stat: 'Full-stack project',
    github: 'https://github.com/fauzsanno/portofolio',
  },
  {
    n: '03',
    title: 'PerpustakaanAppMVC',
    desc: 'A practical web application focused on structured data, user flows, database management and a clean interface.',
    tags: ['PHP', 'MySQL', 'javascript', 'Bootstrap'],
    stat: '242,834 records',
    github: 'https://github.com/fauzsanno/PerpustakaanAppMVC',
  },
];

const skills = [
  ['Python', 'Data Mining & Machine Learning'],
  ['Next.js + TypeScript + React + Tailwind CSS', 'Interactive web development & User interface development'],
  ['PHP + Laravel', 'Backend development'],
  ['SQL', 'Data & database management'],
];

const approaches = [
  ['01', 'UNDERSTAND', 'Understand the problem, objectives, and available data.'],
  ['02', 'EXPLORE', 'Explore, clean, and understand the data to uncover meaningful patterns.'],
  ['03', 'EXPERIMENT', 'Apply data mining techniques and experiment with machine learning models.'],
  ['04', 'EVALUATE', 'Evaluate results, validate findings, and refine the approach.'],
  ['05', 'DELIVER', 'Turn insights and models into practical solutions.'],
];

export default function Home()  {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    
    <main className="min-h-screen bg-[#08090b] text-white">

      {/* ================= NAVBAR ================= */}

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090b]/80 backdrop-blur-xl">

  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

    {/* LOGO */}

    <a
      href="#top"
      className="font-mono text-sm font-bold tracking-widest"
      onClick={() => setMobileMenuOpen(false)}
    >
      JFR
    </a>


    {/* DESKTOP MENU */}

    <div className="hidden gap-6 text-sm text-slate-400 sm:flex">

      <a
        href="#projects"
        className="text-sm text-slate-400 transition hover:text-white"
      >
        PROJECTS
      </a>

      <a
        href="#lab"
        className="transition hover:text-white"
      >
        LAB
      </a>

      <a
        href="#about"
        className="transition hover:text-white"
      >
        ABOUT
      </a>

      <a
        href="#contact"
        className="transition hover:text-white"
      >
        CONTACT
      </a>

    </div>


    {/* MOBILE BUTTON */}

    <button
      type="button"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/5 sm:hidden"
      aria-label="Toggle navigation menu"
    >

      {mobileMenuOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}

    </button>

  </div>


  {/* MOBILE MENU */}

  {mobileMenuOpen && (

    <div className="border-t border-white/5 bg-[#08090b]/95 px-6 py-5 backdrop-blur-xl sm:hidden">

      <div className="flex flex-col gap-5 font-mono text-xs tracking-widest text-slate-400">

        <a
          href="#projects"
          onClick={() => setMobileMenuOpen(false)}
          className="transition hover:text-white"
        >
          PROJECTS
        </a>

        <a
          href="#lab"
          onClick={() => setMobileMenuOpen(false)}
          className="transition hover:text-white"
        >
          LAB
        </a>

        <a
          href="#about"
          onClick={() => setMobileMenuOpen(false)}
          className="transition hover:text-white"
        >
          ABOUT
        </a>

        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="transition hover:text-white"
        >
          CONTACT
        </a>

      </div>

    </div>

  )}

</nav>


      {/* ================= HERO ================= */}

<section
  id="top"
  className="relative overflow-hidden border-b border-white/5 pt-32"
>

  {/* ================= BACKGROUND GLOW ================= */}

  <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

  <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />


  <div className="relative mx-auto max-w-6xl px-6 pb-28">

    <div className="grid items-center gap-16 md:grid-cols-[1fr_500px]">


      {/* ================================================== */}
      {/* ================= HERO CONTENT ================== */}
      {/* ================================================== */}

      <div>

        {/* NAME */}

        <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300 sm:text-xs sm:tracking-[0.28em]">

          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

          <span>
            JOE FAUZSANNO RETTOB
          </span>

        </div>


        {/* HEADLINE */}

        <h1 className="text-5xl font-semibold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">

          I BUILD.

          <br />

          <span className="text-slate-500">
            I ANALYZE.
          </span>

          <br />

          I SOLVE.

        </h1>


        {/* DESCRIPTION */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

          Data Mining & Machine Learning Enthusiast,
          <br className="hidden sm:block" />

          Front-End Developer.     
        </p>


        {/* BUTTONS */}

        <div className="mt-9 flex flex-wrap gap-3">

          {/* EXPLORE */}

         <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gray-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-gray-400"
          >

            <span className="text-black">
              Explore my projects
            </span>

            <ArrowUpRight className="ml-1 h-4 w-4 text-black" />

          </a>


          {/* CONTACT */}

         <a
            href="#contact"
            className="rounded-full border border-white/10 px-5 py-3 text-center text-sm text-slate-300 transition hover:bg-white/5"
          >
            Let's connect

          </a>

        </div>

      </div>


      {/* ================================================== */}
      {/* ================= PROFILE IMAGE ================= */}
      {/* ================================================== */}

      <div className="flex justify-center md:justify-end">

        <div className="relative flex h-[370px] w-full max-w-[370px] items-center justify-center sm:h-[430px] sm:max-w-[430px] md:h-[480px] md:w-[480px] md:max-w-none">


          {/* ================================================== */}
          {/* ================= AMBIENT GLOW =================== */}
          {/* ================================================== */}

          <div className="absolute h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />


          {/* ================================================== */}
          {/* ================= OUTER ORBITS =================== */}
          {/* ================================================== */}

          {/* Outer Circle */}

          <div className="absolute h-[340px] w-[340px] rounded-full border border-blue-400/10 sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]" />


          {/* Middle Circle */}

          <div className="absolute h-[315px] w-[315px] rounded-full border border-blue-400/20 sm:h-[370px] sm:w-[370px] md:h-[420px] md:w-[420px]" />


          {/* Inner Circle */}

          <div className="absolute h-[295px] w-[295px] rounded-full border border-blue-400/10 sm:h-[345px] sm:w-[345px] md:h-[390px] md:w-[390px]" />


          {/* ================================================== */}
          {/* ================= ORBIT ARCS ===================== */}
          {/* ================================================== */}

          <div
            className="
              absolute
              h-[340px]
              w-[340px]
              rounded-full
              border-t
              border-blue-400/70
              rotate-12
              sm:h-[400px]
              sm:w-[400px]
              md:h-[450px]
              md:w-[450px]
            "
          />

          <div
            className="
              absolute
              h-[315px]
              w-[315px]
              rounded-full
              border-r
              border-blue-400/50
              -rotate-12
              sm:h-[370px]
              sm:w-[370px]
              md:h-[420px]
              md:w-[420px]
            "
          />
          <div
            className="
              absolute
              h-[295px]
              w-[295px]
              rounded-full
              border-b
              border-blue-400/40
              rotate-45
              sm:h-[345px]
              sm:w-[345px]
              md:h-[390px]
              md:w-[390px]
            "
          />


          {/* ================================================== */}
          {/* ================= ORBIT DOTS ===================== */}
          {/* ================================================== */}

          {/* Top Right */}

          <span
            className="
              absolute
              right-[25px]
              top-[35px]
              h-3
              w-3
              rounded-full
              bg-blue-400
              shadow-lg
              shadow-blue-400/80

              sm:right-[35px]
              sm:top-[45px]

              md:right-[45px]
              md:top-[55px]
            "
          />


          {/* Left */}

          <span
            className="
              absolute
              left-[20px]
              top-[160px]
              h-2
              w-2
              rounded-full
              bg-blue-300
              shadow-lg
              shadow-blue-300/70

              sm:left-[28px]
              sm:top-[185px]

              md:left-[38px]
              md:top-[210px]
            "
          />


          {/* Bottom Left */}

          <span
            className="
              absolute
              bottom-[40px]
              left-[55px]
              h-2.5
              w-2.5
              rounded-full
              bg-blue-400
              shadow-lg
              shadow-blue-400/70

              sm:bottom-[50px]
              sm:left-[68px]

              md:bottom-[58px]
              md:left-[80px]
            "
          />


          {/* Bottom Right */}

          <span
            className="
              absolute
              bottom-[58px]
              right-[50px]
              h-2
              w-2
              rounded-full
              bg-blue-300

              sm:bottom-[70px]
              sm:right-[62px]

              md:bottom-[82px]
              md:right-[75px]
            "
          />


          {/* ================================================== */}
          {/* ================= PROFILE IMAGE ================= */}
          {/* ================================================== */}

          <div className="relative z-10 h-[245px] w-[245px] sm:h-[285px] sm:w-[285px] md:h-[330px] md:w-[330px]">


            {/* Image Glow */}

            <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-2xl" />


            {/* Blue Image Ring */}

            <div className="absolute -inset-2 rounded-full border border-blue-400/60" />


            {/* Image Container */}

            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-950 p-2">

              <Image
                src="/Me6.jpeg"
                alt="Joe Fauzsanno Rettob"
                width={500}
                height={500}
                priority
                className="h-full w-full rounded-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />

            </div>

          </div>


          {/* ================================================== */}
          {/* ================= ML & DATA ===================== */}
          {/* ================================================== */}

          <div
            className="
              absolute
              right-[-20px]
              top-[25px]
              z-20
              hidden
              rounded-xl
              border
              border-blue-400/20
              bg-slate-950/80
              px-4
              py-3
              shadow-xl
              shadow-blue-500/5
              backdrop-blur-md
              sm:block
            "
          >

            <div className="flex items-center gap-3">


              {/* Icon */}

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/5">

                <Brain className="h-4 w-4 text-blue-300" />

              </div>


              {/* Text */}

              <div>

                <p className="font-mono text-[10px] tracking-widest text-slate-300">
                  MACHINE LEARNING
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Find Patterns, Build Insights
                </p>

              </div>

            </div>

          </div>


          {/* ================================================== */}
          {/* ================= WEB DEVELOPMENT =============== */}
          {/* ================================================== */}

          <div
            className="
              absolute
              bottom-[15px]
              left-[-25px]
              z-20
              hidden
              rounded-xl
              border
              border-blue-400/20
              bg-slate-950/80
              px-4
              py-3
              shadow-xl
              shadow-blue-500/5
              backdrop-blur-md
              sm:block
            "
          >

            <div className="flex items-center gap-3">


              {/* Icon */}

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/5">

                <Code2 className="h-4 w-4 text-blue-300" />

              </div>


              {/* Text */}

              <div>

                <p className="font-mono text-[10px] tracking-widest text-slate-300">
                  FRONT-END
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Clean Code, Better UX
                </p>

              </div>

            </div>

          </div>


          {/* ================================================== */}
          {/* ================= DATA ANALYSIS ================= */}
          {/* ================================================== */}

          <div
            className="
              absolute
              bottom-[30px]
              right-[-35px]
              z-20
              hidden
              rounded-xl
              border
              border-blue-400/20
              bg-slate-950/80
              px-4
              py-3
              shadow-xl
              shadow-blue-500/5
              backdrop-blur-md
              sm:block
            "
          >

            <div className="flex items-center gap-3">


              {/* Icon */}

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/5">

                <BarChart3 className="h-4 w-4 text-blue-300" />

              </div>


              {/* Text */}

              <div>

                <p className="font-mono text-[10px] tracking-widest text-slate-300">
                  DATA MINING
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  Discover Patterns in Data
                </p>

              </div>

            </div>

          </div>


          {/* ================================================== */}
          {/* ================= CONNECTOR LINES ================ */}
          {/* ================================================== */}

          <div
            className="
              absolute
              right-[105px]
              top-[92px]
              hidden
              h-px
              w-16
              bg-blue-400/40
              sm:block
            "
          />


          <div
            className="
              absolute
              bottom-[70px]
              left-[105px]
              hidden
              h-px
              w-16
              bg-blue-400/40
              sm:block
            "
          />


          <div
            className="
              absolute
              bottom-[80px]
              right-[105px]
              hidden
              h-px
              w-12
              bg-blue-400/30
              sm:block
            "
          />

        </div>

      </div>

    </div>

  </div>

</section>


{/* PROJECTS */}
<section id="projects" className="mx-auto max-w-6xl px-6 py-24">
  <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-blue-400">
        Selected Work
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A portfolio that shows the work, not just the words.
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
        I enjoy exploring data, uncovering meaningful patterns, and
              experimenting with machine learning to turn real-world problems
              into practical solutions.
      </p>
    </div>

    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
      03 Projects
    </div>
  </div>

  <div className="grid gap-6 lg:grid-cols-2">
    {projects.map((project) => (
      <article
        key={project.n}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.05] sm:p-8"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        {/* Project number */}
        <div className="relative flex items-start justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-blue-400">
            PROJECT / {project.n}
          </span>

          <FolderGit2 className="h-5 w-5 text-slate-600 transition group-hover:text-blue-400" />
        </div>

        {/* Title */}
        <h3 className="relative mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="relative mt-4 max-w-xl text-sm leading-7 text-slate-400">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom information */}
        <div className="relative mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Project Data
            </p>

            <p className="mt-2 text-sm text-slate-300">
              {project.stat}
            </p>
          </div>

          {/* Repository */}
            <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
          >
            deploy
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
          >
            Open Repository
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    ))}
  </div>
</section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">


          {/* ================= ABOUT CONTENT ================= */}

          <div>

            <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
              01 / WHO AM I
            </p>


            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Joe Fauzsanno Rettob S.Kom
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              Recent Informatics graduate from Universitas Amikom Yogyakarta, holding a GPA of 3.49/4.00
            </p>

          </div>


          {/* ================= TERMINAL CARD ================= */}

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              font-mono
              text-sm
              leading-8
              shadow-2xl
              shadow-blue-500/5
            "
          >

    

            <div className="mt-4 text-slate-500">
              ROLE
            </div>

            <div>
              → ML Enthusiast
            </div>

            <div>
              → Data Scientist
            </div>

            <div>
              → Front-End Web Developer
            </div>

            <div className="mt-4 text-slate-500">
              FOCUS
            </div>

            <div>
              → Learn by shipping
            </div>

            <div>
              → Analyze meaningful data
            </div>

            <div>
              → Build useful systems
            </div>

          </div>


        </div>
      </section>

      {/* ================= DIGITAL LAB ================= */}

      <section
        id="lab"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
              03 / LAB
            </p>


            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Skills become useful when they solve a real problem.
            </h2>


            <p className="mt-5 leading-7 text-slate-400">
              This section represents the technologies I use to build
              applications, analyze data and experiment with machine
              learning.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {skills.map(([name, description], index) => (

              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-blue-400/30 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <Code2 className="h-4 w-4 text-blue-300" />

                </div>


                <h3 className="mt-7 text-lg font-semibold">
                  {name}
                </h3>


                <p className="mt-1 text-sm text-slate-500">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}

      <section className="border-y border-white/5 bg-[#0a0c10] py-24">

        <div className="mx-auto max-w-6xl px-6">

          <p className="font-mono text-xs tracking-[0.25em] text-blue-300">
            04 / APPROACH
          </p>


          <h2 className="mt-4 text-4xl font-semibold">
            How I approach a problem.
          </h2>


          <div className="mt-8 grid gap-4 md:grid-cols-5">

            {approaches.map(([number, title, description]) => (

              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-blue-400/30"
              >

                <span className="font-mono text-xs text-slate-500">
                  {number}
                </span>


                <h3 className="mt-8 font-semibold">
                  {title}
                </h3>


                <p className="mt-2 text-sm leading-5 text-slate-500">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-28"
      >

        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-blue-500/5 md:grid-cols-[1fr_auto] md:p-12">

          <div>

            <div className="font-mono text-xs text-blue-300">
              $ connect | with JFR
            </div>


            <h2 className="mt-5 text-4xl font-semibold leading-tight">
              Have a project, idea, or problem to explore?
            </h2>


            <p className="mt-4 max-w-xl text-slate-400">
              Feel free to connect with me through email or GitHub.
            </p>

          </div>


          <div className="flex flex-col gap-3">

            {/* EMAIL */}

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
            >

              <Mail className="h-4 w-4" />

              jorettob@gmail.com

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/fauzsanno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
            >

              <FolderGit2 className="h-4 w-4" />

              GitHub

            </a>


            {/* view CV */}

            <a
              href="https://drive.google.com/file/d/1VfB1j0edv85Ji237Ll-v-Nzgn-Ahcdee/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
            >
              <Download className="h-4 w-4" />

              View CV
            </a>



          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/5 py-8">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <span className="font-mono">
            JFR © 
          </span>

        </div>

      </footer>

    </main>
  );
}

