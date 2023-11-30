import Image from "next/image";
import React from "react";

const Animation = () => {
  return (
    <div className="hidden md:block absolute right-0 w-[80%] h-[100%]">
      <div className="relative bg-blue w-full h-full">
        <div className="z-10 absolute bottom-[20%] left-3 h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/tape-measure.png"
            alt="Measuring"
            width={50}
            height={50}
            className="w-auto h-auto bg-gray-100 py-3 px-3 rounded-full"
          />
          <span className="font-semibold text-white">Measuring</span>
        </div>

        <div className="z-10 group absolute top-[44%] left-[20%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/airplane.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
          />
          <Image
            src="/planeReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -bottom-[8rem] left-0 rounded-lg"
          />
        </div>

        <div className="z-10 group absolute bottom-[5%] left-[20%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/ship.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
          />
          <Image
            src="/shipReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -top-[9rem] left-0 rounded-lg"
          />
        </div>

        <div className="z-10 group absolute bottom-[5%] left-[55%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/high-speed-train.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
          />
          <Image
            src="/trainReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -top-[9rem] left-0 rounded-lg"
          />
        </div>

        <div className="z-10 group absolute bottom-[5%] right-[8%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/electric-car.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
          />
          <Image
            src="/carReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -top-[9rem] left-0 rounded-lg"
          />
        </div>

        <div className="z-10 absolute top-[15%] right-[10%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/phone-vibration.png"
            alt="Measuring"
            width={70}
            height={70}
            className="w-auto h-auto bg-contain px-2 py-2 bg-gray-100 !object-contain rounded-full"
          />
          <span className="font-semibold text-white text-lg">
            Smart in Motion
          </span>
        </div>

        <div className="z-10 absolute top-[40%] right-[35%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/search.png"
            alt="Measuring"
            width={50}
            height={50}
            className="w-auto h-auto bg-contain px-2 py-2 bg-gray-100 !object-contain rounded-full"
          />
          <span className="font-semibold text-white text-base">Analysing</span>
        </div>

        <div className="z-10 absolute bottom-[35%] right-[2%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/quality-control.png"
            alt="Measuring"
            width={40}
            height={40}
            className="w-auto h-auto bg-contain px-2 py-2 bg-gray-100 !object-contain rounded-full"
          />
          <span className="font-semibold text-white text-sm">Testing</span>
        </div>

        <div className="z-10 absolute bottom-[25%] left-[40%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/check.png"
            alt="Measuring"
            width={50}
            height={50}
            className="w-auto h-auto bg-contain px-2 py-2 bg-gray-100 !object-contain rounded-full"
          />
          <span className="font-semibold text-white">Testing</span>
        </div>

        <div className="-z-1 absolute bottom-[20%] left-[7%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] rotate-[30deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[45%] left-[27%] rounded-md bg-gradient-to-r from-red-500 to-black/10 w-[14%] h-[5px] !rotate-[20deg] animateScale"></div>
        <div className="-z-1 absolute bottom-[22%] left-[45%] rounded-md bg-gradient-to-r from-blue-500 to-black/10 w-[14%] h-[5px] rotate-[37deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[45%] left-[45%] rounded-md bg-gradient-to-r from-green-500 to-black/10 w-[14%] h-[5px] -rotate-[35deg] dashed-line"></div>
        <div className="-z-1 absolute top-[35%] right-[20%] rounded-md bg-gradient-to-r from-green-500 to-black/10 w-[16%] h-[5px] -rotate-[30deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[40%] left-[7%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] rotate-[150deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[30%] left-[17%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] rotate-[90deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[30%] left-[17%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] rotate-[270deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[31%] left-[9%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[30%] h-[5px] -rotate-[4deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[10%] left-[27.5%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[27%] h-[5px] rotate-[deg] dashed-line"></div>
        <div className="-z-1 absolute bottom-[10%] left-[63%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[20%] h-[5px] rotate-[deg] dashed-line"></div>
      </div>
    </div>
  );
};

export default Animation;
