"use client";
import type { NextPage } from "next";
import { useState } from "react";
import FeatureItems from "./feature-items";

export type Header3Type = {
  className?: string;
};

const Header3: NextPage<Header3Type> = ({ className = "" }) => {
  const [featureItemsItems] = useState([
    {
      union: "/Union1.svg",
    },
    {
      union: "/Union1.svg",
    },
    {
      union: "/Union1.svg",
    },
  ]);
  return (
    <section
      className={`w-[1440px] flex flex-col items-center justify-center !pt-spacing-20 !pb-spacing-20 !pl-0 !pr-0 box-border z-[5] shrink-0 text-center text-5xl font-['DM_Sans'] mq450:gap-4 mq750:gap-8 mq750:!pt-[52px] mq750:!pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-center !pt-spacing-16 !pb-spacing-16 !pl-0 !pr-0 box-border gap-spacing-9 max-w-full mq750:gap-[18px] mq750:!pt-[42px] mq750:!pb-[42px] mq750:box-border">
        <div className="w-screens-md1 flex flex-col items-center justify-center">
          <div className="w-screens-sm relative tracking-[0.01em] leading-[100%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(92.48deg,_#7e7e7e_2.41%,_#fff_69.57%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[29px] mq450:leading-[29px] mq750:text-[38px] mq750:leading-[38px]">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
        <section className="w-screens-lg flex items-center justify-center gap-9 text-center text-8xl text-fg-text-contrast font-['DM_Sans'] mq750:gap-[18px]">
          {featureItemsItems.map((item, index) => (
            <FeatureItems key={index} union={item.union} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Header3;
