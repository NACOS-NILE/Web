"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [["About", "#about"], ["Disciplines", "#disciplines"], ["Initiatives", "#initiatives"], ["Leadership", "#executives"], ["Contact", "#contact"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><Link className="brand" href="#home" aria-label="NACOS Nile home"><Image src="/logo.svg" alt="NACOS Nile" width={105} height={50} priority /><span>NILE CHAPTER<small>EST. 2023</small></span></Link><nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="#community" onClick={() => setOpen(false)}>Join community <span>↗</span></Link></nav><button className={open ? "menu-button menu-open" : "menu-button"} type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button></header>;
}
