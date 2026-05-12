import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtomLine from "./ButtomLine";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function BestSeller() {
  const [filter, setFilter] = useState("all");

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
      {/* Content */}
      <div className="py-8 max-w-7xl mx-auto">
        {/* Text */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Best Seller
          </h1>
        </div>

        {/* Bottom Line */}
        <div className="flex justify-center mb-8">
          <ButtomLine />
        </div>

        {/* Image */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="py-10 grid md:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {courses.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-white max-w-2xl rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-100 lg:h-110 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Category */}
                  <span className="absolute top-4 left-4 bg-[#f28c56] text-white text-sm px-3 py-1 rounded-full">
                    {course.category}
                  </span>

                  {/* Price */}
                  <span className="absolute top-4 right-4 bg-white text-[#f28c56] font-semibold px-3 py-1 rounded-full shadow">
                    Rp{course.price}K
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{course.author}</p>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
