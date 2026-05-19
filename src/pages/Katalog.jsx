import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ButtomLine from "../components/ButtomLine";
import Swal from "sweetalert2";

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

  const handleOrder = async (bouquet) => {
    const { value: formValues } = await Swal.fire({
      title: `🌸 Pesan ${bouquet.title}`,
      width: 600,

      html: `
      <div style="text-align:left; margin-top:10px;">

        <p style="margin-bottom:14px; color:#666; line-height:1.6;">
          Haii 🌷<br/>
          Yuk isi detail pesanan kamu dulu yaa biar admin gampang cek ketersediaan bouquet dan atur pengirimannya ✨
        </p>

        <label style="font-weight:600;">
          Siapa nama kamu?
        </label>

        <input 
          id="swal-name" 
          class="swal2-input" 
          placeholder="Contoh: Udin"
        >

        <div style="margin-top:18px;">
          <label style="font-weight:600;">
            Mau ambil dengan metode apa nih?
          </label>

          <p style="font-size:13px; color:#777; margin-top:4px;">
            📦 Pengiriman dikenakan tambahan ongkir Rp4.000 yaa
          </p>

          <select id="swal-method" class="swal2-input">
            <option value="COD">COD</option>
            <option value="Dikirim">Dikirim</option>
          </select>
        </div>

        <div style="margin-top:18px;">
          <label id="location-label" style="font-weight:600;">
            Mau COD di mana yaa?
          </label>

          <input 
            id="swal-location" 
            class="swal2-input" 
            placeholder="Contoh: Bundaran UGM"
          >
        </div>

        <div style="margin-top:18px;">
          <label style="font-weight:600;">
            Bouquet ini dibutuhin tanggal berapa?
          </label>

          <input 
            id="swal-date" 
            type="date" 
            class="swal2-input"
          >
        </div>

        <div 
          id="price-detail"
          style="
            margin-top:22px;
            background:#fff4f7;
            padding:16px;
            border-radius:16px;
            line-height:1.8;
            color:#444;
          "
        >
          <div style="display:flex; justify-content:space-between;">
            <span>Harga Bouquet</span>
            <span>Rp${(bouquet.price * 1000).toLocaleString("id-ID")}</span>
          </div>

          <div 
            id="shipping-row"
            style="display:flex; justify-content:space-between;"
          >
            <span>Ongkir</span>
            <span>Rp0</span>
          </div>

          <hr style="margin:10px 0; border:none; border-top:1px solid #eee;" />

          <div 
            style="
              display:flex;
              justify-content:space-between;
              font-weight:700;
              font-size:18px;
            "
          >
            <span>Total</span>
            <span id="total-price">
              Rp${(bouquet.price * 1000).toLocaleString("id-ID")}
            </span>
          </div>
        </div>

      </div>
    `,

      confirmButtonText: "Kirim ke WhatsApp 💌",
      confirmButtonColor: "#ec4899",

      didOpen: () => {
        const method = document.getElementById("swal-method");
        const locationLabel = document.getElementById("location-label");
        const shippingRow = document.getElementById("shipping-row");
        const totalPrice = document.getElementById("total-price");

        const bouquetPrice = bouquet.price * 1000;

        const updatePrice = () => {
          const ongkir = method.value === "Dikirim" ? 4000 : 0;
          const total = bouquetPrice + ongkir;

          if (method.value === "Dikirim") {
            locationLabel.innerText = "Bouquet mau dikirim ke mana yaa?";
            shippingRow.innerHTML = `
            <span>Ongkir</span>
            <span>Rp4.000</span>
          `;
          } else {
            locationLabel.innerText = "Mau COD di mana yaa?";
            shippingRow.innerHTML = `
            <span>Ongkir</span>
            <span>Rp0</span>
          `;
          }

          totalPrice.innerText = `Rp${total.toLocaleString("id-ID")}`;
        };

        updatePrice();

        method.addEventListener("change", updatePrice);
      },

      preConfirm: () => {
        const name = document.getElementById("swal-name").value;
        const method = document.getElementById("swal-method").value;
        const location = document.getElementById("swal-location").value;
        const date = document.getElementById("swal-date").value;

        if (!name || !location || !date) {
          Swal.showValidationMessage("Yahh masih ada yang belum diisi nih 🥺");
          return false;
        }

        return {
          name,
          method,
          location,
          date,
        };
      },
    });

    if (formValues) {
      const ongkir = formValues.method === "Dikirim" ? 4000 : 0;

      const bouquetPrice = bouquet.price * 1000;

      const total = bouquetPrice + ongkir;

      const message = `
Halo kak Dinraee Florist 🌸✨

Perkenalkan saya ${formValues.name} 😊

Saya ingin memesan bouquet berikut:

🌷 Bouquet : ${bouquet.title}
🪻 Kategori : ${bouquet.category}

📅 Tanggal dibutuhkan :
${formValues.date}

🚚 Metode :
${formValues.method}

📍 ${formValues.method === "Dikirim" ? "Alamat Pengiriman" : "Lokasi COD"} :
${formValues.location}

💰 Detail Harga :
• Bouquet : Rp${bouquetPrice.toLocaleString("id-ID")}
• Ongkir : Rp${ongkir.toLocaleString("id-ID")}

✨ Total :
Rp${total.toLocaleString("id-ID")}

Kira-kira bouquet ini masih tersedia nggak ya kak? 🌸
Terima kasihh 💖
    `;

      const encodedMessage = encodeURIComponent(message);

      window.open(
        `https://wa.me/6283865274772?text=${encodedMessage}`,
        "_blank",
      );
    }
  };

  return (
    <section className="min-h-screen py-30 bg-[var(--background)] px-4 md:px-6">
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
                  <button
                    onClick={() => handleOrder(bouquet)}
                    className="flex-1 bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white py-3 rounded-full font-medium text-center transition duration-300"
                  >
                    Order Now
                  </button>

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
