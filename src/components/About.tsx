export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#274193]">
              About NACOS Nile
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0d1733] sm:text-5xl lg:text-6xl">
              More than a
              <span className="block text-[#274193]">
                student association.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              NACOS Nile is a community for computing students at Nile
              University of Nigeria. We bring students together to learn,
              collaborate, build, and grow through technology.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-500">
              From technical workshops and academic support to social
              activities and career opportunities, our goal is to create an
              environment where every computing student can thrive.
            </p>
          </div>

        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl bg-[#0d1733] p-7 text-white">
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
              ◇
            </div>

            <h3 className="text-xl font-bold">Our Mission</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              To connect computing students with opportunities to learn,
              collaborate, and develop practical technical skills.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#274193]/10 text-xl text-[#274193]">
              ◎
            </div>

            <h3 className="text-xl font-bold text-[#0d1733]">Our Vision</h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              To build a strong community of innovative students prepared to
              make meaningful contributions to the technology industry.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#274193]/10 text-xl text-[#274193]">
              +
            </div>

            <h3 className="text-xl font-bold text-[#0d1733]">
              Our Community
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              A place where students can meet like-minded people, exchange
              ideas, and grow together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
