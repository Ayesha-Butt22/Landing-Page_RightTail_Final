import type { NextPage } from "next";
import Image from "next/image";

export type TestimonialCardType = {
  className?: string;
  clientImage: string;
  floydMiles?: string;
  magnisLacusLaoreetPharetra?: string;
};

const TestimonialCard: NextPage<TestimonialCardType> = ({
  className = "",
  clientImage,
  floydMiles,
  magnisLacusLaoreetPharetra,
}) => {
  return (
    <div
      className={`w-sizing-80 shadow-[0px_4px_3px_rgba(80,_80,_80,_0.07),_0px_2px_2px_rgba(80,_80,_80,_0.06)] rounded-borderradius-rounded-2xl1 bg-secondary-bg border-secondary-bg-active border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center !pt-[30px] !pb-[30px] !pl-[31px] !pr-[31px] gap-spacing-22 text-left text-lg text-fg-text-contrast font-['DM_Sans'] ${className}`}
    >
      <div className="self-stretch flex items-center gap-3.5">
        <Image
          className="h-sizing-121 w-sizing-121 relative rounded-[50%] object-cover"
          width={48}
          height={48}
          sizes="100vw"
          alt=""
          src={clientImage}
        />
        <b className="relative tracking-[0.01em] leading-7">{floydMiles}</b>
      </div>
      <div className="self-stretch relative text-base tracking-[0.01em] leading-6 font-medium text-secondary-text">
        {magnisLacusLaoreetPharetra}
      </div>
    </div>
  );
};

export default TestimonialCard;
