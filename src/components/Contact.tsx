import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-20 bg-[#0d1733]" id="contact">
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto p-10 rounded-3xl border border-[rgba(39,65,147,0.13)] bg-gradient-to-r from-[#274193] to-[#0d1733] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-[0.72rem] font-bold tracking-[0.18em] text-white/70 uppercase mb-2">06 / CONTACT</div>
          <h2 className="text-3xl font-bold">Come build the next chapter.</h2>
          <p className="text-white/80 mt-1">Nile University of Nigeria, Abuja, FCT.</p>
        </div>
        <Link
          href="#community"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm text-white bg-[#274193] hover:bg-[#3150ac] border border-white/10 transition-colors shrink-0"
        >
          Get involved <span>→</span>
        </Link>
      </div>
    </section>
  );
}