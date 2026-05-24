import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center !pt-spacing-20 !pb-spacing-20 !pl-0 !pr-0 relative isolate gap-spacing-9 z-[4] shrink-0 mq750:gap-[18px] mq750:!pt-[34px] mq750:!pb-[34px] mq750:box-border mq1100:!pt-[52px] mq1100:!pb-[52px] mq1100:box-border ${className}`}
    >
      <Image
        className="w-[752px] h-[239px] absolute !!m-[0 important] top-[744px] left-[796px] [filter:blur(300px)] z-[0] shrink-0"
        loading="lazy"
        width={752}
        height={239}
        sizes="100vw"
        alt=""
        src="/Vector1.svg"
      />
      <div className="w-screens-lg overflow-hidden flex flex-col items-center gap-9 z-[1] shrink-0 mq750:gap-[18px]">
        <section className="w-screens-lg1 flex flex-col items-center justify-center gap-spacing-3 text-left text-sm text-fg-text-contrast font-['DM_Sans']">
          <div className="self-stretch flex flex-col items-center justify-center gap-spacing-35">
            <div className="relative tracking-[0.01em] leading-5 font-medium hidden">
              LOREM IPSUM
            </div>
            <div className="w-screens-sm relative text-5xl tracking-[0.01em] leading-[100%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(92.48deg,_#7e7e7e_2.41%,_#fff_69.57%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block mq450:text-[29px] mq450:leading-[29px] mq750:text-[38px] mq750:leading-[38px]">
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="w-screens-sm relative text-lg tracking-[0.01em] leading-7 font-medium text-center inline-block">{`Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla `}</div>
        </section>
        <Image
          className="w-[1024px] h-[691px] rounded-[7.1px] object-cover"
          width={1024}
          height={691}
          sizes="100vw"
          alt=""
          src="/Dashboard@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
