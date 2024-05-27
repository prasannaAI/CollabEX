import React from "react";
import {FloatingNav} from "@/app/_layout/topbar/Navbar";

const Topbar = () => {

  return (
    <FloatingNav
      navItems={[
        {
          name: "Sectors",
          link: "#sectors",
        },
        {
          name: "Solutions",
          link: "#solutions",
        },
        {
          name: "Programmes",
          link: "#programmes",
        },
        {
          name: "About",
          link: "#about",
        },
      ]}
    />
  )
};

export default Topbar;