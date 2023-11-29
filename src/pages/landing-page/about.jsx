import React from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/footer";
import cewekdiskon from "../../assets/About/cewekdiskon.svg";
import jeruk from "../../assets/About/jeruk.svg";
import sangyur from "../../assets/About/sangyur.svg";
import paman from "../../assets/About/paman.svg";

export const About = () => {
  return (
    <>
     <Navbar />
     <div className="about bg-gray-300">
      <div className="Homepage flex h-[137vh]">
        <div className="Rectangle1 items-center mt-[20vh]">
          <img className="cewekdiskon w-96 h-96 ml-48 top-14 " src={cewekdiskon} />
            <div className="Bannar w-96 backdrop-blur-sm justify-center items-center inline-grid">
              <img className="Sangyur w-60 left-[580px] bottom-[25px] absolute " src={sangyur} />
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
                        <div className="Check1 w-4 h-4 left-[4px] " />
                      </div>
                      <div className="ProdukSegarDanBerkualitasSetiapHariUntukAnda w-96 text-zinc-900 text-lg font-medium font-['Poppins'] leading-relaxed">Produk segar dan berkualitas setiap hari untuk Anda.</div>
                    </div>
                    <div className="Description pl-8 justify-start items-start inline-flex">
                      <div className="atas w-96 text-black text-sm font-light leading-tight">Apakah Anda mencari sumber terpercaya untuk memenuhi kebutuhan sayuran segar dan produk berkualitas setiap hari? ForEat adalah solusi terbaik untuk kebutuhan makanan Anda yang sehat dan bergizi.</div>
                    </div>
                  </div>
                  <button class=" items-center bg-[#00B207] text-white p-3 rounded-full hover:bg-[#002c02] ml-5 focus:outline-none focus:shadow-outline-blue" type="submit">Belanja sekarang</button>
                </div>
                </div> 
              </div>
            </div>
            <div className="ijo godong mt-20">
            <div className="backijo h-[100vh] ">
            <div className="kalimat1 mx-32  text-white text-2xl text-justify p-2 ">
              <div className="teks flex gap-28 mt-20 tracking-wide">
              <p><strong>Kami adalah inisiatif berbasis daring</strong> yang bertujuan memberikan solusi terkini untuk memenuhi kebutuhan harian masyarakat perkotaan yang sibuk. Dibentuk berdasarkan wawasan dari riset mendalam, kami memahami bahwa kesibukan kerja seringkali menjadi hambatan bagi banyak individu untuk mendapatkan sayuran segar dan bahan memasak berkualitas. Dengan memahami permasalahan ini, kami berkomitmen untuk menghadirkan kemudahan belanja melalui platform daring yang inovatif.</p>
              <img className="paman " src={paman} />
              </div>
            </div>
              <div className=" bg-white flex justify-center items-center w-[80vw] bottom-[70px] left-[10vw] absolute rounded-md p-4">
                <div className="TentangKami flex justify-center items-center text-3xl font-bold ">Tentang Kami</div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
     </div>
     {/* <Footer/> */}
     
    </>
    
  )
};
export default About;
