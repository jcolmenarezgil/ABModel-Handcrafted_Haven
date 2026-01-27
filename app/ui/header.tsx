import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-md border bg-slate-50">
            <Image src="/logo.svg" alt="Handcrafted Haven logo" fill />
          </div>

          <div>
            <p className="text-lg font-semibold leading-tight">
              Handcrafted Haven
            </p>
            <p className="text-sm text-slate-600 leading-tight">
              Unique handmade treasures
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/browse" className="hover:underline">
            Browse
          </Link>
          <Link href="/categories" className="hover:underline">
            Categories
          </Link>
          <Link href="/sellers" className="hover:underline">
            Sellers
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-2">
          <Link href="/browse" className="rounded-md border px-3 py-2 text-sm">
            Browse
          </Link>
          <Link
            href="/categories"
            className="rounded-md border px-3 py-2 text-sm"
          >
            Categories
          </Link>
          <Link href="/sellers" className="rounded-md border px-3 py-2 text-sm">
            Sellers
          </Link>
          <Link href="/cart" className="rounded-md border px-3 py-2 text-sm">
            My Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
