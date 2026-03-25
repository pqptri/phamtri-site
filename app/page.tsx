export default function Home() {
  const interests = [
    "Technology",
    "Humanities",
    "Research",
    "Leadership",
    "Public Impact",
  ];

  const cards = [
    {
      label: "Focus",
      title: "Interdisciplinary Learning",
    },
    {
      label: "Background",
      title: "Olympiad · Research · Leadership",
    },
    {
      label: "Direction",
      title: "Academic & Professional Growth",
    },
  ];

  const sections = [
    {
      title: "Academic Achievements",
      text: "Olympiad, academic distinctions, scholarship profile, and intellectual development.",
    },
    {
      title: "Projects & Leadership",
      text: "Student initiatives, interdisciplinary projects, coordination, and public engagement.",
    },
    {
      title: "Research Interests",
      text: "Technology, society, ethics, education, and long-term interdisciplinary exploration.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8f8] text-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f7f4] via-white to-[#f7f8f8]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0e9b8c]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#e5465f]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-5 inline-block rounded-full border border-[#107267]/20 bg-white/75 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#107267] backdrop-blur">
                Personal Academic Website
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Xin chào,
                <span className="block text-[#107267]">tôi là Trí.</span>
              </h1>

              <div className="mt-6 h-1 w-32 rounded-full bg-[linear-gradient(90deg,#4adac0,#000000)]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70 md:text-xl">
                Một học sinh định hướng liên ngành, quan tâm đến học thuật,
                leadership, nghiên cứu, và cách kết nối công nghệ với khoa học
                xã hội để tạo ra tác động thực sự.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#107267]"
                >
                  Khám phá hồ sơ
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-[#0e9b8c]/30 bg-white px-6 py-3 text-sm font-semibold text-[#107267] transition hover:-translate-y-0.5 hover:border-[#0e9b8c] hover:bg-[#0e9b8c]/5"
                >
                  Liên hệ
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-[#107267]/15 bg-white/85 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[#107267]">
                      {card.label}
                    </p>
                    <p className="mt-2 text-base font-semibold">{card.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#107267]/15 bg-white/90 p-8 shadow-2xl shadow-[#107267]/10">
                <div className="flex items-center justify-between border-b border-[#107267]/10 pb-5">
                  <div>
                    <p className="text-sm text-[#107267]">Profile</p>
                    <h2 className="mt-1 text-2xl font-bold">Tri Pham</h2>
                  </div>
                  <div className="rounded-full border border-[#107267]/15 px-3 py-1 text-xs font-medium text-[#107267]">
                    Academic Portfolio
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  <div>
                    <p className="text-sm text-[#107267]">Current</p>
                    <p className="mt-1 text-base font-semibold">
                      High School for the Gifted, VNU-HCM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#107267]">Incoming</p>
                    <p className="mt-1 text-base font-semibold">
                      Incoming University Student in Commerce
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#107267]">Interests</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {interests.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#0e9b8c]/10 px-3 py-1 text-sm text-[#107267]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-[#107267]">Personal Statement</p>
                    <p className="mt-2 leading-7 text-black/70">
                      Tôi muốn xây dựng một hành trình học tập không chỉ mạnh về
                      thành tích, mà còn có chiều sâu tư duy, tinh thần liên
                      ngành, và khả năng đóng góp cho cộng đồng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#107267]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Một hồ sơ học thuật được xây dựng từ chiều sâu và định hướng dài hạn
            </h2>
            <div className="mt-6 h-1 w-24 rounded-full bg-[#e5465f]" />
          </div>
          <div>
            <p className="text-lg leading-8 text-black/70">
              Website này là nơi tổng hợp hành trình học tập, các thành tích nổi
              bật, dự án, hoạt động lãnh đạo, và những mối quan tâm học thuật của
              tôi. Tôi đặc biệt quan tâm đến việc kết nối tư duy phân tích, khoa
              học xã hội, và công nghệ trong một hệ quy chiếu thực tiễn.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-[#107267]/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#4adac0,#000000)]" />
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-4 leading-7 text-black/70">{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[#107267]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Let’s connect</h3>
              <p className="mt-2 text-black/70">
                Kết nối để trao đổi về học thuật, dự án, hoặc các cơ hội hợp tác.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-2xl border border-[#0e9b8c]/30 px-5 py-3 text-sm font-medium text-[#107267] transition hover:bg-[#0e9b8c]/5"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-[#107267]"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}