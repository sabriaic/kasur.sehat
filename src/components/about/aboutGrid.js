import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center">
      
      <AboutTeamCard
        imgSrc="/img/SPEQ.jpg"
        position="Sped"
      />

      <AboutTeamCard
        imgSrc="/img/gambar1.jpg"
        position="Gambar 1"
      />

      <AboutTeamCard
        imgSrc="/img/lebih tahan lama dan kuat.jpg"
        position="Lebih Tahan Lama & Kuat"
      />

    </div>
  )
}

export default AboutGrid
