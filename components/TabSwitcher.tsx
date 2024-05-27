'use client';
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const TabSwitcher = ({
  active, setActive, tabClassName, activeTabClassName, tabs,
}: {
  active: any,
  setActive: (active: any) => void,
  tabs: any[],
  tabClassName: string,
  activeTabClassName: string,
}) => {

  return (
    <React.Fragment>
      {tabs.map((tab: any) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab)}
          className={clsx(["relative px-4 py-2 rounded-full", tabClassName, tab?.className ])}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {active.id === tab.id && (
            <motion.div
              layoutId="clickedbutton"
              transition={{type: "spring", bounce: 0.3, duration: 0.6}}
              className={clsx([
                "absolute inset-0 rounded-full ",
                tab?.activeClassName,
                activeTabClassName
              ])}
            />
          )}
          <span className="relative block">
              {tab.title}
            </span>
        </button>
      ))}
    </React.Fragment>
  );

};

export default TabSwitcher;