import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 md:px-16 bg-background border-t border-white/10">
      {/* max-w ile geniş ekranlarda çok dağılmasını engelliyoruz ama yayılmasını sağlıyoruz */}
      <div className="w-fullmx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Sol Blok: Geniş yer kaplasın */}
        <div className="flex flex-col gap-6 md:w-1/3">
            <h3 className="font-serif text-xl md:text-3xl uppercase">TRÜMUNG —</h3>
            <div className="flex flex-col gap-1 font-serif text-sm uppercase">
                <p>shop rare limited edition</p>
                <p>pieces in our la & nyc locations</p>
            </div>
            <p className="text-xs font-sans font-light opacity-60 max-w-sm">
                Placeholder text helps maintain the structure and appearance of the layout.
            </p>
        </div>

        {/* Orta Blok: Newsletter */}
        <div className="flex flex-col gap-4 md:w-1/4 text-xs md:text-sm">
          <span className="font-light text-sm uppercase tracking-widest">Email</span>
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="bg-transparent border-b border-[--foreground] py-2 outline-none placeholder:text-[--foreground]/40 focus:border-[--foreground] transition-colors"
          />
          <Link href="/newsletter" className="text-xs uppercase tracking-widest  hover:opacity-50">
            Get Inclusive Deals
          </Link>
        </div>

        {/* Sağ Blok: Linkler */}
        <div className="flex flex-col gap-4 font-light uppercase tracking-widest">
          <Link href="/shipping" className="hover:opacity-50 text-xs md:text-sm">Shipping & Returns</Link>
          <Link href="/contact" className="hover:opacity-50 text-xs md:text-sm">Contact</Link>
          <Link href="/privacy" className="hover:opacity-50 text-xs md:text-sm">Privacy Policy</Link>
        </div>

      </div>
    </footer>
  );
}