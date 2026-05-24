"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Selector from "./selector";

export type Header5Type = {
  className?: string;
};

const Header5: NextPage<Header5Type> = ({ className = "" }) => {
  const [selectorItems] = useState([
    {
      active: "On" as const,
      link: "Feature 1",
    },
    {
      active: "Off" as const,
      link: "Feature 2",
    },
    {
      active: "Off" as const,
      link: "Feature 3",
    },
  ]);
  return (
    <section
      className={`w-[1440px] flex flex-col items-center justify-center !pt-spacing-20 !pb-spacing-20 !pl-0 !pr-0 box-border z-[9] shrink-0 text-left text-5xl text-fg-text-contrast font-['DM_Sans'] mq450:gap-4 mq750:gap-8 mq750:!pt-[52px] mq750:!pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-center !pt-spacing-16 !pb-spacing-16 !pl-0 !pr-0 box-border gap-spacing-9 max-w-full mq750:gap-[18px] mq750:!pt-[42px] mq750:!pb-[42px] mq750:box-border">
        <div className="w-screens-md1 flex flex-col items-center justify-center">
          <h1 className="!m-0 relative text-[length:inherit] tracking-[0.01em] leading-[100%] font-semibold font-[inherit] mq450:text-[29px] mq450:leading-[29px] mq750:text-[38px] mq750:leading-[38px]">
            Lorem ipsum dolor
          </h1>
        </div>
        <section className="w-screens-lg flex items-center gap-spacing-81 text-center text-xl text-fg-text-contrast font-['DM_Sans'] mq750:gap-4">
          <div className="self-stretch flex-1 flex flex-col items-start gap-spacing-61">
            {selectorItems.map((item, index) => (
              <Selector key={index} active={item.active} link={item.link} />
            ))}
          </div>
          <Image
            className="h-[350px] w-[500px] rounded-borderradius-rounded-xl object-cover"
            loading="lazy"
            width={500}
            height={350}
            sizes="100vw"
            alt=""
            src="/Prompt-library-sideover-Predefine-prompts@2x.png"
          />
        </section>
      </div>
    </section>
  );
};

export default Header5;
