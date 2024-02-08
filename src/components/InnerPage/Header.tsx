import { AuthContext } from "@/context/authContext";
import Image from "next/image";
import { FC, useContext } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  openSignUpModal: () => void;
}

const Header: FC<IProps> = ({ openSignUpModal }) => {
  const {
    state: {
      auth: { user },
    },
  } = useContext(AuthContext);
  const menu = [
    {
      name: "Learn",
      logo: "/images/header/learn.svg",
      url: "/",
      active: true,
      width: 14,
      height: 18,
    },
    {
      name: "Code",
      logo: "/images/header/code.svg",
      url: "/",
      active: false,
      width: 16,
      height: 16,
    },
    {
      name: "Discuss",
      url: "/",
      logo: "/images/header/discuss.svg",
      active: false,
      width: 19,
      height: 18,
    },
    {
      name: "Institutions",
      url: "/",
      logo: "/images/header/institutions.svg",
      active: false,
      width: 20,
      height: 19,
    },
  ];

  return (
    <div className="bg-black100 flex items-center h-[50px]  w-full ">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <Image
            style={{ objectFit: "contain" }}
            width={130}
            height={30}
            alt="logo"
            src="/images/logo.png"
          />
          <div className="flex items-center">
            {menu.map(({ name, url, active, logo, width, height }) => (
              <div className="flex items-center" key={name}>
                <Image
                  style={{ objectFit: "contain" }}
                  width={width}
                  height={height}
                  alt="logo"
                  src={logo}
                />
                <a
                  key={name}
                  href={url}
                  className={twMerge(
                    "flex items-center h-[22px] mr-[40px] ml-[9px] justify-center  text-white text-[14px] font-normal",
                    active && "bg-gradient-to-r from-brown to-brown-light"
                  )}
                >
                  {name}
                </a>
              </div>
            ))}
          </div>
          {user ? (
            <a href="/profile">
              <div className="flex items-center cursor-pointer">
                <div className="rounded-full border-2 border-[#00b2ff] w-[30px] h-[30px] relative overflow-hidden mr-[10px]">
                  <Image fill alt="" src="/images/header/avatar.svg" />
                </div>
                <p className="text-[17px] text-[#00b2ff] font-normal">
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </a>
          ) : (
            <button
              onClick={openSignUpModal}
              className="w-[208px] h-[37px] rounded-[4px] flex bg-blue200 text-white items-center justify-center"
            >
              Get Started for Free
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
