import heroImg from '../../assets/hero-illustration.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#EEF4FB] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
      aria-label="Hero section"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.15fr_0.85fr] items-center gap-6 sm:gap-8">
        <div className="z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.18] tracking-tight text-slate-900">
            Find the job<br />
            that <span className="text-blue-600">fits your life</span>
          </h1>
          <p className="mt-3.5 sm:mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            Discover opportunities, build your career, and shape your future.
          </p>
        </div>

        <div className="flex justify-center md:justify-end select-none">
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-200/60 bg-white max-w-[420px]">
            <img
              src={heroImg}
              alt="Job search candidate at desk with search indicators"
              className="w-full h-auto object-cover transition duration-300 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
