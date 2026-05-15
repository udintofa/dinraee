import { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function OrderPage() {
  const bouquet = {
    name: "Sunny Pink",
    category: "Fresh Flower",
    price: "Rp55K",
    image: "/SunnyPink.jpeg",
    desc: "Bouquet cantik dengan nuansa pink lembut yang cocok untuk hadiah wisuda, ulang tahun, maupun anniversary.",
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = `
Halo Admin, saya ingin memesan bouquet 🌸

Bouquet:
- ${bouquet.name}

Nama:
- ${form.name}

Nomor HP:
- ${form.phone}

Alamat:
- ${form.address}

Catatan:
- ${form.note || "-"}

Terima kasih.
    `;

    const url = `https://wa.me/6285719944792?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen bg-[#fff7f8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#f28c56] transition mb-10"
        >
          <HiOutlineArrowLeft />
          Back to Home
        </Link>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT IMAGE */}
          <div>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={bouquet.image}
                alt={bouquet.name}
                className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Category */}
            <span className="inline-block px-4 py-2 rounded-full bg-[#ffe8df] text-[#f28c56] text-sm font-medium">
              {bouquet.category}
            </span>

            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-800 mt-5">
              {bouquet.name}
            </h1>

            {/* Price */}
            <p className="text-3xl font-semibold text-[#f28c56] mt-4">
              {bouquet.price}
            </p>

            {/* Desc */}
            <p className="text-gray-600 leading-relaxed mt-6">{bouquet.desc}</p>

            {/* Included */}
            <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Included in Bouquet
              </h3>

              <div className="space-y-3 text-gray-600">
                <p>🌸 Fresh flowers</p>
                <p>🎀 Premium wrapping</p>
                <p>💌 Greeting card</p>
                <p>🚚 Safe packaging</p>
              </div>
            </div>

            {/* FORM */}
            <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Details
              </h2>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#f28c56]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Phone Number
                  </label>

                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxx"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#f28c56]"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Delivery Address
                  </label>

                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-6 text-gray-400" />

                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Enter delivery address"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#f28c56]"
                    />
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Notes (Optional)
                  </label>

                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Write your notes here..."
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#f28c56]"
                  />
                </div>

                {/* Button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full mt-3 bg-[#25D366] hover:bg-green-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-2xl" />
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
