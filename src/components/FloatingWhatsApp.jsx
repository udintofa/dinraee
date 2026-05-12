import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      {open && (
        <div className="bg-white shadow-xl rounded-2xl p-4 w-64 border border-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-gray-700 text-sm leading-relaxed">
            Ada pertanyaan? Hubungi <b>Admin</b> sekarang!
          </p>
        </div>
      )}

      {/* WhatsApp Link */}
      {open && (
        <a
          href="https://wa.me/6283865274772?text=Halo+Admin%2C+saya+ingin+bertanya."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white shadow-xl px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition duration-300"
        >
          <FaWhatsapp className="text-xl" />
          Mulai Chat
        </a>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center text-white text-3xl transition duration-300 hover:scale-110 animate-bounce"
        aria-label="Floating WhatsApp Button"
      >
        {open ? <HiX /> : <FaWhatsapp />}
      </button>
    </div>
  );
}
