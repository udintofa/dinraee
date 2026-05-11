export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmTDvZPlqzn3RtIKCM_G3HJCZ3TY1MzGNy6k2pzM6x9BwqBVKRt-jYvFJipre_CpMOWnNkrhrBTFyik5xq7692kBT7kk1avSW3WiMAhNlk-fppGFl8VrqjgBP1TW96w2W32rjmfxhVjsfDS2FAKP_dawIuwWyH8RBJVuiEHQCvl4Kx04sC_vR8s1QaiNnJIr192TfnBMigT2JKMJNrAzI7X3kLfisEzBr8DWp96xabb16nR_Nr9axRdjzTkyh1vfT0zgZRx3bbcx6q"
          alt="Floral background"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf1f2] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-27 pb-20 flex flex-col md:flex-row items-center gap-14">
        {/* TEXT */}
        <div className="order-1 md:order-1 md:w-1/2 text-center md:text-left">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ffe3e6] text-[#d66b7a] text-xs font-semibold tracking-widest uppercase mb-6">
            Hand-picked daily
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-800">
            Bunga <span className="text-[#f28c56]">Cantik</span>
            <br />
            untuk Momen <span className="text-[#f28c56]">Cantik</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Dinraee Florist menghadirkan bunga segar dan rangkaian indah untuk
            setiap momen cantikmu.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#shop"
              className="px-8 py-4 bg-[#f28c56] text-white rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg text-center"
            >
              Lihat Koleksi
            </a>

            <a
              href="https://wa.me/6285719944792?text=Halo%2C+saya+ingin+memesan+bunga"
              className="px-8 py-4 bg-white border border-gray-200 rounded-full font-semibold hover:bg-gray-300 transition duration-300 text-gray-700 text-center"
            >
              Order Sekarang
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-2 md:order-2 md:w-1/2 relative">
          {/* Blur Decoration */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-200 rounded-full blur-3xl opacity-60"></div>

          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-60"></div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl md:rotate-2 hover:rotate-0 transition duration-500">
            <img
              src="https://nasyaflorist.com/storage/sliders/01KEBQ91PA9F03KVKK6TF2WTQ1.jpg"
              alt="Bouquet"
              className="w-full object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffe3e6] flex items-center justify-center font-bold text-[#f28c56]">
                50%
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Special Offer
                </p>

                <p className="font-semibold text-gray-800">
                  Summer Bouquet Collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
