import { FaHeart, FaTruck, FaGift, FaSeedling } from "react-icons/fa";
import ButtomLine from "./ButtomLine";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaSeedling />,
      title: "Fresh, Artificial, or custom bouquet",
      desc: "Menerima setiap pilihan bunga yang jadi pilihanmu",
    },
    {
      icon: <FaHeart />,
      title: "Made With Love",
      desc: "Setiap bouquet dibuat dengan penuh cinta",
    },
    {
      icon: <FaTruck />,
      title: "Easy to Order or Delivery",
      desc: "Penerimaan pesanan yang mudah dan pengiriman yang aman sampai tujuan.",
    },
    {
      icon: <FaGift />,
      title: "Perfect Gift",
      desc: "Cocok untuk ulang tahun, wisuda, dan momen spesial lainnya",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 overflow-hidden bg-white">
      {/* Heading */}
      <div className="px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose Us
        </h1>
        <div className="py-4">
          <ButtomLine />
        </div>

        <p className="text-gray-600 mt-3">
          Kami membuatkan buket yang indah untuk momen spesial anda.
        </p>
      </div>

      {/* Infinite Scroll */}
      <div className="relative">
        <div className="flex gap-6 w-max animate-scroll">
          {[...features, ...features].map((item, index) => (
            <div
              key={index}
              className="w-[280px] bg-[#fbf1f2] rounded-3xl p-8 flex-shrink-0 shadow-md hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#f28c56] text-2xl shadow-sm">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
