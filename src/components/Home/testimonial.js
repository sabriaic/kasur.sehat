import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-background.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              "Kasur Speq Aneka Busa telah menjadi pilihan terpercaya bagi banyak keluarga di Indonesia.
               Dibuat dengan busa berkualitas premium, kasur ini memberikan kenyamanan maksimal, daya tahan lama, serta support yang ideal untuk kualitas tidur yang lebih baik. 
               Dengan proses produksi yang terstandarisasi, Kasur Speq Aneka Busa terus menjadi solusi tidur yang nyaman, awet, dan sesuai untuk berbagai kebutuhan."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Teks paragraf pengganti:</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Google drep
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
