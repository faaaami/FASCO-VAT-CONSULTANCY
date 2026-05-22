import { useState } from "react";

const Contact = () => {

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // LOADING STATE
  const [loading, setLoading] = useState(false);

  // SUCCESS STATE
  const [submitted, setSubmitted] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);
    setSubmitted(false);

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbxeb5jzyXP6gVY0mUt0VheotKpsIdPuBiVVu-yJe_blIlFvcdVOjKwOT01l45y1EiwI/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // SHOW SUCCESS MESSAGE
      setSubmitted(true);

      // RESET FORM
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-white overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[280px] h-[280px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADING */}
        <div className="text-center">

          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
            Let’s Discuss Your
            <span className="text-blue-800"> Business Requirements</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700 max-w-2xl mx-auto">
            Get expert assistance for VAT registration, corporate tax,
            bookkeeping, and financial compliance services in the UAE.
          </p>

        </div>

        {/* FORM CARD */}
        <div className="mt-20 relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-30 rounded-[40px]"></div>

          <div className="relative bg-[#f8fbff] border border-blue-100 rounded-[36px] p-8 md:p-12 shadow-sm">

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="
                      mt-2 w-full px-5 py-4
                      rounded-2xl border border-blue-100
                      bg-white text-slate-900
                      outline-none
                      focus:border-blue-400
                      focus:ring-4 focus:ring-blue-100
                      transition
                    "
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="
                      mt-2 w-full px-5 py-4
                      rounded-2xl border border-blue-100
                      bg-white text-slate-900
                      outline-none
                      focus:border-blue-400
                      focus:ring-4 focus:ring-blue-100
                      transition
                    "
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="
                    mt-2 w-full px-5 py-4
                    rounded-2xl border border-blue-100
                    bg-white text-slate-900
                    outline-none
                    focus:border-blue-400
                    focus:ring-4 focus:ring-blue-100
                    transition
                  "
                />

              </div>

              {/* SERVICE */}
              <div>

                <label className="text-sm font-medium text-slate-700">
                  Service Needed
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                    mt-2 w-full px-5 py-4
                    rounded-2xl border border-blue-100
                    bg-white text-slate-900
                    outline-none
                    focus:border-blue-400
                    focus:ring-4 focus:ring-blue-100
                    transition
                  "
                >
                  <option value="">
                    Select a service
                  </option>

                  <option>
                    VAT Registration
                  </option>

                  <option>
                    VAT Filing
                  </option>

                  <option>
                    Corporate Tax
                  </option>

                  <option>
                    Bookkeeping
                  </option>

                  <option>
                    Tax Consultancy
                  </option>

                </select>

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-sm font-medium text-slate-700">
                  Your Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business requirements..."
                  required
                  className="
                    mt-2 w-full px-5 py-4
                    rounded-2xl border border-blue-100
                    bg-white text-slate-900
                    outline-none
                    resize-none
                    focus:border-blue-400
                    focus:ring-4 focus:ring-blue-100
                    transition
                  "
                ></textarea>

              </div>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div
                  className="
                    bg-green-50
                    border border-green-200
                    text-green-700
                    px-5 py-4
                    rounded-2xl
                    text-sm
                    font-medium
                  "
                >
                  ✅ Your request has been submitted successfully.
                  Our team will contact you shortly.
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-blue-900 text-white
                  py-4 rounded-2xl
                  font-semibold text-lg
                  shadow-md
                  hover:bg-blue-800
                  hover:-translate-y-1
                  transition duration-300
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "Sending..." : "Request Consultation"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;