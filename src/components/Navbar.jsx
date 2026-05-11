import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const menuItems = ["Beranda", "Katalog", "Pesan", "Kontak"];

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scroll ke bawah
        setShow(false);
      } else {
        // scroll ke atas
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed left-1/2 top-4 z-50
        w-[90%] max-w-6xl
        -translate-x-1/2
        rounded-2xl
        bg-[#fbf1f2]
        backdrop-blur-md
        border border-white/20
        shadow-lg
        transition-transform duration-500
        ${show ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-[#f28c56] bg-clip-text text-transparent">
          Dinraee
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-medium transition"
              >
                {item}
              </a>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f28c56] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* CTA Button */}
          <Link
            to="/login"
            className="ml-4 bg-[#f28c56] text-white px-5 py-2 rounded-xl font-medium shadow hover:scale-105 transition"
          >
            Order Sekarang
          </Link>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/90 backdrop-blur border-t border-gray-200"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 font-medium py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}

              <Link
                to="/login"
                className="inline-block mt-4 bg-[#f28c56] text-white px-5 py-3 rounded-xl font-medium"
              >
                Order Sekarang
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
