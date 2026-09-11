"use client";
import Image from "next/image";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
const links = ["About", "Disciplines", "Programs", "Excos", "Community"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenuAfterNavigation = () => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus({ preventScroll: true }));
  };
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <header className="site-nav"><div className="nav-inner"><a href="#top" className="logo-link" aria-label="NACOS Nile home"><Image src="/logo-optimized.svg" width={80} height={38} alt="NACOS Nile" priority /></a><nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><a className="button button-small desktop-cta" href="#community">Join the network <FiArrowRight aria-hidden="true" /></a><button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}</button></div><div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}><nav aria-label="Mobile navigation">{links.map((link,index) => <a key={link} tabIndex={open ? 0 : -1} href={`#${link.toLowerCase()}`} onClick={closeMenuAfterNavigation}><span>0{index+1}</span>{link}</a>)}<a className="button" tabIndex={open ? 0 : -1} href="#community" onClick={closeMenuAfterNavigation}>Join the network <FiArrowRight aria-hidden="true" /></a></nav></div></header>;
}
