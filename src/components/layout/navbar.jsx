import React from "react";
import { Link } from "react-router-dom";
// import Navigation from "react-sticky-nav";
// import { Navigation } from "react-sticky-nav";
import LogoNavbar from "../../assets/logo.svg";
export const Navbar = () => {
  return (
    <>
      <div className='bg-[#002C02] fixed top-0 left-0 right-0'>
        <div className='px-0 mx-12 text-[22px]'>
          <ul className='flex justify-start items-center m-0 gap-x-12 font-bold text-[#ffffff]'>
            <li>
              <Link to='/'>
                <img src={LogoNavbar} className='w-[100px] h-[60px]' alt='' />
              </Link>
            </li>
            <li>
              <Link to='/'>Beranda</Link>
            </li>
            <li>
              <Link to='/about'>Tentang Kami</Link>
            </li>
            <li>
              <Link to='/contact'>Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
