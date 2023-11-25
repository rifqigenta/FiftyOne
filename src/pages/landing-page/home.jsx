import React from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <div className='bg-[#002c02]'>
        <Navbar />
        <div className='carousel mt-[4em] flex items-center'>
          <div className='mx-14'>
            <div className='font-semibold text-white text-[48px]'>
              <p>Sehat & Segar</p>
              <p>Bikin Kamu Semangat</p>
            </div>
            <div className='flex items-center mt-4'>
              <div class='h-[56px] w-[2px] bg-[#00b207] me-6'></div>
              <div className='flex-col'>
                <div className='font-medium text-white  py-0 text-[24px]'>
                  <p className='opacity-[60%] '>DISKON HINGGA</p>
                  <p>48%</p>
                </div>
              </div>
            </div>
            <button class='bg-[#00b207] hover:bg-[#009505] text-white text-[16px] font-semibold py-4 px-10 mt-10 rounded-full'>
              Belanja Sekarang &ensp;
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className='mx-12 absolute top-[103%] left-0 right-0'>
          {/* <div className='mx-12 relative -mt-6'> */}
          <div className='feature bg-[#ffffff] rounded-[10px]'>
            <div className='flex justify-between gap-8'>
              <div className='w-[312px] rounded-[10px] text-center py-12 px-0'>
                <div className='flex flex-col'>
                  <div className='mx-auto'>
                    <img className='mx-auto mb-4' src='./beranda/feature-home1.svg' alt='' />
                    <p className='text-[18px] font-semibold mb-2'>Bebas Biaya Kirim</p>
                    <p className='text-[14px] text-[#808080]'>Gratis Ongkos Kirim Untuk Semua Pesanan Anda</p>
                  </div>
                </div>
              </div>
              <div className='w-[312px] rounded-[10px] text-center py-12 px-4'>
                <div className='flex flex-col'>
                  <div className='mx-auto'>
                    <img className='mx-auto mb-4' src='./beranda/feature-home2.svg' alt='' />
                    <p className='text-[18px] font-semibold mb-2'>Dukungan Pelanggan 24/7</p>
                    <p className='text-[14px] text-[#808080]'>Akses Instant Kedukungan</p>
                  </div>
                </div>
              </div>
              <div className='w-[312px] rounded-[10px] text-center py-12 px-4'>
                <div className='flex flex-col'>
                  <div className='mx-auto'>
                    <img className='mx-auto mb-4' src='./beranda/feature-home3.svg' alt='' />
                    <p className='text-[18px] font-semibold mb-2'>100% Pembayaran Aman</p>
                    <p className='text-[14px] text-[#808080]'>Kami Memastikan Uang Anda Aman</p>
                  </div>
                </div>
              </div>
              <div className='w-[312px] rounded-[10px] text-center py-12 px-4'>
                <div className='flex flex-col'>
                  <div className='mx-auto'>
                    <img className='mx-auto mb-4' src='./beranda/feature-home4.svg' alt='' />
                    <p className='text-[18px] font-semibold mb-2'>Garansi Uang Kembali</p>
                    <p className='text-[14px] text-[#808080]'>Jaminan uang kembali 30 hari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='welcome h-[670px] mt-[110px] bg-[#E7F4E8]'>
          <div className='mx-12'>
            <div className='flex mx-24 pt-[140px]'>
              <img src='./beranda/ceweDiHome.svg' alt='' />
              <div className='mx-24 py-24'>
                <p className=' text-[15px] text-[#00B207]'>Hallo</p>
                <p className='text-[#002603] font-semibold text-[38px]'>Selamat datang di</p>
                <p className='text-[#00B207] font-semibold text-[48px]'>FOR EATS</p>
                <p className='mt-4 mb-8'>Cara mudah dan efektif untuk berbelanja kebutuhan sehari hari. Buat kamu yang gak mau ribet</p>
                <button class='bg-[#00b207] hover:bg-[#009505] text-white text-[16px] font-semibold py-2 px-8 rounded-full'>
                  Pelajari Selengkapnya &ensp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[888px] mx-12'>
          <fieldset className='border-t-[3px] border-[#ffffff] mb-5'>
            <legend className='mx-auto px-5 font-bold text-[34px] text-white py-24'>Kategori Produk</legend>
          </fieldset>
          <div className='mx-24'>
            <div className='flex justify-between gap-8'>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/sayur.svg' alt='' />
                  <p className='mt-4'>Sayur</p>
                </div>
              </div>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/buah.svg' alt='' />
                  <p className='mt-4'>Buah</p>
                </div>
              </div>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/bumbu.svg' alt='' />
                  <p className='mt-4'>Bumbu</p>
                </div>
              </div>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/iwak.svg' alt='' />
                  <p className='mt-4'>Daging & Ikan</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-8 mt-8'>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/sembako.svg' alt='' />
                  <p className='mt-4'>Sembako</p>
                </div>
              </div>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/produksusu.svg' alt='' />
                  <p className='mt-4'>Produk Susu</p>
                </div>
              </div>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/tahu.svg' alt='' />
                  <p className='mt-4'>Telur, Tahu, Tempe</p>
                </div>
              </div>
              <div className='w-[250px] bg-white rounded-[10px] flex flex-col pt-8 pb-4'>
                <div className='mx-auto text-center font-bold text-[24px]'>
                  <img src='./beranda/tahu.svg' alt='' />
                  <p className='mt-4'>Lain - lain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='testi h-[670px] bg-[#E7F4E8]'>
          <div className='mx-12'>
            <fieldset className='border-t-[3px] border-[#000000] mb-5'>
              <legend className='mx-auto px-5 font-bold text-[34px] text-black py-24'>Testimoni Pelanggan</legend>
            </fieldset>
            <div className='flex justify-between gap-6'>
              <div className='w-[424px] bg-white rounded-[10px] p-6'>
                <FontAwesomeIcon icon={faQuoteRight} className='text-[#00b207] w-[32px] h-[26px]' />
                <p className='mb-4 text-[14px]'>
                  Yeayy happy banget sayur dan buah pesenanku telah tiba. Meski sibuk sekalipun ttp bisa belanja sayur dan buah2an segar. Tinggal pesan dari handphone langsung dikirim ke alamat
                  kantor. Bisa jga ke alamat rumah atau lokasi lainnya. Ga mesti macet2an atau ribet deh! Cari sayur dan buah segar? Di @For Eat_official aja
                </p>
                <div className='flex items-center mt-6'>
                  <img src='./beranda/testi1.svg' alt='' />
                  <div className='flex-col ms-4'>
                    <p className='text-[16px] font-medium text-[#1a1a1a]'>Robert Fox</p>
                    <p className='font-medium text-[14px] text-[#999999]'>Pelanggan</p>
                  </div>
                  <div className='ms-auto'>
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                  </div>
                </div>
              </div>
              <div className='w-[424px] bg-white rounded-[10px] p-6'>
                <FontAwesomeIcon icon={faQuoteRight} className='text-[#00b207] w-[32px] h-[26px]' />
                <p className='mb-12 text-[14px]'>
                  Sekarang gak perlu bingung lagi karena udah ada aplikasi​ @for eat yg membantu memudahkan kita cari sayur. Selain sayur, di aplikasi cari sayur ini ada banyak pilihan menunya dari
                  sayur, buah, bumbu dapur, lauk pauk, dsb yg pasti semua barang yg di sediakan fresh dan segar
                </p>
                <div className='flex items-center mt-6'>
                  <img src='./beranda/testi2.svg' alt='' />
                  <div className='flex-col ms-4'>
                    <p className='text-[16px] font-medium text-[#1a1a1a]'>Dianne Russell</p>
                    <p className='font-medium text-[14px] text-[#999999]'>Pelanggan</p>
                  </div>
                  <div className='ms-auto'>
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                  </div>
                </div>
              </div>
              <div className='w-[424px] bg-white rounded-[10px] p-6'>
                <FontAwesomeIcon icon={faQuoteRight} className='text-[#00b207] w-[32px] h-[26px]' />
                <p className='mb-4 text-[14px]'>
                  Menurutku belanja online jauh lebih praktis apalagi kalau belanja di @forEat .. semua sayur, buahnya fresh dan harganya sangat terjangkau loh.⠀ Ditambah pengiriman yg super cepat
                  jadi pengen belanja trus ⠀ Buat kalian yg cari sayuran secara online tgl lgs aja ke websitenya @ForEat www.ForEat.com
                </p>
                <div className='flex items-center mt-6'>
                  <img src='./beranda/testi3.svg' alt='' />
                  <div className='flex-col ms-4'>
                    <p className='text-[16px] font-medium text-[#1a1a1a]'>Eleanor Pena</p>
                    <p className='font-medium text-[14px] text-[#999999]'>Pelanggan</p>
                  </div>
                  <div className='ms-auto'>
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                    <FontAwesomeIcon icon={faStar} className='text-[#ff8a00]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[421px]'>
          <div className='mx-12'>
            <div className='mx-12 py-20'>
              <div className='iklan h-[280px]'>
                <div className='text-[50px] font-bold text-[#0E4A22] mx-24 pt-6'>
                  <p>Makin Hemat</p>
                  <p>Dengan Promo 12.12</p>
                  <button class='bg-[#00b207] hover:bg-[#009505] text-white text-[16px] font-semibold py-4 px-10 rounded-full'>
                    Belanja Sekarang &ensp;
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
