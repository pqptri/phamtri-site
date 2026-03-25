const achievements = [
  {
    title: "Valedictorian — District Olympiad in Informatics",
    detail:
      "Recognized for excellence in algorithmic thinking, structured problem-solving, and academic discipline.",
    year: "2023",
  },
  {
    title: "Olympiad in History — Distinguished Performance",
    detail:
      "Built a strong foundation in historical analysis, argumentation, and evidence-based interpretation.",
    year: "2024",
  },
  {
    title: "Academic & Leadership Distinctions",
    detail:
      "Consistent recognition across academic competitions, student initiatives, and project-based leadership.",
    year: "Ongoing",
  },
  {
    title: "Merit-based Honors & Scholarships",
    detail:
      "Recipient of competitive recognitions reflecting both academic depth and long-term development potential.",
    year: "Ongoing",
  },
];

const projects = [
  {
    category: "Research / Academic",
    name: "Interdisciplinary Inquiry Notes",
    problem:
      "How can finance, philosophy, and technology be studied together rather than in isolation?",
    role: "Independent researcher and curator",
    impact:
      "Developed a personal research framework connecting markets, ethics, institutions, and innovation.",
    link: "#",
  },
  {
    category: "Initiative",
    name: "PhilosoTech",
    problem:
      "Students often explore technology without enough philosophical depth or ethical reflection.",
    role: "Founder / strategic contributor",
    impact:
      "Built an interdisciplinary initiative that encourages critical thinking at the intersection of philosophy and technology.",
    link: "#",
  },
  {
    category: "Technical / Data",
    name: "Data & Analytical Exploration",
    problem:
      "Many real-world questions require both quantitative reasoning and social interpretation.",
    role: "Learner, builder, analyst",
    impact:
      "Applied structured analysis, data reasoning, and problem decomposition to academic and project contexts.",
    link: "#",
  },
];

const experiences = [
  {
    role: "Student Leader & Initiative Builder",
    org: "Academic and youth-led projects",
    desc:
      "Led and contributed to projects requiring communication, coordination, and long-term strategic thinking across teams.",
  },
  {
    role: "Research-Oriented Contributor",
    org: "Independent and collaborative settings",
    desc:
      "Worked on ideas spanning history, philosophy, technology, and society, with an emphasis on synthesis and clarity.",
  },
  {
    role: "Content & Thought Communication",
    org: "Educational / public-facing initiatives",
    desc:
      "Translated complex ideas into accessible formats through writing, curation, and structured communication.",
  },
];

const blogCategories = [
  "Finance / Commerce",
  "Philosophy",
  "Technology",
  "Personal Reflections",
];

