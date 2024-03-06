import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-r-0 border-l-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/44976328?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Piyush Garg</h5>
          <p>
            This administration is both importing voters and creating a national
            security threat from unvetted illegal immigrants. It is highly
            probable that the groundwork is being laid for something far worse
            than 9/11. Just a matter of time.
          </p>
          <div className="flex justify-between mt-5 text-lg items-center p-2 w-[90%]">
            <div>
                <BiMessageRounded />
            </div>
            <div>
                <FaRetweet />
            </div>
            <div>
                <AiOutlineHeart  />
            </div>
            <div>
                <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
