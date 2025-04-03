import React from 'react'

export default function WaveSection() {
  return (
    <div>
      <div
        className="bg-gradient-to-r from-[#162644] via-blue-900/30 text-white py-20 h-[500px] relative overflow-hidden"
        style={{
          backgroundImage: `url("/images/hero-2.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#16264485] via-blue-900/30" />
        <div className="container absolute inset-0 top-[20%] mx-auto sm:px-12 px-4 z-50">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Bienestar estudiantil
              </h1>
              <p className="text-lg mb-8">
                Descripción o eslogan del bienestar estudiantil
              </p>
              <button className="bg-white text-blue-900 py-2 px-6 rounded-md hover:bg-blue-200 transition-colors">
                Conoce más
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,128L21.8,144C43.6,160,87,192,131,186.7C174.5,181,218,139,262,133.3C305.5,128,349,160,393,149.3C436.4,139,480,85,524,74.7C567.3,64,611,96,655,133.3C698.2,171,742,213,785,218.7C829.1,224,873,192,916,154.7C960,117,1004,75,1047,90.7C1090.9,107,1135,181,1178,218.7C1221.8,256,1265,256,1309,250.7C1352.7,245,1396,235,1418,229.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
