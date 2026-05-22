const Footer = () => {
  return (
    <footer className="relative bg-[#f8fbff] border-t border-blue-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-bold text-blue-900 tracking-wide">
              FASCO
            </h2>

            <p className="mt-5 text-slate-700 leading-8 max-w-sm">
              Helping businesses across the UAE stay compliant with
              VAT, corporate tax, and financial regulations through
              reliable and professional consultancy support.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold text-slate-900">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-700">

              <a
                href="#home"
                className="hover:text-blue-900 transition duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-blue-900 transition duration-300"
              >
                About
              </a>

              <a
                href="#services"
                className="hover:text-blue-900 transition duration-300"
              >
                Services
              </a>

              <a
                href="#testimonials"
                className="hover:text-blue-900 transition duration-300"
              >
                Testimonials
              </a>

              <a
                href="#contact"
                className="hover:text-blue-900 transition duration-300"
              >
                Contact
              </a>

            </div>

          </div>

          {/* CTA */}
          <div>

            <h3 className="text-xl font-semibold text-slate-900">
              Need Expert Assistance?
            </h3>

            <p className="mt-5 text-slate-700 leading-8">
              Connect with our team for VAT registration,
              corporate tax consultancy, and financial compliance support.
            </p>

            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8 inline-flex items-center gap-3
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
                <path d="M19.11 17.21c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.7.3 1.25.47 1.67.6.7.22 1.35.2 1.85.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.03 3C8.85 3 3 8.82 3 16c0 2.53.73 4.98 2.1 7.08L3 29l6.1-2.03A12.94 12.94 0 0 0 16.03 29C23.2 29 29 23.18 29 16S23.2 3 16.03 3z" />
              </svg>

              Chat On WhatsApp

            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-600 text-sm text-center md:text-left">
            © 2026 FASCO. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Designed for modern UAE businesses.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;