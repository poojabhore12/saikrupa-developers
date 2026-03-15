import ceoImage from "../assets/ceo.jpg";
import { Building2, ShieldCheck, Clock } from "lucide-react";

export default function About() {
  return (
    <section className="pt-24 pb-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          About Saikrupa Developers
        </h1>

        {/* Company + CEO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <img
            src={ceoImage}
            alt="Sudam Pandurang Bhore"
            className="rounded-xl shadow-lg"
          />

          <div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Saikrupa Developers is a well-established real estate development
              company based in Pune, Maharashtra. The company is dedicated to
              delivering high-quality building projects with a focus on
              transparency, trust, and strong project execution.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              With a commitment to excellence, Saikrupa Developers focuses on
              creating modern, durable, and well-designed structures that
              provide long-term value to clients while contributing to the
              development of Pune's growing urban landscape.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The company is led by <strong>Sudam Pandurang Bhore</strong>,
              a respected developer with over
              <strong> 10 years of experience</strong> in the real estate
              industry. His expertise and leadership ensure that every project
              is delivered with quality and professionalism.
            </p>

          </div>

        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <Building2 className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">
              Quality Construction
            </h3>
            <p className="text-gray-600 text-sm">
              We focus on delivering durable and well-designed buildings with
              high construction standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <ShieldCheck className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">
              Trusted Development
            </h3>
            <p className="text-gray-600 text-sm">
              Transparency, reliability, and trust are the core values guiding
              every project we undertake.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <Clock className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="text-xl font-semibold mb-2">
              10+ Years Experience
            </h3>
            <p className="text-gray-600 text-sm">
              Extensive experience in real estate development and project
              execution across Pune.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}