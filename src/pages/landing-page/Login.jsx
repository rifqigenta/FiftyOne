import React from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/About/Google.svg";

const Login = () => {
  const handleLogin = () => {};

  return (
    <>
      <div className='backgorund1 bg-white min-h-screen pb-8'>
        <div>
          <div className='pt-16'>
            <h1 className='judulproduk text-center text-7xl font-extrabold'>
              <span className='text-[#498528]'>For</span>
              <span className='text-[#C6E3C7]'>Eat</span>
            </h1>
          </div>
          <div className='flex flex-col mt-10 justify-center items-center'>
            <h1 className='mr-72 text-black'>Alamat Email</h1>
            <input className='email bg-white border-[2px] border-black w-[400px] h-[48px] mt-2 p-4 rounded-[8px] ' for='Email' placeholder='Email' />
            <h1 className='mt-7 mr-[340px] text-black'>Sandi</h1>
            <input className='password bg-white border-[2px] border-black w-[400px] h-[48px] mt-2 p-4 rounded-[8px] ' type='password' for='password' placeholder='password' />
            <div className='flex mt-9 mr-36 gap-4'>
              <input type='checkbox' className=' checkbox checkbox-success border-black' />
              <label className='flex text-black'>Biarkan saya tetap masuk</label>
            </div>
            <Link to='/admin/dashboard'>
              <button class='w-[400px] mt-7 items-center bg-[#00B207] text-white p-3 rounded-[4px] hover:bg-[#498528] focus:outline-none focus:shadow-outline-blue' type='submit'>
                Masuk
              </button>
            </Link>
            <fieldset className='border-t-[1px] mt-7 w-[23vw] border-[#999DA3'>
              <legend className=' text-center px-4 text-[#999DA3'>atau masuk dengan</legend>
            </fieldset>
            <button class='flex w-[400px] mt-7 items-center bg-[#D9D9D9] text-[#4B5768] p-3 gap-3 rounded-[4px] hover:bg-[#498528] focus:outline-none focus:shadow-outline-blue' type='submit'>
              <img src={Google} className='ml-[60px]' /> Lanjutkan dengan Google
            </button>
            <Link to='/register'>
              <div className='mt-6 hover:text-[#00B207] text-[#498528] font-semibold'>
                <a href='#'>Membuat Akun</a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
