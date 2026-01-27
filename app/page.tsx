import Header from "./ui/header";
import SidebarNav from "./ui/sidebar-nav";
import ReviewCard from "./ui/review-card";
import Footer from "./ui/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <SidebarNav />

          <section className="space-y-6">
            <div className="rounded-lg border p-5">
              <h1 className="text-2xl font-bold">Product Name</h1>
              <p className="mt-1 text-sm text-slate-600">
                Short product intro goes here.
              </p>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_200px]">
                <div className="rounded-lg border bg-slate-50 p-4">
                  <div className="mb-3 aspect-[4/3] w-full rounded-md border bg-white" />
                  <p className="text-sm text-slate-700">
                    Product description placeholder.
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="sticky top-6 rounded-lg border p-4">
                    <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm text-white">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <button className="mt-5 w-full rounded-md bg-slate-900 px-4 py-3 text-sm text-white lg:hidden">
                Add to Cart
              </button>
            </div>

            <div className="rounded-lg border p-5">
              <h2 className="text-lg font-semibold">Comments / Reviews</h2>
              <div className="mt-4 space-y-4">
                <ReviewCard
                  name="Jamie"
                  rating="★★★★★"
                  text="Amazing craftsmanship."
                />
                <ReviewCard
                  name="Riley"
                  rating="★★★★☆"
                  text="Beautiful and well made."
                />
              </div>
            </div>

            <Footer />
          </section>
        </div>
      </div>
    </main>
  );
}
