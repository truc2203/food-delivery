import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.png";
import { FcPaid, FcShop, FcUnlock } from "react-icons/fc";
import { app } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setUser, isLogout } from "../app/userSlice";
import { selectedUSer } from "../app/userSlice";
import { toast } from "react-hot-toast";
const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectedUSer);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [isOpen, setIsOpen] = useState(false);
  const login = async () => {
    if (!userInfo) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch(setUser(providerData[0]));
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      // toast.success("Is Login");
      setIsOpen(!isOpen);
    }
  };

  const logout = () => {
    dispatch(isLogout());
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 p-3 px-4 md:p-6 md:px-16">
        {/* Desktop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-8 object-cover" />
            <p className="text-slate-900 text-xl font-bold">Restaurant</p>
          </Link>
          <div className="flex items-center gap-8">
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-8"
            >
              <li onClick={() => setIsOpen(false)} className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                Home
              </li>
              <li onClick={() => setIsOpen(false)} className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                Menu
              </li>
              <li onClick={() => setIsOpen(false)} className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                About Us
              </li>
              <li onClick={() => setIsOpen(false)} className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                Service
              </li>
            </motion.ul>
            <div className="relative flex items-center justify-center">
              <FcPaid className="icon-style" />
              <div className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-theme flex items-center justify-center">
                <p className="text-xs text-slate-900 font-bold">2</p>
              </div>
            </div>
            <div className="relative ">
              <motion.img
                whileTap={{ scale: 0.7 }}
                src={userInfo ? userInfo.photoURL : Avatar}
                alt="avatar"
                className="w-8 min-w-[40px] min-h-[40px] cursor-pointer drop-shadow-xl rounded-full "
                onClick={login}
              />
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className={`w-40 bg-primary shadow-xl rounded-lg absolute flex flex-col px-4 py-2 top-12 right-0`}
                >
                  <Link to={"/createItem"}>
                    <p onClick={() => setIsOpen(false)} className="flex items-center  py-2 gap-3 justify-around hover:text-orange-500 transition-all duration-300 cursor-pointer text-base font-semibold text-slate-900">
                      New Item <FcShop className="icon-style" />
                    </p>
                  </Link>
                  <p
                    onClick={logout}
                    className="flex items-center  py-2 gap-3 justify-around hover:text-orange-500 transition-all duration-300 cursor-pointer text-base font-semibold text-slate-900"
                  >
                    Log Out <FcUnlock className="icon-style" />
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
          
          <div className="relative flex items-center justify-center">
              <FcPaid className="icon-style" />
              <div className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-theme flex items-center justify-center">
                <p className="text-xs text-slate-900 font-bold">2</p>
              </div>
            </div>
            <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-8 object-cover" />
            <p className="text-slate-900 text-xl font-bold">Restaurant</p>
          </Link>
          <div className="relative ">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={userInfo ? userInfo.photoURL : Avatar}
              alt="avatar"
              className="w-8 min-w-[40px] min-h-[40px] cursor-pointer drop-shadow-xl rounded-full "
              onClick={login}
            />
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className={`w-40 bg-primary shadow-xl rounded-lg absolute flex flex-col p-4 top-12 right-0 gap-4`}
              >
                <Link to={"/createItem"}>
                  <p className="flex items-center gap-3 justify-start hover:text-orange-500 transition-all duration-300 cursor-pointer text-base font-semibold text-slate-900">
                    New Item <FcShop className="icon-style" />
                  </p>
                </Link>
                <ul className="flex flex-col items-start gap-4">
                  <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                    Home
                  </li>
                  <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                    Menu
                  </li>
                  <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                    About Us
                  </li>
                  <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
                    Service
                  </li>
                </ul>
                <p
                  onClick={logout}
                  className=" flex items-center justify-center gap-3 hover:text-red-800 transition-all duration-300 cursor-pointer text-base font-bold text-red-400"
                >
                  Log Out <FcUnlock className="icon-style" />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
