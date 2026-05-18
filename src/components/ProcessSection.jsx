import { FaGift, FaRegEdit, FaWhatsapp } from "react-icons/fa";
import ButtomLine from "./ButtomLine";
import { Link } from "react-router-dom";

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      icon: <FaGift />,
      title: "Choose Bouquet",
      desc: "Pilih bouquet favoritmu dari koleksi kami.",
      button: true,
    },
    {
      id: 2,
      icon: <FaRegEdit />,
      title: "Fill Your Details",
      desc: "Masukkan nama dan alamat pengiriman dengan mudah.",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      title: "Chat via WhatsApp",
      desc: "Pesanan langsung diteruskan ke admin WhatsApp.",
    },
  ];

  return (
    <section className="py-20 bg-[#fbf1f2] overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          How To Order
        </h2>

        <div className="py-4 flex justify-center">
          <ButtomLine />
        </div>

        <p className="text-gray-600 mt-3">
          Order your favorite bouquet in just a few simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
          >
            {/* Line Connector Desktop */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-20 -right-4 w-8 h-[2px] bg-[var(--primary-500)]"></div>
            )}

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-[#fff1eb] mx-auto flex items-center justify-center text-[var(--primary-500)] text-3xl shadow-sm">
              {step.icon}
            </div>

            {/* Number */}
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--primary-500)] text-white text-sm flex items-center justify-center font-semibold">
              {step.id}
            </div>

            {/* Text */}
            <h3 className="mt-8 text-2xl font-bold text-gray-800">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">{step.desc}</p>

            {/* Button */}
            {step.button && (
              <Link
                to="/katalog"
                className="inline-block mt-6 px-6 py-3 bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white rounded-full font-medium transition duration-300"
              >
                Lihat Katalog
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
