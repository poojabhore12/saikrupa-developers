export default function MapSection() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 text-center mb-10">

        <h2 className="text-3xl font-bold">
          Our Location
        </h2>

      </div>

      <div className="max-w-6xl mx-auto px-6">

        <iframe
          title="Saikrupa Developers Location"
          src="https://maps.google.com/maps?q=Jai%20Ganesh%20Samrajya%20Spine%20Road%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-96 rounded-xl shadow-lg"
        />

      </div>

    </section>
  );
}