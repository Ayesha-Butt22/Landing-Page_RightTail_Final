"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
  iconsLockLaminated: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  lockLaminatedIconWidth?: CSSProperties["width"];
  lockLaminatedIconHeight?: CSSProperties["height"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameDivWidth,
  iconsLockLaminated,
  lockLaminatedIconWidth,
  lockLaminatedIconHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const lockLaminatedIconStyle: CSSProperties = useMemo(() => {
    return {
      width: lockLaminatedIconWidth,
      height: lockLaminatedIconHeight,
    };
  }, [lockLaminatedIconWidth, lockLaminatedIconHeight]);

  return (
    <div
      className={`h-[157px] w-[169px] [backdrop-filter:blur(5.2px)] rounded-[15.7px] [background:#282828_padding-box,_linear-gradient(239.29deg,_#3d3d3d,_rgba(160,_160,_160,_0.04))_border-box] [border:1.3px_solid_transparent] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center relative isolate gap-[9.2px] text-center text-xl text-fg-text-contrast font-['DM_Sans'] mq750:flex-1 ${className}`}
      style={frameDivStyle}
    >
      <Image
        className="w-10 h-10 relative z-[0] shrink-0"
        width={40}
        height={40}
        sizes="100vw"
        alt=""
        src={iconsLockLaminated}
        style={lockLaminatedIconStyle}
      />
      <div className="w-[146.5px] relative tracking-[0.01em] leading-7 font-semibold inline-block z-[1] shrink-0 mq450:text-base mq450:leading-[22px]">
        Lorem Ipsum Dollar
      </div>
      <div className="w-[246.3px] h-[367.9px] absolute !!m-[0 important] top-[-341.5px] left-[115.2px] [filter:blur(392.5px)] overflow-hidden flex items-center justify-center z-[2] shrink-0">
        <Image
          className="w-full h-full [filter:blur(392.5px)] object-cover absolute left-[0px] top-[236px] [transform:scale(1)]"
          width={246.3}
          height={367.9}
          sizes="100vw"
          alt=""
          src="/Vector1.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
