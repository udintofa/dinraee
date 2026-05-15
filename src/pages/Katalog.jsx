import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  const bouquets = [
    {
      id: 1,
      title: "Blueshy",
      category: "Fresh Flower",
      price: 55,
      image: "/Blueshy.jpeg",
    },
    {
      id: 2,
      title: "Squeezy",
      category: "Fresh Flower",
      price: 65,
      image: "/Squeezy.jpeg",
    },
    {
      id: 3,
      title: "Geby",
      category: "Fresh Flower",
      price: 50,
      image: "/Geby.jpeg",
    },
    {
      id: 4,
      title: "Gerbi",
      category: "Fresh Flower",
      price: 45,
      image: "/Gerbi.jpeg",
    },
    {
      id: 5,
      title: "Pinki",
      category: "Fresh Flower",
      price: 70,
      image: "/Pinki.jpeg",
    },
    {
      id: 6,
      title: "Pinkyboe",
      category: "Fresh Flower",
      price: 60,
      image: "/Pinkyboe.jpeg",
    },
    {
      id: 7,
      title: "Redbeach",
      category: "Fresh Flower",
      price: 75,
      image: "/Redbeach.jpeg",
    },
    {
      id: 8,
      title: "SunnyWhite",
      category: "Fresh Flower",
      price: 58,
      image: "/SunnyWhite.jpeg",
    },
  ];

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

                {/* Category */}
                <span className="absolute top-4 left-4 bg-[#f28c56] text-white text-sm px-4 py-1 rounded-full shadow">
                  {bouquet.category}
                </span>

                {/* Price */}
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
                  {/* Order */}
                  <a
                    href="https://wa.me/6285719944792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#f28c56] hover:bg-orange-500 text-white py-3 rounded-full font-medium text-center transition duration-300"
                  >
                    Order Now
                  </a>

                  {/* Detail */}
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
