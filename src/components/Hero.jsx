import heroImage from "../assets/hero.png";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    const message = `Hello Saikrupa Developers,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

I am interested in your construction / development services.
Please contact me with more information.`;

    const whatsappURL =
      "https://wa.me/919822329994?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    // show success message
    setSuccess(true);

    // reset form
    setForm({
      name: "",
      phone: "",
      email: ""
    });

    // hide popup after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white py-20">

        {/* LEFT TEXT */}
        <div>

          <h1 className="text-5xl font-bold mb-6">
            Saikrupa Developers
          </h1>

          <TypeAnimation
            sequence={[
              "Trusted Real Estate Development in Pune",
              2000,
              "10+ Years of Construction Excellence",
              2000,
              "Building Quality Projects with Trust",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl mb-6 block"
          />

          <p>
            10+ years of experience delivering quality building
            projects with excellence and trust.
          </p>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-xl p-8 shadow-xl text-gray-800">

          <h3 className="text-xl font-semibold mb-4">
            Request a Call
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Submit
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-600 mt-4 font-medium">
              ✔ Opening WhatsApp... Please send the message.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}