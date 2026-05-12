import ButtomLine from "./ButtomLine";

export default function OurFlowerGallery() {
  const images = [
    {
      id: 1,
      image: "Blueshy.jpeg",
      height: "h-74",
    },
    {
      id: 2,
      image: "CherryBlush.jpeg",
      height: "h-96",
    },
    {
      id: 3,
      image: "Geby.jpeg",
      height: "h-80",
    },
    {
      id: 4,
      image: "Gerbi.jpeg",
      height: "h-74",
    },
    {
      id: 5,
      image: "Pinki.jpeg",
      height: "h-96",
    },
    {
      id: 6,
      image: "Pinkyboe.jpeg",
      height: "h-72",
    },
    {
      id: 7,
      image: "Redbeach.jpeg",
      height: "h-96",
    },
    {
      id: 8,
      image: "Rosey.jpeg",
      height: "h-80",
    },
  ];

  return (
    <section className="py-16 overflow-hidden bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Flower Gallery
        </h1>
        <div className="py-4">
          <ButtomLine />
        </div>

        <p className="text-gray-600 mt-3">
          Beautiful moments captured with our bouquets.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((item) => (
          <div
            key={item.id}
            className={`${item.height} overflow-hidden rounded-3xl group relative shadow-md cursor-pointer`}
          >
            {/* image */}
            <img
              src={item.image}
              alt="Flower Bouquet"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