const skills = {
  Technical: [
    "Data analysis",
    "Structured problem-solving",
    "Web fundamentals",
    "Research systems",
  ],
  Analytical: [
    "Critical thinking",
    "Comparative reasoning",
    "Historical analysis",
    "Interdisciplinary synthesis",
  ],
  Communication: [
    "Academic writing",
    "Public speaking",
    "Leadership communication",
    "Content strategy",
  ],
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-slate-200 selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(30,41,59,0.28),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.55),transparent_30%),linear-gradient(to_bottom,#020617,#000000_38%,#020617)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-200">
              TRI PHAM
            </p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#academic" className="transition hover:text-white">
              Academic
            </a>
            <a href="#achievements" className="transition hover:text-white">
              Achievements
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#thinking" className="transition hover:text-white">
              Thinking
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-24 md:px-10">
        <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="animate-[fadeUp_0.9s_ease-out]">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              High School for the Gifted, VNU-HCM · Incoming Commerce Student
            </p>

            <h1 className="max-w-5xl font-serif text-5xl leading-[0.95] text-white md:text-7xl xl:text-8xl">
              Tri Pham
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium text-slate-200 md:text-2xl">
              Interdisciplinary Thinker | Future Commerce Leader
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              I am building at the intersection of commerce, philosophy, and
              technology — guided by critical thinking, academic depth, and a
              long-term ambition to lead with both rigor and imagination.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                View Resume
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="animate-[fadeUp_1.15s_ease-out] lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Thought of the day
              </p>
              <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-slate-100">
                “The most meaningful work often begins where disciplines stop
                speaking to one another.”
              </blockquote>
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-300">
                <div className="flex items-start justify-between gap-6">
                  <span>Current focus</span>
                  <span className="text-right text-slate-100">
                    Finance, philosophy, technology
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span>Orientation</span>
                  <span className="text-right text-slate-100">
                    Academic, global, interdisciplinary
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span>Long-term goal</span>
                  <span className="text-right text-slate-100">
                    Leadership through ideas, institutions, and innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="About"
          title="A story shaped by rigor, curiosity, and intellectual range."
          description="My academic journey began with disciplined training in competitive and specialized learning environments, but over time I became increasingly drawn to questions that could not be answered from a single field alone. Informatics taught me structure. History taught me context. Leadership taught me responsibility. Together, they shaped a way of thinking that now draws me toward commerce — not merely as a technical field, but as a space where markets, institutions, ideas, and human judgment meet."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <h3 className="font-serif text-2xl text-white">
              Why interdisciplinary work matters to me
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I am interested in commerce because it sits at the center of real
              decision-making: capital allocation, institutional design,
              incentives, long-term value creation, and social impact. Yet I do
              not see commerce as complete without philosophical reflection or
              technological literacy. I want to understand how systems work,
              why they fail, and how they can be improved.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8">
            <h3 className="font-serif text-2xl text-white">
              A personal philosophy
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I believe the strongest future leaders will not be defined only by
              specialization, but by the ability to connect disciplines,
              translate across domains, and think clearly under complexity. My
              ambition is to grow into that kind of leader: globally minded,
              intellectually grounded, and committed to building institutions
              and ideas that matter.
            </p>
          </div>
        </div>
      </section>

      <section
        id="academic"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="Academic Profile"
          title="An academic path built on depth today and breadth tomorrow."
          description="I come from a high-performance academic environment and am preparing to continue that journey through university study in commerce. My long-term interests remain deliberately broad, because I believe future leadership demands the ability to integrate analysis, ethics, and innovation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Current
            </p>
            <h3 className="mt-4 font-serif text-2xl text-white">
              High School for the Gifted, VNU-HCM
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A formative environment that strengthened discipline, academic
              ambition, and intellectual seriousness.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Next
            </p>
            <h3 className="mt-4 font-serif text-2xl text-white">
              Incoming University Student
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Beginning formal study in Commerce, with a long-term interest in
              finance, institutions, and decision-making under uncertainty.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Domains
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Commerce / Finance</li>
              <li>Philosophy</li>
              <li>Technology</li>
              <li>Future coursework placeholder for economics, markets, ethics, and systems thinking</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="Achievements & Honors"
          title="Recognition earned across both analytical and humanistic disciplines."
          description="My record reflects more than performance in a single field. It reflects a pattern: disciplined preparation, intellectual range, and a willingness to pursue excellence across different forms of thinking."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="max-w-xl font-serif text-2xl text-white">
                  {item.title}
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  {item.year}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="Projects & Initiatives"
          title="Work that connects ideas, institutions, and real-world impact."
          description="I am especially interested in projects that require both structure and imagination — the kind of work where analysis, initiative, and communication all matter."
        />

        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[0.28fr_1fr]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {project.category}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">
                  {project.name}
                </h3>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    My role
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="thinking"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="Research & Thinking"
          title="Questions I return to repeatedly."
          description="This site is designed to evolve into a long-term intellectual archive — a place for essays, notes, frameworks, and reflections that grow alongside my academic path."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Philosophy of technology — how tools reshape judgment, institutions, and human agency.",
            "Finance and society — how capital, incentives, and institutions affect long-term outcomes.",
            "Interdisciplinary frameworks — building ways to think across commerce, ethics, and innovation.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-7"
            >
              <p className="text-sm leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionTitle
          eyebrow="Blog & Insights"
          title="Writing as a way of thinking in public."
          description="The blog section is designed for clear, readable, essay-style publishing. Over time, it will collect reflections on commerce, philosophy, technology, and personal growth."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogCategories.map((category) => (
            <div
              key={category}
              className="rounded-[1.25rem] border border-white/10 px-5 py-6 text-sm text-slate-200"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="Experience"
          title="Roles that taught me to turn ideas into outcomes."
          description="I care about impact, not just activity. The experiences below matter because they shaped how I think, communicate, and take responsibility."
        />

        <div className="mt-12 grid gap-6">
          {experiences.map((item) => (
            <div
              key={item.role}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="font-serif text-2xl text-white">{item.role}</h3>
                <p className="text-sm text-slate-400">{item.org}</p>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionTitle
          eyebrow="Skills"
          title="Built through competition, research, and leadership."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="font-serif text-2xl text-white">{group}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {items.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <SectionTitle
          eyebrow="Contact"
          title="Open to thoughtful conversations and meaningful collaboration."
          description="Whether the topic is academic, interdisciplinary, or institutional, I value conversations that are serious, curious, and forward-looking."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8">
            <div className="space-y-5 text-sm text-slate-300">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Email
                </span>
                <a
                  href="mailto:admin@phamtri.com"
                  className="mt-2 inline-block text-base text-white underline decoration-white/30 underline-offset-4"
                >
                  admin@phamtri.com
                </a>
              </p>

              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  LinkedIn
                </span>
                <a
                  href="#"
                  className="mt-2 inline-block text-base text-white underline decoration-white/30 underline-offset-4"
                >
                  LinkedIn profile placeholder
                </a>
              </p>
            </div>
          </div>

          <form className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white/30"
              />
              <input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white/30"
              />
              <textarea
                placeholder="Your message"
                rows={6}
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white/30"
              />
              <button
                type="button"
                className="rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Personal timeline
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Foundation</p>
              <p className="mt-2 font-serif text-2xl text-white">
                Academic discipline
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                High-performance training through gifted education and
                Olympiad-based learning.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Expansion</p>
              <p className="mt-2 font-serif text-2xl text-white">
                Interdisciplinary curiosity
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                A widening focus toward finance, philosophy, technology, and
                institutional thinking.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Direction</p>
              <p className="mt-2 font-serif text-2xl text-white">
                Future global leadership
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                A long-term ambition to contribute across business, ideas, and
                innovation with clarity and responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>


      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Tri Pham. Built with clarity and intention.</p>
          <p>Designed for future expansion into CMS, projects, and long-form writing.</p>
        </div>
      </footer>
    </main>
  );
}