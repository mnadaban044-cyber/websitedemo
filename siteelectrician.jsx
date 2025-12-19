import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ElectricianSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="font-sans text-gray-800">
      {/* HEADER */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marcus Electric</h1>
        <nav className="space-x-6">
          <a href="#services">Servicii</a>
          <a href="#portfolio">Portofoliu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Electrician de încredere în Câmpulung
        </h2>
        <p className="text-lg mb-6">
          Instalații, reparații și verificări electrice pentru locuințe și firme.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Cere ofertă
        </button>
      </section>

      {/* SERVICII */}
      <section id="services" className="py-16 px-8 grid md:grid-cols-3 gap-8">
        {["Instalații electrice", "Reparații rapide", "Verificări siguranțe"].map(
          (service) => (
            <div className="bg-white shadow-lg rounded p-6 text-center" key={service}>
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p>Servicii profesionale, adaptate nevoilor tale.</p>
            </div>
          )
        )}
      </section>

      {/* PORTOFOLIU */}
      <section id="portfolio" className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Portofoliu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/work1.jpg" alt="Instalatie" className="rounded shadow" />
          <img src="/images/work2.jpg" alt="Tablou electric" className="rounded shadow" />
          <img src="/images/work3.jpg" alt="Reparație" className="rounded shadow" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-8 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nume"
            className="w-full border p-2 rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Mesaj"
            className="w-full border p-2 rounded"
            rows="4"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Trimite
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white p-6 text-center">
        <p>&copy; 2025 Marcus Electric. Toate drepturile rezervate.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <span className="flex items-center"><Phone className="mr-2"/> 0722 123 456</span>
          <span className="flex items-center"><Mail className="mr-2"/> marcus@electric.ro</span>
          <span className="flex items-center"><MapPin className="mr-2"/> Câmpulung, Argeș</span>
        </div>
      </footer>
    </div>
  );
}
