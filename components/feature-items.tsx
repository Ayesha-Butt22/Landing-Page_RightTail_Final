import type { NextPage } from "next";
import Image from "next/image";

export type FeatureItemsType = {
  className?: string;
  union: string;
};

const FeatureItems: NextPage<FeatureItemsType> = ({
  className = "",
  union,
}) => {
  return (
    <div
      className={`flex-1 rounded-borderradius-rounded-3xl flex flex-col items-center gap-2.5 text-center text-8xl text-fg-text-contrast font-['DM_Sans'] ${className}`}
    >
      <div className="self-stretch h-[200px] [backdrop-filter:blur(86.5px)] rounded-borderradius-rounded-3xl [background:#1c1c1c_padding-box,_linear-gradient(180.42deg,_#505050,_rgba(80,_80,_80,_0))_border-box] [border:1px_solid_transparent] box-border overflow-hidden shrink-0 flex items-center justify-center !p-[30px] relative isolate gap-2.5">
        <Image
          className="h-[254.5px] w-[415.5px] absolute !!m-[0 important] top-[89px] left-[-49px] z-[0] shrink-0"
          width={415.5}
          height={254.5}
          sizes="100vw"
          alt=""
          src={union}
        />
        <div className="h-[134.8px] w-[221px] absolute !!m-[0 important] top-[186px] left-[calc(50%_-_109.65px)] [filter:blur(148.7px)] rounded-[50%] bg-[#505050] z-[1] shrink-0" />
        <b className="relative tracking-[0.01em] leading-[100%] text-transparent !bg-clip-text [background:linear-gradient(166.07deg,_#7e7e7e_2.41%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2] shrink-0 mq450:text-[43px] mq450:leading-[58px] mq750:text-[58px] mq750:leading-[77px]">
          <span>23</span>
          <span className="text-7xl">%</span>
        </b>
      </div>
      <div className="self-stretch relative text-base tracking-[0.08px] leading-6">
        <span>{`Consequat netus `}</span>
        <b>consequat</b>
        <span>{` tortor vitae cursus nullam tincidunt urna. `}</span>
        <b>Tristique</b>
        <span> leo</span>
      </div>
    </div>
  );
};

export default FeatureItems;
