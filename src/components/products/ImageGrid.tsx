import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <div className="container bg-white py-2 ">
      <div className=" flex flex-wrap md:-m-2">
        <div className="flex w-3/5 flex-wrap">
          <div className="w-full">
            <Image
              width={300}
              height={200}
              alt=""
              className="block h-full w-full object-cover object-center"
              src="/assets/img1.svg"
            />
          </div>
        </div>
        <div className="flex w-2/5 flex-wrap">
          <div className="w-full pl-2">
            <Image
              width={120}
              height={100}
              alt=""
              className="block h-full w-full object-cover object-center"
              src="/assets/img.svg"
            />
          </div>
          <div className="w-1/2 p-1 pb-0 ">
            <Image
              width={120}
              height={100}
              alt=""
              className="block h-full w-full object-cover object-center"
              src="/assets/img2.svg"
            />
          </div>
          <div className="relative w-1/2 p-1 pb-0">
            <div className="relative">
              <Image
                width={120}
                height={100}
                alt=""
                className="block h-full w-full object-cover object-center opacity-75"
                src="/assets/img2.svg"
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded">
                +14 photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
