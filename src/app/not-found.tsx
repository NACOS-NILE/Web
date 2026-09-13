import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="not-found">
        <Image src="/logo.svg" alt="" width={72} height={35} style={{ height: "auto" }} />
        <p className="eyebrow">404</p>
        <h1>This page didn&rsquo;t make it into the codebase.</h1>
        <p>
          Whatever you were looking for isn&rsquo;t here. Head back and try one of
          the sections instead.
        </p>
        <Link className="button" href="/">
          Back to home <span aria-hidden="true">↗</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
