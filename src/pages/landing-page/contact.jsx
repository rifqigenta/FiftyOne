import React from "react";
import Navbar from "../../components/layout/navbar";
import Hero from "../../assets/hero-beranda.svg";
import Footer from "../../components/footer";


export const Contact = () => {
  return (
    <>
      <div className="bg-white">
      <Navbar />
        <div className="flex justify-center items-center mt-[20vh] mb-[20vh] ">
          <div className="top-[30vh] bg-gray-400 w-[120vh] h-[80vh]">
            <div className="Rectangle2 w-[55vh] h-[80vh] bg-[#002c02] rounded-lg">
              <div className="">
                <h1>KONTAK KAMI</h1>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>

    </>
  )
  };
export default Contact;
