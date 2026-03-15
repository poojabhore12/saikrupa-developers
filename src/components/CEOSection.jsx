import ceoImage from "../assets/ceo.jpg";

export default function CEOSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src={ceoImage}
          alt="Sudam Bhore CEO"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Sudam Pandurang Bhore
          </h2>

          <p className="text-yellow-600 font-semibold mb-4">
            CEO – Saikrupa Developers
          </p>

          <p className="text-gray-700 mb-4">
            With over 10 years of experience in real estate development,
            Sudam Bhore brings expertise and leadership in building
            development across Pune.
          </p>

          <p className="font-semibold">
            Contact: 9822329994
          </p>

        </div>

      </div>
    </section>
  );
}