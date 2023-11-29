import React from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/footer";
import cewekdiskon from "../../assets/About/cewekdiskon.svg";
import jeruk from "../../assets/About/jeruk.svg";
import sangyur from "../../assets/About/sangyur.svg";
import ijo from "../../assets/About/ijo.svg";

export const About = () => {
  return (
    <>
     <Navbar />
     <div className="about bg-gray-300">
      <div className="Homepage flex h-[137vh]">
        <div className="Rectangle1 items-center ml-[60px] mt-[20vh]">
          <img className="cewekdiskon w-96 h-96 ml-32 top-14 " src={cewekdiskon} />
            <div className="Bannar w-96 backdrop-blur-sm justify-center items-center inline-grid">
              <img className="Sangyur w-60 left-[520px] bottom-[25px] absolute " src={sangyur} />
            </div>
            <img className="Image w-60 left-[581px] top-[157px] absolute rounded-lg" src={jeruk} />
            <div className="Rectang2 w-44 h-32 left-[480px] bottom-[300px] absolute bg-gradient-to-b from-zinc-300 " />
            <div className="Rectangle3 w-40 h-32 left-[480px] bottom-[300px] absolute bg-gradient-to-b from-zinc-300 backdrop-blur-sm">
              <div className="Info w-96 h-24 ml- mt-5 flex-col justify-start items-start gap-6 inline-flex">
                <div className="Frame1 ml-2 flex-col justify-start items-start gap-3 flex">
                  <div className="Frame2 flex-col justify-start items-start gap-2 flex">
                    <div className="DiskonHingga w-36 text-zinc-900 text-sm font-medium uppercase leading-none tracking-wide">diskon hingga</div>
                  <div className=" w-24 text-center text-zinc-900 text-3xl font-semibold leading-10">75%  </div>
                  </div>
                  <div className="HanyaSayurBuah text-lime-700 text-sm font-normal font-['Poppins'] leading-tight">Hanya  Sayur & Buah</div>
                  <div className="Info w-96 h-80 left-[390px] bottom-[1px] absolute flex-col justify-start items-start gap-6 inline-flex">
                  <div className="TerpercayaTokoSayuranSegar text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-10">100% Terpercaya<br/>Toko Sayuran Segar</div>
                  <div className="Feature flex-col justify-start items-start gap-2.5 flex">
                    <div className="Heading justify-start items-center gap-3 inline-flex">
                      <div className="Check w-6 h-6 relative">
                        <div className="Rectangle7 w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-full" />
                        <div className="Check1 w-4 h-4 left-[4px] top-[4px] absolute" />  
                      </div>
                      <div className="MakananSehatAlami w-96 text-zinc-900 text-lg font-medium font-['Poppins'] leading-relaxed">Makanan Sehat & Alami</div>
                    </div>
                    <div className="Description pl-8 justify-start items-start inline-flex">
                      <div className="KamiMenghadirkanRangkaianSayuranSegarBuahBuahanOrganikDanBahanBahanBerkualitasTinggiUntukMendukungPerjalananKesehatanAnda w-96 text-black text-sm font-light font-['Poppins'] leading-tight">Kami menghadirkan rangkaian sayuran segar, buah-buahan organik, dan bahan-bahan berkualitas tinggi untuk mendukung perjalanan kesehatan Anda.</div>
                    </div>
                  </div>
                  <div className="Feature flex-col justify-start items-start gap-2.5 flex">
                    <div className="Heading justify-start items-center gap-3 inline-flex">
                      <div className="Check w-6 h-6 relative">
                        <div className="Rectangle7 w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-full" />
                        <div className="Check1 w-4 h-4 left-[4px] top-[4px] absolute" />
                      </div>
                      <div className="ProdukSegarDanBerkualitasSetiapHariUntukAnda w-96 text-zinc-900 text-lg font-medium font-['Poppins'] leading-relaxed">Produk segar dan berkualitas setiap hari untuk Anda.</div>
                    </div>
                    <div className="Description pl-8 justify-start items-start inline-flex">
                      <div className="atas w-96 text-black text-sm font-light font-['Poppins'] leading-tight">Apakah Anda mencari sumber terpercaya untuk memenuhi kebutuhan sayuran segar dan produk berkualitas setiap hari? ForEat adalah solusi terbaik untuk kebutuhan makanan Anda yang sehat dan bergizi.</div>
                    </div>
                  </div>
                  <button class="mt-4 items-center bg-[#00B207] text-white p-6 rounded-full hover:bg-[#002c02] ml-5 focus:outline-none focus:shadow-outline-blue" type="submit">Belanja sekarang</button>
                </div>
                </div> 
              </div>
            </div>
            <div className=" w-screen h-96">
            <img className="w-screen h" src={ijo} />
            <div className=" bg-white justify-center items-center rounded-md p-4"> 
            <div className="TentangKami flex justify-center items-center font-bold ">Tentang Kami</div>
            </div>
            </div>
        </div>
      </div>
      <Footer/>
     </div>
     
    </>
    
  )
};
export default About;
