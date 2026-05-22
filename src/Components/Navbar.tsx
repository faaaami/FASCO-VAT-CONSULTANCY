import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ closes menu after clicking any link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            FASCO
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-blue-900 transition duration-300">
            Home
          </a>

          <a href="#about" className="hover:text-blue-900 transition duration-300">
            About
          </a>

          <a href="#services" className="hover:text-blue-900 transition duration-300">
            Services
          </a>

          <a href="#testimonials" className="hover:text-blue-900 transition duration-300">
            Testimonials
          </a>

          <a href="#contact" className="hover:text-blue-900 transition duration-300">
            Contact
          </a>

        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-900"
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-white px-6 pb-6 shadow-md flex flex-col gap-5 text-gray-700 font-medium">

          <a href="#home" onClick={handleNavClick} className="hover:text-blue-900 transition">
            Home
          </a>

          <a href="#about" onClick={handleNavClick} className="hover:text-blue-900 transition">
            About
          </a>

          <a href="#services" onClick={handleNavClick} className="hover:text-blue-900 transition">
            Services
          </a>

          <a href="#testimonials" onClick={handleNavClick} className="hover:text-blue-900 transition">
            Testimonials
          </a>

          <a href="#contact" onClick={handleNavClick} className="hover:text-blue-900 transition">
            Contact
          </a>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="bg-blue-900 text-white px-5 py-3 rounded-lg text-center hover:bg-blue-800 transition duration-300"
          >
            Book Consultation
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;