import Link from "next/link";

const navItems = [
  { label: "Browse", href: "/browse" },
  { label: "Categories", href: "/categories" },
  { label: "Sellers", href: "/sellers" },
];

export default function SidebarNav() {
  return (
    <aside className="hidden lg:block">
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-semibold text-slate-700">Menu</p>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border px-3 py-2 text-sm hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
