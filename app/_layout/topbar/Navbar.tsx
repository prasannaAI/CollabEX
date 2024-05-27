"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: string;
  }[];
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // @ts-ignore
    let direction = current - scrollYProgress.getPrevious();

    // if we're scrolling up, show the nav
    if (direction < 0) {
      setVisible(true);
    } else {
      // always show if in top
      if (scrollYProgress.get() < 0.1) setVisible(true);
      else setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={clsx([
          " md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px]  fixed top-5 left-2.5 right-2.5 md:top-5 2xl:top-10  shadow-lg z-[5000]",
          "inset-x-0 mx-auto border px-2 py-2 sm:px-5 sm:py-3 rounded-full bg-white",
        ])}
      >
        <div className="flex items-center justify-between space-x-3 sm:space-x-6">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div>
              <Link href="/">
                <Image
                  src="/collabrex-color-logo.png"
                  alt="Collabrex"
                  width={233.4}
                  height={40}
                  draggable={false}
                  className="w-[120px] md:w-[120px] lg:w-[140px] 2xl:w-[160px] pl-3 "
                />
              </Link>
            </div>
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={clsx([
                  "relative items-center text-lg flex space-x-1 text-neutral-600",
                ])}
              >
                <span className={`block sm:hidden ${navItem.icon}`} />
                <span className="hidden sm:block md:text-xs lg:text-sm xl:text-base 2xl:text-lg ">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="border font-semibold relative border-neutral-200 text-black md:text-xs lg:text-sm xl:text-sm 2xl:text-base px-3 py-2 hidden sm:block shadow rounded-full"
          >
            <span>
              Lets Start
              <i className="ri-arrow-right-line ml-2" />
            </span>
            <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[2px]" />
          </Link>
          <Link
            href="#contact"
            className="border relative border-neutral-200 text-black px-3 py-1 text-2xl sm:hidden block shadow rounded-full"
          >
            <span
              className={isMobileMenuOpen ? "ri-close-fill" : "ri-menu-fill"}
            />
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
