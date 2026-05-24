import type { NextPage } from "next";
import Image from "next/image";
import Page from "../components/page2";
import Button1 from "../components/button1";
import FrameComponent from "../components/frame-component";
import Header3 from "../components/header3";
import Header4 from "../components/header4";
import Header2 from "../components/header2";
import Header5 from "../components/header5";
import TestimonialSectionWrapper from "../components/testimonial-section-wrapper";
import Header from "../components/header";
import Header1 from "../components/header1";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-secondary-bg-subtle overflow-hidden flex flex-col items-start isolate leading-[normal] tracking-[normal]">
      <div className="w-[752px] h-[239px] absolute top-[1615px] left-[-95px] bg-purple-500 blur-[300px] hidden z-[0] shrink-0" />
      <Page />
      <section className="self-stretch flex items-center justify-center !pt-[100px] !pb-[30px] !pl-0 !pr-0 z-[2] shrink-0 text-center text-6xl text-fg-text-contrast font-['DM_Sans'] mq450:!pt-[65px] mq450:!pb-5 mq450:box-border">
        <div className="w-screens-md flex flex-col items-center justify-center gap-10 mq450:gap-5">
          <div className="self-stretch flex flex-col items-start gap-3">
            <b className="self-stretch relative tracking-[0.01em] leading-[100%] text-transparent !bg-clip-text [background:linear-gradient(92.48deg,_#7e7e7e_2.41%,_#fff_69.57%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-4xl mq450:leading-9 mq750:text-5xl mq750:leading-[48px]">
              Lorem ipsum dolor sit amet consectetur
            </b>
            <div className="self-stretch relative text-2xl tracking-[0.01em] leading-8 mq450:text-[19px] mq450:leading-[26px]">
              Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices
              est vivamus mauris fames et. Sed lacus purus in tellus.
            </div>
          </div>
          <Button1
            leadingIcon="off"
            size="md"
            state="default"
            theme="light"
            trailingIcon="off"
            type="solid"
            variant="gradiant"
            text="Book a demo"
            buttonHeight="44px"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center !pt-[130px] !pb-spacing-32 !pl-2.5 !pr-2.5 gap-[47px] z-[3] shrink-0 text-center text-2xl text-fg-text-contrast font-['DM_Sans'] mq450:!pt-[84px] mq450:!pb-[83px] mq450:box-border mq750:gap-[23px]">
        <h3 className="!m-0 relative text-[length:inherit] tracking-[0.01em] leading-8 font-semibold font-[inherit] mq450:text-[19px] mq450:leading-[26px]">
          Our Supporters
        </h3>
        <div className="w-screens-xl flex items-center justify-center gap-11 text-xl text-fg-default-fg mq450:gap-[22px]">
          <div className="relative tracking-[0.01em] leading-7 mq450:text-base mq450:leading-[22px]">
            Supporter-logo
          </div>
          <div className="relative tracking-[0.01em] leading-7 mq450:text-base mq450:leading-[22px]">
            Supporter-logo
          </div>
          <div className="relative tracking-[0.01em] leading-7 mq450:text-base mq450:leading-[22px]">
            Supporter-logo
          </div>
          <div className="relative tracking-[0.01em] leading-7 mq450:text-base mq450:leading-[22px]">
            Supporter-logo
          </div>
          <div className="relative tracking-[0.01em] leading-7 mq450:text-base mq450:leading-[22px]">
            Supporter-logo
          </div>
        </div>
      </section>
      <FrameComponent />
      <Header3 />
      <div className="w-[340.2px] h-[294.6px] absolute !!m-[0 important] top-[2924.1px] left-[248.1px] [filter:blur(392.5px)] overflow-hidden flex items-center justify-center z-[6] shrink-0">
        <Image
          className="w-full h-full [filter:blur(392.5px)] object-cover absolute left-[54px] top-[4px] [transform:scale(2.778)]"
          loading="lazy"
          width={340.2}
          height={294.6}
          sizes="100vw"
          alt=""
          src="/Vector1.svg"
        />
      </div>
      <Header4 />
      <Header2 />
      <Header5 />
      <TestimonialSectionWrapper />
      <Header />
      <Header1 />
    </div>
  );
};

export default LandingPage;
