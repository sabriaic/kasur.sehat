import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            Tidur nyaman,hidup lebih berkulitas
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            kasur speq aneka busa
          </h3>
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              kasur speq pt aneka busa 
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              hadir untuk memberikan kenyamana maksimal setiap malam.di rancakan dengan
              teknologi busa terbaik kasur kami menopang tubuh dengan sempurna,
              cocok untuk segala kebutuhan keluarga
            </p>
            <a
              href="/blog/blog-post"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              kasurkesehatan
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                kenapa pilih kasur speq aneka busa?
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                busa padat & empuk berkulitas tinggi tersedia berbagai macam ucuran harga terjagkau,
                berkualitas dan terman tahan lama dan tidak mudah kempes cocok untuk rumah,kos hingga hotel.
              </p>
              <a
                href="/blog/blog-post-1"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                kasurkesehatan
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                promo terbatas hingga 30%
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                kalau kamu mau disesuaikan untuk halaman landing page, e-commrce atau lg mau gaya formal
                santai,atau type banget
              </p>
              <a
                href="/blog/blog-post-2"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                kasurkecantikan
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
