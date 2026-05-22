const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden flex items-center"
    >
      {/* Background Effects */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[280px] h-[280px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20 relative z-10">

        <div className="flex flex-col lg:flex-row items-stretch gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">

            {/* Badge */}
            <span className="inline-block border   px-5 py-2 rounded-full text-sm text-blue-900 shadow-sm animate-fade-up">
              Trusted UAE VAT & Corporate Tax Consultants
            </span>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 animate-fade-up delay-100">
              Simplifying{" "}
              <span className="text-blue-800">Corporate Tax</span> & VAT Compliance
              For UAE Businesses
            </h1>

            {/* IMAGE — Mobile */}
            <div className="mt-10 lg:hidden flex justify-center animate-fade-up delay-200">
              <div className="relative">

                <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                  <div className="w-[320px] h-[320px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>
                </div>

                <img
                  src="src/assets/arabik.jpeg"
                  alt="Professional Consultant"
                  className="relative z-10 w-[280px] sm:w-[320px] h-[420px] object-cover object-top rounded-[32px] shadow-2xl animate-float"
                />
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-slate-800/80 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
              Fast, reliable, and professional consultancy services helping
              businesses across the UAE stay financially compliant with confidence.
            </p>

            {/* Pricing */}
            <div className="mt-8 animate-fade-up delay-300">
              <span className="inline-block text-blue-900 border border-blue-200 bg-blue-50 px-5 py-2 rounded-full text-sm font-medium shadow-sm">
                VAT & Tax Consultancy Packages Starting From AED 149
              </span>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left animate-fade-up delay-400">

              <div>
                <h2 className="text-3xl font-bold text-blue-800">150+</h2>
                <p className="text-slate-600 mt-1">Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-800">10+</h2>
                <p className="text-slate-600 mt-1">Years</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-800">24H</h2>
                <p className="text-slate-600 mt-1">Support</p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-12 animate-fade-up delay-500">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:bg-blue-900 hover:-translate-y-1 transition duration-300"
              >
                Get Free Consultation
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE — Desktop */}
          <div className="flex-1 hidden lg:flex justify-end items-center animate-fade-up delay-200">

            <div className="relative flex items-center">

              <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                <div className="w-[340px] h-[340px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>
              </div>

              <img
                src="src/assets/arabik.jpeg"
                alt="Professional Consultant"
                className="
                  relative z-10
                  w-[380px]
                  h-[480px]
                  object-cover
                  object-top
                  rounded-[32px]
                  shadow-2xl
                  animate-float
                "
              />

            </div>

          </div>

        </div>

      </div>

      {/* ✅ ANIMATION STYLES */}
      <style>{`
        .animate-fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Home;