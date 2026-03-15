import awardImage from "../assets/award.png";


export default function AwardsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={awardImage}
          alt="Global Excellence Award"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>

          <p className="text-gray-700 mb-4">
            Saikrupa Developers was recognized at the Global Excellence Awards
            organized by Brand Empower Pvt. Ltd. for outstanding performance and
            excellence in the real estate sector.
          </p>

          <p className="text-gray-700">
            The award ceremony was held at the Grand Hyatt Hotel, Mumbai on 12th
            October 2019 in the presence of chief guest Madhuri Dixit Nene.
          </p>
        </div>
      </div>
    </section>
  );
}
