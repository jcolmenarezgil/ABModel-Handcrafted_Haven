import Link from "next/link";

export default function SidebarNav() {
  return (
    <aside className="hidden lg:block">
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-semibold text-slate-700">Navigation</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/browse" className="hover:underline">
              Browse Products
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:underline">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/top-rated" className="hover:underline">
              Top Rated
            </Link>
          </li>
          <li>
            <Link href="/new" className="hover:underline">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/sellers" className="hover:underline">
              Sellers
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
