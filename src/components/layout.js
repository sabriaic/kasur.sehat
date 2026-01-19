import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import WhatsAppFloatWithPopup from "./WhatsAppFloatWithPopup"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <WhatsAppFloatWithPopup
        phone="6281299420258"
        message="Halo Simply Plus Education! Saya mau tanya nih "
      />
    </>
  )
}

export default Layout
