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
      price: 70,
      image: "/images/Blueshy.webp",
    },
    {
      id: 2,
      title: "Squeezy",
      category: "Fresh Flower",
      price: 50,
      image: "/images/Squeezy.webp",
    },
    {
      id: 3,
      title: "Geby",
      category: "Fresh Flower",
      price: 10,
      image: "/images/Geby.webp",
    },
    {
      id: 4,
      title: "Gerbi",
      category: "Fresh Flower",
      price: 12,
      image: "/images/Gerbi.webp",
    },
    {
      id: 5,
      title: "Pinki",
      category: "Fresh Flower",
      price: 45,
      image: "/images/Pinki.webp",
    },
    {
      id: 6,
      title: "Pinkyboe",
      category: "Fresh Flower",
      price: 80,
      image: "/images/Pinkyboe.webp",
    },
    {
      id: 7,
      title: "Redbeach",
      category: "Fresh Flower",
      price: 85,
      image: "/images/Redbeach.webp",
    },
    {
      id: 8,
      title: "SunnyWhite",
      category: "Fresh Flower",
      price: 65,
      image: "/images/SunnyWhite.webp",
    },
    {
      id: 9,
      title: "Rosey",
      category: "Fresh Flower",
      price: 15,
      image: "/images/Rosey.webp",
    },
    {
      id: 10,
      title: "Cherry Blush",
      category: "Fresh Flower",
      price: 45,
      image: "/images/CherryBlush.webp",
    },
    {
      id: 11,
      title: "Sunny Pink",
      category: "Fresh Flower",
      price: 55,
      image: "/images/SunnyPink.webp",
    },
    {
      id: 12,
      title: "Soft Petals",
      category: "Fresh Flower",
      price: 85,
      image: "/images/SoftPetals.webp",
    },
  ];

  return (
    <section className="min-h-screen py-30 bg-[var(--primary-50)] px-4 md:px-6">
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
          animate="show"
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
                <img
                  src={bouquet.image}
                  alt={bouquet.title}
                  loading="lazy"
                  className="w-full h-[320px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[var(--primary-500)] text-white text-sm px-4 py-1 rounded-full shadow">
                  {bouquet.category}
                </span>

                <span className="absolute top-4 right-4 bg-white text-[var(--primary-500)] font-semibold px-4 py-1 rounded-full shadow">
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
                    className="flex-1 bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white py-3 rounded-full font-medium text-center transition duration-300"
                  >
                    Order Now
                  </a>

                  <Link
                    to="/order"
                    className="px-5 py-3 rounded-full border border-[var(--primary-500)] text-[var(--primary-500)] hover:bg-[var(--primary-100)] transition duration-300"
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
