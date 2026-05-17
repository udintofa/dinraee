import { Link } from "react-router-dom";
import { FaLeaf, FaHeart, FaTruck, FaRegSmileBeam } from "react-icons/fa";
import ButtomLine from "../components/ButtomLine";

export default function About() {
  const values = [
    {
      id: 1,
      icon: <FaLeaf />,
      title: "Fresh Flowers",
      desc: "Kami menggunakan bunga segar pilihan untuk menjaga kualitas bouquet.",
    },
    {
      id: 2,
      icon: <FaHeart />,
      title: "Made With Love",
      desc: "Setiap bouquet dirangkai dengan detail dan penuh perhatian.",
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "Pengiriman cepat dan aman untuk menjaga bouquet tetap cantik.",
    },
    {
      id: 4,
      icon: <FaRegSmileBeam />,
      title: "Customer Happiness",
      desc: "Kepuasan pelanggan adalah prioritas utama kami.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fff7f8] overflow-hidden">
      {/* HERO */}
      <div className="relative py-28 px-6">
        {/* Background Blur */}
        <div className="absolute top-10 left-10 w-52 h-52 bg-[#f28c56]/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#ffe8df] text-[#f28c56] text-sm font-medium">
              About Dinraee Florist
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-6 leading-tight">
              Flowers That Speak Your Feelings 🌸
            </h1>

            <p className="text-gray-600 mt-8 leading-relaxed text-lg">
              Dinraee Florist hadir untuk membantu setiap orang menyampaikan
              perasaan melalui bouquet yang indah, elegan, dan penuh makna.
            </p>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Kami percaya bahwa bunga bukan hanya hadiah, tetapi cara untuk
              menghadirkan kebahagiaan, cinta, dan momen spesial untuk orang
              tersayang.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/katalog"
                className="px-8 py-4 rounded-full bg-[#f28c56] hover:bg-orange-500 text-white font-medium transition duration-300 text-center"
              >
                View Catalog
              </Link>

              <a
                href="https://wa.me/6285719944792"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-[#f28c56] text-[#f28c56] hover:bg-[#fff1eb] transition duration-300 text-center"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/SunnyPink.webp"
                alt="Flower Bouquet"
                className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-sm text-gray-500">
                Beautiful moments with flowers
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Handmade Bouquet
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>

          <div className="flex justify-center py-4">
            <ButtomLine />
          </div>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Berawal dari kecintaan terhadap seni merangkai bunga, Dinraee
            Florist tumbuh menjadi tempat untuk menghadirkan bouquet yang cantik
            dan penuh makna untuk berbagai momen spesial.
          </p>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Dari wisuda, ulang tahun, anniversary, hingga wedding, kami ingin
            membantu setiap pelanggan memberikan kesan terbaik kepada orang
            tersayang.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>

            <div className="flex justify-center py-4">
              <ButtomLine />
            </div>

            <p className="text-gray-600 mt-3">
              We always prioritize quality and customer happiness.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-[#fff7f8] rounded-[2rem] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#ffe8df] mx-auto flex items-center justify-center text-[#f28c56] text-3xl">
                  {value.icon}
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-gray-800 mt-8">
                  {value.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-12 shadow-xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Ready To Make Someone Smile? 🌸
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Temukan bouquet favoritmu dan buat momen spesial menjadi lebih
            berkesan bersama Dinraee Florist.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              to="/katalog"
              className="px-8 py-4 rounded-full bg-[#f28c56] hover:bg-orange-500 text-white font-medium transition duration-300"
            >
              Explore Catalog
            </Link>

            <a
              href="https://wa.me/6285719944792"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[#f28c56] text-[#f28c56] hover:bg-[#fff1eb] transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
