import React from "react";

export default function WhatsAppFloat({
  phone = "6281299420258",
  message = "Halo, saya mau tanya nih!",
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[9999]
        flex items-center gap-3
        bg-[#25D366] hover:bg-[#1DA851]
        text-white font-semibold
        px-5 py-4
        rounded-full
        shadow-2xl
        transition-all duration-300
        hover:scale-110
      "
    >
      {/* ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7"
      >
        <path
          fill="white"
          d="M16.001 3.2c-7.055 0-12.8 5.568-12.8 12.441 0 2.197.586 4.347 1.696 6.253L3.2 28.8l7.133-1.864a13.05 13.05 0 0 0 5.668 1.307h.001c7.056 0 12.8-5.568 12.8-12.441-.001-6.873-5.745-12.441-12.801-12.441z"
        />
      </svg>

      {/* TEXT */}
      <span className="hidden md:block">
        Hubungi di WhatsApp
      </span>
    </a>
  );
}
