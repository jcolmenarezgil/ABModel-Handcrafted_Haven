import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-lg border p-5 text-sm text-slate-600">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Handcrafted Haven</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/policies" className="hover:underline">
            Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
