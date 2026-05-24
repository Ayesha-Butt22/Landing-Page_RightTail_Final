import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";

export type LogoType = {
  className?: string;

  /** Variant props */
  size?: CSSProperties["size"];
  theme?: CSSProperties["theme"];
};

const Logo: NextPage<LogoType> = ({
  className = "",
  size = "lg",
  theme = "light",
}) => {
  return (
    <div
      className={`h-[53.2px] w-[120px] relative text-left text-[38.6px] text-fg-default-fg font-[Roboto] ${className}`}
    >
      <div className="absolute top-[12.2px] left-[0px] flex items-center justify-center isolate shrink-0">
        <h2 className="!m-0 w-[117px] relative text-[length:inherit] font-bold font-[inherit] flex items-center shrink-0 z-[0]">
          <span className="[line-break:anywhere] w-full">
            <span>Pent</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(-27.5deg,_#301a3a,_#7938b2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              A
            </span>
          </span>
        </h2>
        <Image
          className="h-[21.9px] w-[21.3px] absolute !!m-[0 important] top-[-7.6px] left-[98.7px] object-cover z-[1] shrink-0"
          width={21.3}
          height={21.9}
          sizes="100vw"
          alt=""
          src="/Logo-Mark@2x.png"
        />
      </div>
      <Image
        className="absolute top-[28.1px] left-[107.1px] w-[5.3px] h-[20.5px] shrink-0"
        loading="lazy"
        width={5.3}
        height={20.5}
        sizes="100vw"
        alt=""
        src="/Vector-1.svg"
      />
    </div>
  );
};

export default Logo;
