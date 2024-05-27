import React from "react";
import MovingButton from "@/components/MovingButton";
import Image from "next/image";
import Link from "next/link";

const LandingHeader = () => (
  <div className="relative min-h-screen bg-amber-50/50 max-w-screen overflow-hidden">
    <div
      className="flex min-h-screen md:justify-center items-center bg-repeat"
      style={{
        background: `url('/bg/yellow-noise.svg')`,
      }}
    >
      <Image
        src="/illustrations/business-success.svg"
        alt=""
        width={720}
        height={720}
        draggable="false"
        className={`absolute hidden md:block bottom-0 right-0 md:translate-x-[100px] lg:translate-x-[140px]   xl:translate-x-[180px] 2xl:translate-x-[300px] translate-y-[5vw] h-[150px] w-auto md:h-[300px] md:w-1/2 lg:h-[400px] lg:w-1/2 xl:h-[420px] xl:w-1/2 2xl:h-[600px] 2xl:w-1/2   `}
      />
      <Image
        src="/illustrations/problem-solving.svg"
        alt=""
        height={600}
        width={600}
        draggable="false"
        className="absolute hidden md:block left-0 bottom-0 md:-translate-x-[100px] lg:-translate-x-[140px] xl:-translate-x-[180px] 2xl:-translate-x-[320px] translate-y-[5vw] h-[150px] w-auto md:h-[300px] md:w-1/2 lg:h-[400px] lg:w-1/2 xl:h-[420px] xl:w-1/2 2xl:h-[600px] 2xl:w-1/2 "

        // className="absolute hidden md:block left-0 bottom-0 md:-translate-x-[200px] xl:-translate-x-[50px] translate-y-[5vw] "
      />
      <div className="container min-h-[30vh] md:text-center  mx-auto px-8 z-[100]">
        <div className="flex justify-center flex-col gap-2 md:items-center">
          <div
            className="flex flex-col gap-3 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-7xl md:max-w-[1100px]"
            style={{ lineHeight: 1.2 }}
          >
            <div className="inline-flex flex-col items-start md:block gap-2  ">
              Upskilling{" "}
              <span className="bg-green-100 text-green-600 px-3 py-1 md:px-6 rounded-full inline-block">
                🏌️ Talents
              </span>
            </div>
            <div className="inline-flex flex-col items-start md:block gap-2">
              Enabling{" "}
              <span className="bg-blue-100 text-blue-600 px-3 py-1 md:px-6 rounded-full inline-block">
                🚀 Innovations
              </span>
            </div>
            <div className="inline-flex flex-col items-start md:block gap-2">
              Delivering{" "}
              <span className="bg-amber-100 text-amber-600 px-3 py-1 md:px-6 rounded-full inline-block">
                💰 Solutions
              </span>
            </div>
          </div>
          <div className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl mt-4 lg:mt-6 text-justify md:text-center md:max-w-[620px] lg:max-w-[720px]">
            We connect and collaborate stakeholders together, bringing our
            expertise to deliver results that matter.
          </div>
          <div className="mt-6">
            <Link href="/contact">
              <MovingButton className="w-full shadow-lg md:w-fit">
                Let{`'`}s Collaborate
                <i className="ri-arrow-right-line ml-2" />
              </MovingButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingHeader;
