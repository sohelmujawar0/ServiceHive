import Services from "../Services";

const ServicesSection = () => {
  const service = Services.map((srv, i) => (
    <article
      key={i}
      className="group relative w-full max-w-[360px] overflow-hidden rounded-3xl border border-white/30 bg-white/85 shadow-[0_12px_50px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(8,47,73,0.25)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-sky-300/60 via-emerald-200/40 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Popular pick
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            24/7 support
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 text-white shadow-lg shadow-sky-200/70">
            <img src={srv.icon} alt={`${srv.serviceName} icon`} className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">{srv.serviceName}</h3>
            <p className="text-sm font-medium text-slate-600">Trusted experts on demand</p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-slate-700">{srv.description}</p>

        <div className="flex items-center justify-between gap-3 pt-2">
          <button className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
            Book now
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
            Wishlist
          </button>
        </div>
      </div>
    </article>
  ));

  return (
    <section className="relative mx-auto mt-16 mb-14 max-w-6xl px-4 sm:px-6">
      <div
        className="absolute inset-x-10 top-0 h-56 rounded-full bg-gradient-to-r from-sky-200/40 via-emerald-200/50 to-sky-200/40 blur-3xl"
        aria-hidden
      />

      <header className="relative mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Services
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Book home fixes in a tap
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Curated pros for every room, every repair, and every quick upgrade.
        </p>
      </header>

      <div className="relative grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {service}
      </div>
    </section>
  );
};

export default ServicesSection;
