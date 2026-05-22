const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#f8fbff] overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl">

          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-900 bg-white border border-blue-100 rounded-full shadow-sm">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2] tracking-tight">
            Trusted By Businesses
            <span className="text-blue-800"> Across The UAE</span>
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-8">
            We’ve helped businesses simplify VAT and tax compliance with
            reliable support, clear communication, and professional guidance.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* TESTIMONIAL */}
          <div className="bg-white border border-blue-100 rounded-[30px] p-8 shadow-sm hover:shadow-md transition duration-300">

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-xl">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 text-slate-700 leading-8">
              “Their VAT support made the entire process simple and stress-free.
              Everything was handled professionally and on time.”
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900">
                Ahmed K.
              </h4>

              <p className="text-slate-500">
                Business Owner
              </p>
            </div>

          </div>

          {/* TESTIMONIAL */}
          <div className="bg-white border border-blue-100 rounded-[30px] p-8 shadow-sm hover:shadow-md transition duration-300">

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-xl">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 text-slate-700 leading-8">
              “Very professional team with clear communication throughout the process.
              Highly recommended for UAE VAT consultancy.”
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900">
                Sharaf M.
              </h4>

              <p className="text-slate-500">
                Startup Founder
              </p>
            </div>

          </div>

          {/* TESTIMONIAL */}
          <div className="bg-blue-900 rounded-[30px] p-8 text-white shadow-sm">

            {/* Stars */}
            <div className="flex gap-1 text-yellow-300 text-xl">
              ★ ★ ★ ★ ★
            </div>

            <p className="mt-6 leading-8 text-blue-100">
              “Their guidance helped us stay compliant while focusing on growing our business.
              Reliable, responsive, and easy to work with.”
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold">
                Mohammed Rayees.
              </h4>

              <p className="text-blue-200">
                Managing Director
              </p>
            </div>

          </div>

        </div>

     {/* CTA */}
<div className="mt-20 flex flex-col items-center text-center">

  {/* Text */}
  <div className="max-w-2xl">

    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
      We’ve Helped Business Owners Across The UAE 
      <span className="text-blue-800"> Let’s See How We Can Help Your Brand</span>
    </h3>

    <p className="mt-5 text-lg text-slate-700 leading-8">
      Whether you're starting a new business or managing an established company,
      we’re here to simplify your VAT and tax process with professional guidance.
    </p>

  </div>

  {/* WhatsApp CTA */}
  <a
    href="https://wa.me/971501234567"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-10
      inline-flex items-center gap-3
      bg-green-500 text-white
      px-8 py-4 rounded-2xl
      font-semibold text-lg
      shadow-lg
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
      className="w-6 h-6"
    >
      <path d="M19.11 17.21c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.7.3 1.25.47 1.67.6.7.22 1.35.2 1.85.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.03 3C8.85 3 3 8.82 3 16c0 2.53.73 4.98 2.1 7.08L3 29l6.1-2.03A12.94 12.94 0 0 0 16.03 29C23.2 29 29 23.18 29 16S23.2 3 16.03 3zm0 23.7c-2.15 0-4.25-.58-6.08-1.68l-.43-.25-3.62 1.2 1.18-3.53-.28-.45A10.67 10.67 0 0 1 5.36 16c0-5.88 4.79-10.67 10.67-10.67 2.85 0 5.53 1.1 7.54 3.12A10.6 10.6 0 0 1 26.7 16c0 5.88-4.79 10.7-10.67 10.7z" />
    </svg>

    Let’s Talk On WhatsApp

  </a>

</div>

      </div>
    </section>
  );
};

export default Testimonials;