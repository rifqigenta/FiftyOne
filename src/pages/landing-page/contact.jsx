import React from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='contact bg-gray-300'>
        <div className='flex justify-center items-center pt-[20vh] mb-[20vh] '>
          <div className=' flex rectangle1 bg-white w-[120vh] rounded-lg'>
            <div className='Rectangle2 w-[55vh] h-[75vh] bg-[#002c02] rounded-lg'>
              <p className='Kontak Informasi font-bold ml-2 text-white text-[30px] p-7'>Kontak Informasi</p>
              <p className='katakan w-[32vh] ml-10 mt-0 text-white'>Katakan seuatu untuk memulai obrolan langsung!</p>
              <p className='notelp text-white ml-10 mt-20 '>
                <FontAwesomeIcon className='me-2 text-[24px]' icon={faPhone} />
                +1012 3456 789
              </p>
              <p className='email text-white ml-10 mt-10'>
                <FontAwesomeIcon className='me-2 text-[24px]' icon={faEnvelope} />
                ForEat@Gmail.com
              </p>
              <p className='deskripsi text-white ml-10 mt-12'>
                <FontAwesomeIcon className='me-2 text-[24px]' icon={faLocation} />
                132 Dartmounth Street Boston, Massachusetts 02156 Sunda Pride
              </p>
            </div>
            <div className='Email flex flex-row justify-items-center p-6 ps-[50px]  rounded-md '>
              <div className='flex flex-col p-3'>
                <input className=' bg-[#7DBF80] p-3 text-sm py-4 w-[25vw] font-bold mt-7 mb-7 rounded-lg placeholder-black' for='Nama' placeholder='Nama' />
                <input className=' bg-[#7DBF80] p-3 text-sm py-4 font-bold mb-7 rounded-lg placeholder-black' for='Email' placeholder='Email' />
                <input className=' bg-[#7DBF80] p-3 text-sm py-20 font-bold mb-2 rounded-lg placeholder-black' for='Massage' placeholder='Tuliskan sesuatu...' />
                <button class='mt-4 mr-28 items-center bg-[#002c02] text-white p-4 rounded-md hover:bg-emerald-800 ml-28 focus:outline-none focus:shadow-outline-blue' type='submit'>
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Contact;
