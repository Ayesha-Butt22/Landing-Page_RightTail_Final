import type { NextPage } from "next";
import Image from "next/image";

export type Header2Type = {
  className?: string;
};

const Header2: NextPage<Header2Type> = ({ className = "" }) => {
  return (
    <main
      className={`w-[1440px] flex flex-col items-center justify-center !pt-spacing-161 !pb-spacing-161 !pl-0 !pr-0 box-border gap-spacing-16 z-[8] shrink-0 mq450:gap-4 mq450:!pt-5 mq450:!pb-5 mq450:box-border mq750:gap-8 mq1100:!pt-[27px] mq1100:!pb-[27px] mq1100:box-border mq1275:!pt-[42px] mq1275:!pb-[42px] mq1275:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center !pt-spacing-20 !pb-spacing-20 !pl-0 !pr-0 relative isolate gap-spacing-9 mq750:gap-[18px] mq750:!pt-[34px] mq750:!pb-[34px] mq750:box-border mq1275:!pt-[52px] mq1275:!pb-[52px] mq1275:box-border">
        <div className="w-screens-md1 h-12 !!m-[0 important] absolute top-[80px] left-[336px] flex flex-col items-center justify-center z-[0]" />
        <div className="w-screens-lg flex items-center justify-center relative isolate gap-9 z-[1] mq750:gap-[18px]">
          <div className="h-[466.1px] w-[491.6px] absolute !!m-[0 important] top-[927px] left-[calc(50%_-_246.3px)] [filter:blur(392.5px)] overflow-hidden flex items-center justify-center z-[0] shrink-0">
            <Image
              className="h-full w-full [filter:blur(392.5px)] object-cover absolute left-[0px] top-[0px] [transform:scale(2.299)]"
              width={491.6}
              height={466.1}
              sizes="100vw"
              alt=""
              src="/Vector1.svg"
            />
          </div>
          <div className="h-[493px] w-[1440px] absolute !!m-[0 important] top-[1180px] left-[-208px] rounded-[50%] [background:#1c1c1c_padding-box,_linear-gradient(180deg,_#a0a0a0,_rgba(80,_80,_80,_0))_border-box] [border:2px_solid_transparent] box-border z-[1] shrink-0" />
          <div className="flex-1 flex flex-col items-start gap-spacing-12 z-[2] shrink-0 mq750:gap-6">
            <Image
              className="self-stretch h-[480px] relative rounded-borderradius-rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              width={494}
              height={480}
              sizes="100vw"
              alt=""
              src="/Frame-1707479353@2x.png"
            />
            <section className="self-stretch flex flex-col items-start gap-[30px] text-left text-xl text-fg-text-contrast font-['DM_Sans']">
              <h2 className="!m-0 self-stretch relative text-4xl tracking-[0.01em] leading-10 font-semibold font-[inherit] text-fg-text mq450:text-[22px] mq450:leading-6 mq750:text-[29px] mq750:leading-8">
                <span>{`Lorem Ipsum `}</span>
                <span className="text-fg-text-contrast">{`Dolar Sed `}</span>
                <span>congue</span>
              </h2>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
            </section>
          </div>
          <div className="flex-1 flex flex-col items-start gap-spacing-12 z-[3] shrink-0 mq750:gap-6">
            <Image
              className="self-stretch h-[480px] relative rounded-borderradius-rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              width={494}
              height={480}
              sizes="100vw"
              alt=""
              src="/Frame-17074793531@2x.png"
            />
            <section className="self-stretch flex flex-col items-start gap-[30px] text-left text-xl text-fg-text-contrast font-['DM_Sans']">
              <h2 className="!m-0 self-stretch relative text-4xl tracking-[0.01em] leading-10 font-semibold font-[inherit] text-fg-text mq450:text-[22px] mq450:leading-6 mq750:text-[29px] mq750:leading-8">
                <span>{`Lorem Ipsum `}</span>
                <span className="text-fg-text-contrast">{`Dolar Sed `}</span>
                <span>congue</span>
              </h2>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
              <div className="self-stretch flex items-center flex-wrap content-center gap-2.5">
                <Image
                  className="h-[38px] w-[38px] relative"
                  width={38}
                  height={38}
                  sizes="100vw"
                  alt=""
                  src="/Icons-CheckCircle.svg"
                />
                <div className="flex-1 relative tracking-[0.01em] leading-7 inline-block min-w-[290px] mq450:text-base mq450:leading-[22px]">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                  Consectetur enim nulla risus elementum mattis.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Image
        className="w-[699.6px] h-[298.5px] relative"
        width={699.6}
        height={298.5}
        sizes="100vw"
        alt=""
        src="/Group-2.svg"
      />
    </main>
  );
};

export default Header2;
