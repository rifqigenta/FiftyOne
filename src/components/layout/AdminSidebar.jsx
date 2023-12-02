import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClipboardList,
  faAppleWhole,
  faCubesStacked,
  faDrumstickBite,
  faJar,
  faBowlFood,
  faPlateWheat,
  faEgg,
  faEllipsis,
  faUserPen,
  faFlag,
  faChevronLeft,
  faChevronRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const MenuCollapse = ({ menus, title, setMenuActive }) => {
  return (
    <>
      <div className='stock'>
        <ul className='menu px-0'>
          <li className=''>
            <details open>
              <summary className='bg-transparent text-[22px] hover:bg-transparent px-2'>
                <FontAwesomeIcon icon={faClipboardList} className='me-2' />
                {title}
              </summary>
              <ul>
                {menus.map((value, index) => {
                  const menuActive = value.isActive ? "bg-[#008E06] rounded-md py-1" : "py-1";
                  return (
                    <li
                      key={index}
                      className={`${menuActive}grid gap-y-4 menu cursor-pointer`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuActive(index);
                      }}
                    >
                      <div className='flex py-0'>
                        {value.icon}
                        {value.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
};

const Dashboard = ({ title }) => {
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faHouse} />
              {title}
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};
const UserAccount = ({ title }) => {
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faUserPen} />
              {title}
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};
const Report = ({ title }) => {
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faFlag} />
              {title}
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};
const Logout = ({ title }) => {
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              {title}
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};

const AdminSidebar = () => {
  const [menuState, setMenuState] = useState([
    {
      icon: <FontAwesomeIcon icon={faAppleWhole} />,
      name: "Buah",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faCubesStacked} />,
      name: "Bumbu",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faDrumstickBite} />,
      name: "Daging",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faJar} />,
      name: "Produk Susu",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faBowlFood} />,
      name: "Sayuran",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faPlateWheat} />,
      name: "Sembako",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faEgg} />,
      name: "3T",
      isActive: false,
    },
    {
      icon: <FontAwesomeIcon icon={faEllipsis} />,
      name: "Lain-lain",
      isActive: false,
    },
  ]);
  const setMenuActive = (index) => {
    const updatedMenus = menuState.map((menu, i) => {
      return { ...menu, isActive: i === index };
    });
    setMenuState(updatedMenus);
  };
  return (
    <>
      <div className='w-[280px] h-screen overflow-y-scroll no-scrollbar bg-[#191919] left-0 py-10 px-10'>
        <div className='grid gap-y-4 text-white'>
          <img src='././beranda/ceweDiHome.svg' className='h-[100px] rounded-full m-auto' alt='' />
          <h6 className='text-[22px] m-auto mb-4'>Admin </h6>
          <Dashboard title='Dashboard' />
          <MenuCollapse menus={menuState} title='Stock' setMenuActive={setMenuActive} />
          <UserAccount title='User Account' />
          <Report title='Report' />
          <button className='btn'>kdjfak</button>
          <Logout title='Logout' />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
