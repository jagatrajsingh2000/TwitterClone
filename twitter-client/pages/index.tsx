import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];
export default function Home() {
  return (
    <div className="inter.className">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 mr-10 ">
          <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-smeibold">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-2 py-2 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] font-semibold text-lg   p-4 rounded-full w-full">
              Tweet
              </button>
              </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-grey-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
