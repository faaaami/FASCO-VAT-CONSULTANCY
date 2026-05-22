const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl">

          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 border border-blue-100 rounded-full">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2] tracking-tight">
            Professional Tax & VAT Solutions
            <span className="text-blue-800"> For UAE Businesses</span>
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-8">
            We help businesses across the UAE manage VAT, corporate tax,
            and financial compliance with reliable and professional support.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* SERVICE CARD */}
          <div className="group bg-[#f8fbff] border border-blue-100 rounded-[30px] p-8 hover:shadow-md transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl font-bold">
              01
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              VAT Registration
            </h3>

            <p className="mt-4 text-slate-700 leading-8">
              Smooth and accurate VAT registration support for businesses operating in the UAE.
            </p>

          </div>

          {/* SERVICE CARD */}
          <div className="group bg-[#f8fbff] border border-blue-100 rounded-[30px] p-8 hover:shadow-md transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl font-bold">
              02
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              VAT Filing & Returns
            </h3>

            <p className="mt-4 text-slate-700 leading-8">
              Timely VAT return preparation and filing to help businesses avoid penalties.
            </p>

          </div>

          {/* SERVICE CARD */}
          <div className="group bg-[#f8fbff] border border-blue-100 rounded-[30px] p-8 hover:shadow-md transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl font-bold">
              03
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Corporate Tax Consultancy
            </h3>

            <p className="mt-4 text-slate-700 leading-8">
              Professional guidance for understanding and managing UAE corporate tax requirements.
            </p>

          </div>

          {/* SERVICE CARD */}
          <div className="group bg-[#f8fbff] border border-blue-100 rounded-[30px] p-8 hover:shadow-md transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl font-bold">
              04
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Bookkeeping Services
            </h3>

            <p className="mt-4 text-slate-700 leading-8">
              Organized financial records and bookkeeping support for better financial clarity.
            </p>

          </div>

          {/* SERVICE CARD */}
          <div className="group bg-[#f8fbff] border border-blue-100 rounded-[30px] p-8 hover:shadow-md transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl font-bold">
              05
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Tax Compliance Support
            </h3>

            <p className="mt-4 text-slate-700 leading-8">
              Helping businesses stay compliant with UAE tax regulations and reporting standards.
            </p>

          </div>

          {/* SERVICE CARD */}
          <div className="group bg-blue-900 rounded-[30px] p-8 text-white flex flex-col justify-between">

            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm">
                Need Professional Guidance?
              </span>

              <h3 className="mt-8 text-3xl font-bold leading-tight">
                Let’s simplify your VAT & tax process
              </h3>

              <p className="mt-5 text-blue-100 leading-8">
                Get professional assistance tailored for your business needs.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-green-600   hover:-translate-y-1
      transition duration-300"
              >
                Chat On WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;