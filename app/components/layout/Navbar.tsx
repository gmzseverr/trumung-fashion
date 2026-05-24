"use client"; // Etkileşim için zorunlu

import { useState } from "react";
import { Handbag, Search, User, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="relative z-[100] w-full py-6 px-6 md:py-8 md:px-16 flex justify-between items-center border-b-4 border-double border-[--foreground] ">      
      {/* Sol: Hamburger */}
      <div className="flex-1">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Menü */}
        <div className="hidden md:flex gap-8 text-xs font-light uppercase tracking-widest">
          <Link href="/shop" className="hover:opacity-50">Shop</Link>
          <Link href="/lookbook" className="hover:opacity-50">Lookbook</Link>
          <Link href="/about" className="hover:opacity-50">About</Link>
        </div>
      </div>

      {/* Logo */}
      <Link href="/" className="text-2xl md:text-3xl font-heading tracking-tighter">
        Trümung
      </Link>

      {/* Sağ: İkonlar */}
      <div className="flex-1 flex justify-end gap-4 md:gap-8">
        <Link href="/search" className="hidden md:block hover:opacity-50"><Search size={20} /></Link>
        <Link href="/account" className="hidden md:block hover:opacity-50"><User size={20} /></Link>
        <Link href="/cart" className="hover:opacity-50"><Handbag size={20} /></Link>
      </div>

      {/* MOBİL MENU (Açılır Panel) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-double border-[--foreground] p-6 flex flex-col items-center gap-3 md:hidden">
          <Link href="/shop" onClick={() => setIsOpen(false)} className="text-sm uppercase">Shop</Link>
          <Link href="/lookbook" onClick={() => setIsOpen(false)} className="text-sm uppercase">Lookbook</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm uppercase">About</Link>
        </div>
      )}
    </nav>
  );
}