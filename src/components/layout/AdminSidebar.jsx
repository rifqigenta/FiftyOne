import React from "react";
import { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
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
const SidebarContext = createContext();

const MenuCollapse = ({ menus, title, setMenuActive }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <>
      <div className='stock'>
        <ul className='menu px-0'>
          <li className=''>
            <details closed icon={`${expanded ? "" : "hidden"}`}>
              <summary className='bg-transparent text-[22px] hover:bg-transparent px-2'>
                <FontAwesomeIcon icon={faClipboardList} className='me-2' />
                <span className={`${expanded ? "" : "hidden"}`}>{title}</span>
              </summary>
              <ul>
                {menus.map((value, index) => {
                  const menuActive = value.isActive ? "bg-[#008E06] rounded-md py-1" : "py-1";
                  return (
                    <Link to={`/admin/stock/${value.name}`}>
                      <li
                        key={index}
                        className={`${menuActive}grid gap-y-4 menu cursor-pointer`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuActive(index);
                        }}
                      >
                        <div className={`${menuActive}flex py-0`}>
                          {value.icon}
                          {value.name}
                        </div>
                      </li>
                    </Link>
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

const Dashboard = ({ title, setMenuActive }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faHouse} />
              <span className={`${expanded ? "" : "hidden"}`}>{title}</span>
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};
const UserAccount = ({ title, setMenuActive }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faUserPen} />
              <span className={`${expanded ? "" : "hidden"}`}>{title}</span>
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};
const Report = ({ title, setMenuActive }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faFlag} />
              <span className={`${expanded ? "" : "hidden"}`}>{title}</span>
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};
const Logout = ({ title }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <>
      <div className='Dashboard'>
        <ul className='menu px-0 '>
          <li>
            <summary className='text-[22px] hover:bg-transparent px-1'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span className={` ${expanded ? "" : "hidden ease-in"}`}>{title}</span>
            </summary>
          </li>
        </ul>
      </div>
    </>
  );
};

const AdminSidebar = ({ handlerOpen }) => {
  const handle = () => {
    handlerOpen();
  };
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
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <SidebarContext.Provider value={{ expanded }}>
        <div
          className={`w-[280px] min-h-screen overflow-y-scroll no-scrollbar bg-[#191919] left-0 fixed py-10 px-10 transition-opacity duration-500 
        ${expanded ? "" : "w-[75px] h-screen px-4"}`}
        >
          <div className='grid gap-y-4 text-white'>
            <img src='/beranda/ceweDiHome.svg' className={`h-[100px] rounded-full m-auto ${expanded ? "" : "h-[50px] rounded-full mx-0"}`} alt='' />
            <h6 className={`text-[22px] m-auto mb-4 ${expanded ? "" : "invisible"}`}>Admin </h6>
            <Link to='/admin/dashboard'>
              <Dashboard title='Dashboard' setMenuActive={setMenuActive} />
            </Link>
            <MenuCollapse menus={menuState} title='Stock' setMenuActive={setMenuActive} />
            <Link to='/admin/user-account'>
              <UserAccount title='User Account' />
            </Link>
            <Link to='/admin/report'>
              <Report title='Report' />
            </Link>
            <button
              className={`m-auto w-[50px] h-[50px] btn bg-[#E7F4E8] rounded-full ${expanded ? "" : "w-[15px] mx-0"}`}
              onClick={() => {
                setExpanded((curr) => !curr);
                handle();
              }}
            >
              {expanded ? (
                <FontAwesomeIcon icon={faChevronRight} className='text-[#008E06] text-[22px] ease-in' />
              ) : (
                <FontAwesomeIcon icon={faChevronLeft} className='text-[#008E06] text-[15px] ease-out' />
              )}
            </button>
            <Link to='/login'>
              <Logout title='Logout' />
            </Link>
          </div>
        </div>
      </SidebarContext.Provider>
    </>
  );
};

export default AdminSidebar;
