import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-royal-950"
    >
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="label text-royal-200">
              Nigeria Association of Computing Students
            </p>
            <p className="label mt-2 text-royal-300">
              Nile University of Nigeria&nbsp;— Abuja
            </p>

            <h1 className="mt-9 text-[2.75rem] leading-[1.06] text-white sm:text-6xl lg:text-[4.1rem]">
              The computing community
              <span className="block italic text-royal-200">
                of Nile University.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-[1.15rem] leading-[1.7] text-royal-100/85">
              Six departments, one chapter. We run the bootcamps, the tutorials
              before hard exams, the hackathon worth clearing your calendar for
              — and the executive council that answers its messages.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#community"
                className="ui inline-flex items-center bg-white px-7 py-3.5 font-medium text-royal-950 transition-colors duration-200 hover:bg-royal-100"
              >
                Join the community
              </a>
              <a
                href="#events"
                className="ui border-b border-royal-400/50 pb-1 text-royal-100 transition-colors duration-200 hover:border-royal-100 hover:text-white"
              >
                See what we run
              </a>
            </div>
          </div>

          {/* The chapter's own seal, captioned as the artefact it is rather
              than used as abstract decoration. */}
          <figure className="relative lg:col-span-5 lg:flex lg:flex-col lg:items-center lg:pl-16">
            <div className="hidden lg:absolute lg:inset-y-1 lg:left-0 lg:block lg:w-px lg:bg-white/12" />
            <Image
              src="/nacos-seal.png"
              alt=""
              width={512}
              height={512}
              priority
              className="w-40 max-w-full sm:w-48 lg:w-60"
            />
            <figcaption className="label mt-6 max-w-[15rem] leading-[1.9] text-royal-300 lg:text-center">
              National seal of the Nigeria Association of Computing Students
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
