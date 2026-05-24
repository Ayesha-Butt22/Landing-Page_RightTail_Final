import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "./frame-component1";

export type Header4Type = {
  className?: string;
};

const Header4: NextPage<Header4Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] flex flex-col items-center justify-center !pt-spacing-20 !pb-spacing-20 !pl-0 !pr-0 box-border max-w-full z-[7] shrink-0 text-left text-5xl text-fg-default-fg font-['DM_Sans'] mq750:gap-4 mq750:!pt-[52px] mq750:!pb-[52px] mq750:box-border mq1100:gap-8 ${className}`}
    >
      <div className="w-screens-lg overflow-hidden flex items-start max-w-full">
        <div className="w-[380px] flex flex-col items-start justify-center gap-[30px]">
          <h1 className="!m-0 w-[330px] relative text-[length:inherit] tracking-[0.01em] leading-[100%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(92.48deg,_#7e7e7e_2.41%,_#fff_69.57%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[29px] mq450:leading-[29px] mq750:text-[38px] mq750:leading-[38px]">
            Lorem Ipsum Dollar
          </h1>
          <div className="w-[263px] relative text-base tracking-[0.01em] leading-6 inline-block">
            Consequat netus consequat tortor <br />
            vitae cursus nullam tincidunt <br />
            urna. Tristique leo consequat
          </div>
          <Image
            className="w-[286px] h-[286px] relative object-contain"
            width={286}
            height={286}
            sizes="100vw"
            alt=""
            src="/lock-front@2x.png"
          />
        </div>
        <section className="h-[566px] w-[637px] overflow-hidden shrink-0 flex flex-col items-end !pt-6 !pb-[27px] !pl-[23px] !pr-[26px] box-border gap-6 max-w-full text-center text-xl text-fg-text-contrast font-['DM_Sans'] mq750:h-auto mq750:!pt-5 mq750:!pb-5 mq750:box-border">
          <div className="flex items-start gap-6 mq750:flex-wrap">
            <FrameComponent1 iconsLockLaminated="/Icons-LockLaminated.svg" />
            <FrameComponent1
              frameDivWidth="288px"
              iconsLockLaminated="/Icons-SecurityCamera.svg"
              lockLaminatedIconWidth="44px"
              lockLaminatedIconHeight="44px"
            />
          </div>
          <div className="flex items-start gap-[33px] max-w-full mq750:gap-4 mq750:flex-wrap">
            <div className="flex flex-col items-end gap-5 max-w-full mq450:min-w-full mq750:flex-1">
              <div className="w-[255px] h-[157px] [backdrop-filter:blur(5.2px)] rounded-[15.7px] [background:#282828_padding-box,_linear-gradient(239.29deg,_#3d3d3d,_rgba(160,_160,_160,_0.04))_border-box] [border:1.3px_solid_transparent] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center relative isolate gap-[9.2px] z-[2]">
                <Image
                  className="w-[50px] h-[50px] relative z-[0] shrink-0"
                  width={50}
                  height={50}
                  sizes="100vw"
                  alt=""
                  src="/Icons-Fingerprint.svg"
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
              <div className="flex items-start justify-center gap-6 mq450:flex-wrap">
                <FrameComponent1
                  frameDivWidth="169px"
                  iconsLockLaminated="/Icons-ShieldCheck.svg"
                  lockLaminatedIconWidth="40px"
                  lockLaminatedIconHeight="40px"
                />
                <FrameComponent1
                  frameDivWidth="169px"
                  iconsLockLaminated="/Icons-Wall.svg"
                  lockLaminatedIconWidth="40px"
                  lockLaminatedIconHeight="40px"
                />
              </div>
            </div>
            <div className="h-[334px] w-[193px] [backdrop-filter:blur(5.2px)] rounded-[15.7px] [background:#282828_padding-box,_linear-gradient(239.29deg,_#3d3d3d,_rgba(160,_160,_160,_0.04))_border-box] [border:1.3px_solid_transparent] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center relative isolate gap-[9.2px] mq750:flex-1">
              <Image
                className="w-[50px] h-[50px] relative z-[0] shrink-0"
                loading="lazy"
                width={50}
                height={50}
                sizes="100vw"
                alt=""
                src="/Icons-ShieldWarning.svg"
              />
              <div className="w-[146.5px] relative tracking-[0.01em] leading-7 font-semibold inline-block z-[1] shrink-0 mq450:text-base mq450:leading-[22px]">
                Lorem Ipsum Dollar
              </div>
              <div className="w-[246.3px] h-[367.9px] absolute !!m-[0 important] top-[-341.5px] left-[115.2px] [filter:blur(392.5px)] overflow-hidden flex items-center justify-center z-[2] shrink-0">
                <Image
                  className="w-full h-full [filter:blur(392.5px)] object-cover absolute left-[0px] top-[325px] [transform:scale(1)]"
                  loading="lazy"
                  width={246.3}
                  height={367.9}
                  sizes="100vw"
                  alt=""
                  src="/Vector1.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Header4;
