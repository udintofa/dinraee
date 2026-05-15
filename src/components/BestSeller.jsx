import { motion } from "framer-motion";
import ButtomLine from "./ButtomLine";
import { Link } from "react-router-dom";

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

export default function BestSeller() {
  const courses = [
    {
      id: 1,
      title: "Sunny Pink",
      author: "Dinraee Florist",
      category: "Fresh Flower",
      price: 55,
      image: "SunnyPink.jpeg",
    },
    {
      id: 2,
      title: "Rosey",
      author: "Dinraee Florist",
      category: "Fresh Flower",
      price: 15,
      image: "Rosey.jpeg",
    },
    {
      id: 3,
      title: "Cherry Blush",
      author: "Dinraee Florist",
      category: "Fresh Flower",
      price: 55,
      image: "CherryBlush.jpeg",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 px-6 max-w-8xl mx-auto" id="shop">
      <div className="py-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Best Seller
          </h1>
        </div>

        {/* Bottom Line */}
        <div className="flex justify-center mb-8">
          <ButtomLine />
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[420px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-[#f28c56] text-white text-sm px-4 py-1 rounded-full shadow">
                  {course.category}
                </span>

                {/* Price */}
                <span className="absolute top-4 right-4 bg-white text-[#f28c56] font-semibold px-4 py-1 rounded-full shadow">
                  Rp{course.price}K
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{course.author}</p>

                <h3 className="font-semibold text-xl text-gray-800">
                  {course.title}
                </h3>

                <button className="mt-6 w-full bg-[#f28c56] hover:bg-orange-500 text-white py-3 rounded-full font-medium transition duration-300">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
