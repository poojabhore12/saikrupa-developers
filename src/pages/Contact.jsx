import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-24 pb-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Contact Saikrupa Developers
        </h1>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-500" />
                <p>
                  Jai Ganesh Samrajya, Spine Road<br />
                  Pune, Maharashtra
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500" />
                <p>+91 9822329994</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500" />
                <p>sudambhore@gmail.com</p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-16">

          <h2 className="text-2xl font-semibold text-center mb-6">
            Our Location
          </h2>

          <iframe
            title="Saikrupa Developers Location"
            src="https://maps.google.com/maps?q=Jai%20Ganesh%20Samrajya%20Spine%20Road%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-96 rounded-xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}