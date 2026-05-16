import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtomLine from "../components/ButtomLine";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Katalog() {
  const [loading, setLoading] = useState(true);

  const bouquets = [
    {
      id: 1,
      title: "Blueshy",
      category: "Fresh Flower",
      price: 55,
      image: "/images/Blueshy.webp",
    },
    {
      id: 2,
      title: "Squeezy",
      category: "Fresh Flower",
      price: 65,
      image: "/images/Squeezy.webp",
    },
    {
      id: 3,
      title: "Geby",
      category: "Fresh Flower",
      price: 50,
      image: "/images/Geby.webp",
    },
    {
      id: 4,
      title: "Gerbi",
      category: "Fresh Flower",
      price: 45,
      image: "/images/Gerbi.webp",
    },
    {
      id: 5,
      title: "Pinki",
      category: "Fresh Flower",
      price: 70,
      image: "/images/Pinki.webp",
    },
    {
      id: 6,
      title: "Pinkyboe",
      category: "Fresh Flower",
      price: 60,
      image: "/images/Pinkyboe.webp",
    },
    {
      id: 7,
      title: "Redbeach",
      category: "Fresh Flower",
      price: 75,
      image: "/images/Redbeach.webp",
    },
    {
      id: 8,
      title: "SunnyWhite",
      category: "Fresh Flower",
      price: 58,
      image: "/images/SunnyWhite.webp",
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = bouquets.map((bouquet) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = bouquet.image;

          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.log("Ada gambar yang gagal dimuat");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Loading Screen
  if (loading) {
    return (
      <section className="min-h-screen py-30 flex items-center justify-center bg-[#fff7f8]">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-[#f28c56] border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-gray-600">Loading katalog bunga...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-30 bg-[#fff7f8] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Katalog Kami
          </h1>

          <div className="flex justify-center py-4">
            <ButtomLine />
          </div>

          <p className="text-gray-600 mt-3">
            Temukan bouquet favoritmu untuk setiap momen spesial 🌸
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {bouquets.map((bouquet) => (
            <motion.div
              key={bouquet.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              py-30
              className="bg-white rounded-[2rem] shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={bouquet.image}
                  alt={bouquet.title}
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                <span className="absolute top-4 left-4 bg-[#f28c56] text-white text-sm px-4 py-1 rounded-full shadow">
                  {bouquet.category}
                </span>

                <span className="absolute top-4 right-4 bg-white text-[#f28c56] font-semibold px-4 py-1 rounded-full shadow">
                  Rp{bouquet.price}K
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Dinraee Florist</p>

                <h3 className="font-semibold text-xl md:text-2xl text-gray-800">
                  {bouquet.title}
                </h3>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://wa.me/6285719944792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#f28c56] hover:bg-orange-500 text-white py-3 rounded-full font-medium text-center transition duration-300"
                  >
                    Order Now
                  </a>

                  <Link
                    to="/order"
                    className="px-5 py-3 rounded-full border border-[#f28c56] text-[#f28c56] hover:bg-[#fff1eb] transition duration-300"
                  >
                    Guide
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
