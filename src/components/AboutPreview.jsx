import { Link } from "react-router-dom";
import { Building2, ShieldCheck, Clock } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Saikrupa Developers
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Saikrupa Developers</strong> was founded in <strong>2011</strong> 
            with a vision to deliver high-quality construction and reliable real 
            estate development in Pune.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            With more than a decade of experience, the company focuses on 
            transparency, quality construction, and strong project execution 
            to create long-lasting value for clients.
          </p>

          <Link
            to="/about"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Learn More
          </Link>

        </div>

        {/* Right Highlights */}
        <div className="grid grid-cols-1 gap-6">

          <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4">
            <Building2 className="text-yellow-500" size={36} />
            <div>
              <h3 className="font-semibold mb-1">Quality Construction</h3>
              <p className="text-gray-600 text-sm">
                Durable and modern structures built with high construction standards.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4">
            <ShieldCheck className="text-yellow-500" size={36} />
            <div>
              <h3 className="font-semibold mb-1">Trusted Developer</h3>
              <p className="text-gray-600 text-sm">
                Known for transparency, reliability, and professional project delivery.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4">
            <Clock className="text-yellow-500" size={36} />
            <div>
              <h3 className="font-semibold mb-1">10+ Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Extensive experience in real estate development and construction.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}