import React from "react";
import Image from "next/image";

const Partner = () => (
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
          Our Partner
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="/logo/kattancoffee.png"
            alt="Logo"
            width={258}
            height={48}
          />
        </div>
      </div>
    </div>
  </>
);

export default Partner;
