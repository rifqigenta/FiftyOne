import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterestP, faInstagram, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className='bg-[#191919]'>
        <div className='footer h-[373px]'>
          <div className='mx-12'>
            <div className='mx-24 pt-16'>
              <div className='flex gap-12 items-center'>
                <div className='flex-col w-[300px] text-[#FFFFFF] me-20'>
                  <img src='./beranda/ForEatsz.png' className=' h-[86.22px] mb-6' alt='' />
                  <p className='mb-6 text-[#999999]'>Sebuah aplikasi yang memudahkan semua orang untuk berbelanja kebutuhan sehari hari dengan cepat dan mudah</p>
                  <div className='flex gap-8'>
                    <FontAwesomeIcon className='w-[18px] h-[18px]' icon={faFacebookF} />
                    <FontAwesomeIcon className='w-[18px] h-[18px]' icon={faTwitter} />
                    <FontAwesomeIcon className='w-[18px] h-[18px]' icon={faPinterestP} />
                    <FontAwesomeIcon className='w-[18px] h-[18px]' icon={faInstagram} />
                  </div>
                </div>
                <div className='flex-col w-[300px] text-[#FFFFFF]'>
                  <p className='mb-6 text-[18px] font-medium'>Kontak Kami</p>
                  <div className='text-[#999999]'>
                    <p>Kantor&nbsp;: (021) 001 2345678</p>
                    <p>Mobile&nbsp;: +62 812 3456</p>
                    <p>Email &ensp;: ForEats@gmail.com </p>
                  </div>
                </div>
                <div className='flex-col w-[300px] text-[#FFFFFF]'>
                  <p className='mb-6 text-[18px] font-medium'>Segera Unduh Aplikasinya</p>
                  <button class='flex items-center px-6 py-2 rounded-[4px] bg-[#333333]'>
                    <FontAwesomeIcon icon={faGooglePlay} className='w-[24px] h-[24px] text-white me-2' />
                    <div className='flex-col'>
                      <p className='text-[#b3b3b3] text-[11px] font-regular'>Download on the</p>
                      <p className='text-[16px] font-medium text-white'>Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-[#b3b3b3]' />
        <div className='mx-24 p-5 text-[#999999] text-[14px] font-regular'>For Eat eCommerce © 2023 All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
