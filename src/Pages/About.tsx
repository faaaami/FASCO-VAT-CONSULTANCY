const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 border border-blue-100 rounded-full">
            About Us
          </span>

          {/* 🔥 CREATIVE HEADING */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            More Than Tax Consultancy —
            <span className="text-blue-800"> We’re Your Compliance Partner</span>
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-8">
            A UAE-based VAT & Corporate Tax consultancy with 5+ years of experience,
            trusted by 150+ businesses to keep their finances clear, compliant, and stress-free.
          </p>

        </div>

        {/* STORY STYLE CONTENT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* LEFT STORY CARD */}
          <div className="bg-white border border-blue-100 rounded-3xl p-10 shadow-sm">

            <h3 className="text-2xl font-bold text-blue-900">
              Built on real business needs
            </h3>

            <p className="mt-5 text-slate-700 leading-8">
              We started with a simple idea — most businesses struggle not because of taxes,
              but because of confusion around them. That’s where we come in.
            </p>

            <p className="mt-5 text-slate-700 leading-8">
              Over the years, we’ve worked closely with startups, SMEs, and growing companies
              across the UAE, helping them handle VAT and corporate tax with clarity and confidence.
            </p>

          </div>

          {/* RIGHT HIGHLIGHT CARDS (NO BULLETS STYLE) */}
          <div className="space-y-6">

            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
              <h4 className="text-xl font-semibold text-blue-900">
                5+ Years Experience
              </h4>
              <p className="mt-3 text-slate-700 leading-7">
                Deep understanding of UAE VAT and Corporate Tax regulations built through real client work.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
              <h4 className="text-xl font-semibold text-blue-900">
                150+ Businesses Supported
              </h4>
              <p className="mt-3 text-slate-700 leading-7">
                From small startups to growing companies, we’ve helped businesses stay compliant and organized.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
              <h4 className="text-xl font-semibold text-blue-900">
                Simple & Clear Approach
              </h4>
              <p className="mt-3 text-slate-700 leading-7">
                No complexity, no confusion — just straightforward tax support that actually helps businesses.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;