import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-400)] border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Dinraee Florist
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Menghadirkan rangkaian bunga indah untuk setiap momen spesialmu
              dengan sentuhan penuh cinta.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Navigation</h3>

            <div className="mt-5 flex flex-col gap-3 text-gray-600">
              <Link
                to="#"
                className="hover:text-[var(--primary-500)] transition"
              >
                Home
              </Link>

              <Link
                to="#catalog"
                className="hover:text-[var(--primary-500)] transition"
              >
                Catalog
              </Link>

              <Link
                to="#gallery"
                className="hover:text-[var(--primary-500)] transition"
              >
                Gallery
              </Link>

              <Link
                to="#contact"
                className="hover:text-[var(--primary-500)] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>

            <div className="mt-5 flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/dinraeeflo_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex items-center justify-center text-2xl text-[var(--primary-500)]"
              >
                <FaInstagram />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dinraeeflo_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex items-center justify-center text-2xl text-[var(--primary-500)]"
              >
                <FaTiktok />
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://whatsapp.com/channel/0029VbCuAAwFSAt6dCtOsp1K"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex items-center justify-center text-2xl text-[#f28c56]"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Stay connected and get the latest bouquet updates from us 🌸
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-100 mt-14 pt-6 text-center text-gray-500 text-sm">
          © 2026 Dinraee Florist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
