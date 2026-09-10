import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080f22] text-white/70 text-xs">
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto min-h-[120px] flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 py-6">
        <Link href="#top" className="inline-flex items-center gap-3 text-white">
          <Image src="/logo.svg" alt="NACOS Nile logo" width={50} height={50} className="w-12 h-12 object-contain" />
          <span className="grid leading-none">
            <strong className="font-bold text-sm tracking-wider">NACOS</strong>
            <span className="text-[0.5rem] tracking-widest opacity-70">NILE CHAPTER</span>
          </span>
        </Link>

        <div className="flex flex-wrap gap-5 text-white/70">
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#disciplines" className="hover:text-white">Disciplines</Link>
          <Link href="#programs" className="hover:text-white">Programs</Link>
          <Link href="#excos" className="hover:text-white">Excos</Link>
          <Link href="#community" className="hover:text-white">Community</Link>
        </div>
      </div>

      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto min-h-[72px] flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 py-4">
        <p>© {new Date().getFullYear()} NACOS Nile University Chapter. All rights reserved.</p>
        <p>Built for Nile&apos;s computing community.</p>
      </div>
    </footer>
  );
}