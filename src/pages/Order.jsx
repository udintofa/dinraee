import { FaGift, FaRegEdit, FaWhatsapp, FaTruck } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Order() {
  const steps = [
    {
      id: 1,
      icon: <FaGift />,
      title: "Pilih Bouquet",
      desc: "Pilih bouquet favoritmu melalui halaman katalog yang tersedia di website.",
    },
    {
      id: 2,
      icon: <FaRegEdit />,
      title: "Isi Data Pemesan",
      desc: "Siapkan nama, alamat pengiriman, dan detail penerima bouquet.",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      title: "Hubungi Admin",
      desc: "Pesanan akan diteruskan melalui WhatsApp admin untuk konfirmasi order.",
    },
    {
      id: 4,
      icon: <FaTruck />,
      title: "Pengiriman",
      desc: "Bouquet akan diproses dan dikirim sesuai alamat tujuan.",
    },
  ];

  return (
    <section className="min-h-screen bg-[var(--primary-50)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--primary-500)] transition mb-10"
        >
          <HiOutlineArrowLeft />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-500)] text-sm font-medium">
            Simple Ordering Process
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            How To Order
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Kami membuat proses pemesanan bouquet menjadi mudah, cepat, dan
            nyaman melalui WhatsApp admin.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[var(--primary-100)] flex items-center justify-center text-[var(--primary-500)] text-3xl">
                  {step.icon}
                </div>

                {/* Number */}
                <div className="w-10 h-10 rounded-full bg-[var(--primary-500)] text-white font-semibold flex items-center justify-center">
                  {step.id}
                </div>
              </div>

              {/* Text */}
              <h2 className="text-2xl font-bold text-gray-800 mt-8">
                {step.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-white rounded-[2rem] p-10 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800">Ready To Order?</h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Temukan bouquet favoritmu dan hubungi admin untuk melakukan
            pemesanan dengan mudah 🌸
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/katalog"
              className="px-8 py-4 rounded-full bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white font-medium transition duration-300"
            >
              Lihat Katalog
            </Link>

            <a
              href="https://wa.me/6285719944792"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[var(--primary-500)] text-[var(--primary-500)] hover:bg-[var(--primary-100)] font-medium transition duration-300"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
