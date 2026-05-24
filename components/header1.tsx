import type { NextPage } from "next";
import Image from "next/image";
import Logo1 from "./logo1";

export type Header1Type = {
  className?: string;
};

const Header1: NextPage<Header1Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] flex flex-col items-center justify-center !pt-spacing-14 !pb-spacing-14 !pl-spacing-02 !pr-spacing-02 box-border z-[12] shrink-0 text-left text-[25.4px] text-fg-text-contrast font-[Roboto] mq450:gap-4 mq750:gap-8 ${className}`}
    >
      <div className="w-screens-xl1 flex flex-col items-center gap-spacing-42">
        <div className="self-stretch flex items-end justify-between flex-wrap content-end gap-0 [row-gap:20px]">
          <div className="h-6 flex-1 flex items-center min-w-[329px]">
            <Logo1 />
          </div>
          <div className="relative text-sm tracking-[0.01em] leading-5 font-['DM_Sans']">
            © 2024 by PentAi. All rights are reserved.
          </div>
          <div className="h-6 flex-1 flex flex-col items-end justify-center min-w-[329px]">
            <div className="flex items-center justify-end gap-3">
              <Image
                className="h-6 w-6 relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/Icon-Facebook.svg"
              />
              <Image
                className="h-6 w-6 relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/Icon-Instagram.svg"
              />
              <Image
                className="h-6 w-6 relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/Icon-X.svg"
              />
              <Image
                className="h-6 w-6 relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/Icon-LinkedIn.svg"
              />
              <Image
                className="h-6 w-6 relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/Icon-Youtube.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center gap-spacing-3 text-sm font-['DM_Sans']">
          <div className="self-stretch flex flex-col items-center justify-center !pt-spacing-23 !pb-spacing-23 !pl-spacing-02 !pr-spacing-02">
            <div className="self-stretch h-px relative bg-secondary-solid" />
          </div>
          <div className="self-stretch flex items-start justify-between gap-5 mq750:flex-wrap mq750:gap-5">
            <div className="relative tracking-[0.01em] leading-5 font-medium">
              Realised by Right Tail Corp.
            </div>
            <div className="w-[268px] flex items-center justify-end gap-[9px]">
              <div className="relative tracking-[0.01em] leading-5 font-medium">
                Privacy Policy
              </div>
              <div className="relative tracking-[0.01em] leading-5 font-medium">
                Terms of Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header1;
