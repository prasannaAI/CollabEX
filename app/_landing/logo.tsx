import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    id: 1,
    src: "/logo/img1.png",
    className: "col-span-2 max-h-20 w-full object-contain lg:col-span-1",
  },
  {
    id: 2,
    src: "/logo/img8.png",
    className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    id: 3,
    src: "/logo/img3.png",
    className: "col-span-2 max-h-20 w-full object-contain lg:col-span-1",
  },
  {
    id: 4,
    src: "/logo/img4.png",
    className: "col-span-2 max-h-20 w-full object-contain lg:col-span-1",
  },
  {
    id: 5,
    src: "/logo/img5.png",
    className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    id: 6,
    src: "/logo/img6.png",
    className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    id: 7,
    src: "/logo/img7.png",
    className: "col-span-2 max-h-14 w-full object-contain lg:col-span-1",
  },
  {
    id: 8,
    src: "/logo/img2.png",
    className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    id: 9,
    src: "/logo/img9.png",
    className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    id: 10,
    src: "/logo/img10.png",
    className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
];

const Logo = () => (
  <>
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className=" text-lg font-semibold leading-8 text-gray-900"
          style={{
            borderBottomRightRadius: "4px",
            borderBottom: "4px solid orange",
            display: "inline",
          }}
        >
          Our Valued Clients
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {IMAGES.map((image) => (
            <img
              key={image.id}
              className={image.className}
              src={image.src}
              alt="Logo"
              width={258}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Logo;
