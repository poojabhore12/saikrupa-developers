import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
// import client3 from "../assets/clients/client3.png";
// import client4 from "../assets/clients/client4.png";

export default function ClientsSection() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Trusted By Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          <img src={client1} alt="Client 1" className="mx-auto h-16 opacity-70 hover:opacity-100"/>
          <img src={client2} alt="Client 2" className="mx-auto h-16 opacity-70 hover:opacity-100"/>
          {/* 
          <img src={client3} alt="Client 3" className="mx-auto h-16 opacity-70 hover:opacity-100"/>
          <img src={client4} alt="Client 4" className="mx-auto h-16 opacity-70 hover:opacity-100"/> */}

        </div>

      </div>

    </section>
  );
}