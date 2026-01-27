export default function Footer() {
  return (
    <footer className="rounded-lg border p-5 text-sm text-slate-600">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Handcrafted Haven</p>
      </div>
    </footer>
  );
}
