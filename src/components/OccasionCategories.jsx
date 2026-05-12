import ButtomLine from "./ButtomLine";

export default function OccasionCategories() {
  const categories = [
    {
      id: 1,
      name: "Wisuda",
      image: "wisuda.png",
      desc: "Rayakan pencapaian akademis dengan rangkaian bunga yang indah.",
    },
    {
      id: 2,
      name: "Birthday",
      image: "birthday.png",
      desc: "Beri kejutan ulang tahun yang tak terlupakan dengan buket bunga cantik.",
    },
    {
      id: 3,
      name: "Anniversary",
      image: "romance.png",
      desc: "Rayakan momen spesial dengan rangkaian bunga yang penuh cinta.",
    },
    {
      id: 4,
      name: "Wedding",
      image: "wedding.png",
      desc: "Buat hari pernikahanmu semakin indah dengan buket bunga yang elegan.",
    },
  ];
  return (
    <section className="py-10 max-w-7xl mx-auto overflow-hidden bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Occasion Categories
        </h1>
        <div className="py-4">
          <ButtomLine />
        </div>

        <p className="text-gray-600 mt-3">
          Temukan kategori bunga untuk setiap momen spesialmu.
        </p>
      </div>

      {/* Categories */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-90 md:h-140 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div className="md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition duration-300">
                <h1 className="text-white text-3xl md:text-4xl font-bold">
                  {category.name}
                </h1>

                <p className="text-white/80 text-sm mt-1">{category.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
