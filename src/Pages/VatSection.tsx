const VatSection = () => {
  return (
    <section
      id="vat"
      className="relative py-28 bg-[#f8fbff] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* TOP HEADING */}
        <div className="max-w-3xl">

          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-900 bg-white border border-blue-100 rounded-full shadow-sm">
            UAE VAT Awareness
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2] tracking-tight">
            VAT Compliance In The UAE
            <span className="text-blue-800"> Is More Important Than Ever</span>
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-8">
            Many businesses struggle with VAT compliance not because they ignore regulations,
            but because the process itself can feel confusing, time-consuming, and stressful.
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* CARD */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-lg font-semibold">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Filing mistakes can lead to penalties
              </h3>

              <p className="mt-4 text-slate-700 leading-8">
                Incorrect submissions, missed deadlines, and incomplete VAT records
                can create unnecessary financial pressure for businesses.
              </p>

            </div>

            {/* CARD */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-lg font-semibold">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Regulations continue to evolve
              </h3>

              <p className="mt-4 text-slate-700 leading-8">
                Staying updated with UAE VAT requirements can be difficult for
                businesses already focused on growth and operations.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* MAIN BIG CARD */}
            <div className="relative bg-white border border-blue-100 rounded-[36px] p-10 shadow-sm">

              {/* Small Top Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-900">
                VAT Compliance & Financial Clarity
              </div>

              {/* Heading */}
              <h3 className="mt-8 text-3xl font-bold text-slate-900 leading-tight">
                Proper VAT management helps businesses stay financially organized
              </h3>

              {/* Paragraph */}
              <p className="mt-6 text-slate-700 leading-8">
                VAT compliance is not only about avoiding penalties —
                it also helps businesses maintain accurate financial records,
                improve reporting, and operate with greater confidence.
              </p>

              <p className="mt-6 text-slate-700 leading-8">
                With proper guidance and organized processes,
                businesses can focus more on growth while remaining compliant
                with UAE tax regulations.
              </p>

              {/* Bottom Highlight */}
              <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6">

                <p className="text-blue-900 font-medium leading-7">
                  Strong VAT compliance creates stronger business stability.
                </p>

              </div>

            </div>

            {/* Floating Blur */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

          </div>

        </div>

      </div>
      {/* CTA BUTTON */}
<div className="mt-14 flex justify-center">
  <a
    href="https://wa.me/971501234567"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-3
      bg-green-500 text-white
      px-7 py-4 rounded-2xl
      font-medium
      shadow-md
      hover:bg-green-600
      hover:-translate-y-1
      transition duration-300
    "
  >
    {/* WhatsApp Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M19.11 17.21c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.7.3 1.25.47 1.67.6.7.22 1.35.2 1.85.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.03 3C8.85 3 3 8.82 3 16c0 2.53.73 4.98 2.1 7.08L3 29l6.1-2.03A12.94 12.94 0 0 0 16.03 29C23.2 29 29 23.18 29 16S23.2 3 16.03 3zm0 23.7c-2.15 0-4.25-.58-6.08-1.68l-.43-.25-3.62 1.2 1.18-3.53-.28-.45A10.67 10.67 0 0 1 5.36 16c0-5.88 4.79-10.67 10.67-10.67 2.85 0 5.53 1.1 7.54 3.12A10.6 10.6 0 0 1 26.7 16c0 5.88-4.79 10.7-10.67 10.7z" />
    </svg>

    Contact Us on WhatsApp
  </a>
</div>
    </section>
  );
};

export default VatSection;