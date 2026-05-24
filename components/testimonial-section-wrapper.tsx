import type { NextPage } from "next";
import TestimonialCard from "./testimonial-card";

export type TestimonialSectionWrapperType = {
  className?: string;
};

const TestimonialSectionWrapper: NextPage<TestimonialSectionWrapperType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-secondary-bg-subtle flex flex-col items-center justify-center !pt-spacing-16 !pb-spacing-16 !pl-spacing-02 !pr-spacing-02 box-border max-w-full z-[10] shrink-0 text-center text-5xl text-fg-text-contrast font-['DM_Sans'] mq750:!pt-[42px] mq750:!pb-[42px] mq750:box-border ${className}`}
    >
      <div className="w-[1280px] overflow-hidden flex flex-col items-center relative isolate gap-spacing-9 max-w-full mq750:gap-[18px]">
        <div className="self-stretch flex items-start justify-center z-[0]">
          <h2 className="!m-0 relative text-[length:inherit] tracking-[0.01em] leading-[100%] font-semibold font-[inherit] mq450:text-[29px] mq450:leading-[29px] mq750:text-[38px] mq750:leading-[38px]">
            Tons of others love using PentAi.
          </h2>
        </div>
        <div className="self-stretch h-[525px] overflow-hidden shrink-0 flex items-start !pt-0 !pb-[6.5px] !pl-0 !pr-0 box-border gap-[15.7px] max-w-full mq1275:h-auto mq1275:flex-wrap">
          <section className="flex flex-col items-start gap-[37px] shrink-0 text-left text-lg text-fg-text-contrast font-['DM_Sans'] mq450:gap-[18px]">
            <TestimonialCard
              clientImage="/Client-Image@2x.png"
              floydMiles="Floyd Miles"
              magnisLacusLaoreetPharetra="Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus."
            />
            <TestimonialCard
              clientImage="/Ellipse-11@2x.png"
              floydMiles="Egestas mauris"
              magnisLacusLaoreetPharetra="Magna id ut eu amet blandit sit auctor gravida. Massa praesent neque et elementum suspendisse."
            />
          </section>
          <section className="flex flex-col items-start gap-[45.5px] shrink-0 max-w-full mq450:gap-[23px]">
            <TestimonialCard
              clientImage="/Avatar@2x.png"
              floydMiles="Esther Howard"
              magnisLacusLaoreetPharetra="Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit."
            />
            <TestimonialCard
              clientImage="/Picture@2x.png"
              floydMiles="Aliquet rhoncus"
              magnisLacusLaoreetPharetra="Urna pellentesque in elementum lacus amet tristique. Nec elementum lacus urna quis odio. Posuere facilisi ultricies et donec mauris ornare interdum dui ut."
            />
          </section>
          <section className="flex flex-col items-start gap-[5.5px] shrink-0 max-w-full">
            <TestimonialCard
              clientImage="/Ellipse-1@2x.png"
              floydMiles="Erat consectetur"
              magnisLacusLaoreetPharetra="Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis."
            />
            <TestimonialCard
              clientImage="/Ellipse-14@2x.png"
              floydMiles="Placerat nisl"
              magnisLacusLaoreetPharetra="Tristique nulla proin augue sit aliquam donec ornare. Aliquam diam egestas egestas feugiat lacinia. Facilisis sagittis nibh morbi ornare nunc luctus sit aliquet. Molestie sed viverra vel integer diam."
            />
          </section>
          <section className="flex flex-col items-start gap-[38.5px] shrink-0 max-w-full mq450:gap-[19px]">
            <TestimonialCard
              clientImage="/Ellipse-13@2x.png"
              floydMiles="Mauris pulvinar"
              magnisLacusLaoreetPharetra="Quis ultricies molestie massa elit convallis lectus orci. Accumsan vulputate tempor dapibus nunc."
            />
            <TestimonialCard
              clientImage="/Ellipse-12@2x.png"
              floydMiles="Magna tellus"
              magnisLacusLaoreetPharetra="Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisis at quam pellentesque volutpat a. Dictum eleifend nunc aenean auctor."
            />
          </section>
        </div>
        <div className="w-[1280px] h-[573px] !!m-[0 important] absolute bottom-[0px] left-[0px] shadow-[0px_20px_13px_rgba(0,_0,_0,_0.03),_0px_8px_5px_rgba(0,_0,_0,_0.08)] flex flex-col items-start !pt-0 !pb-12 !pl-0 !pr-0 box-border isolate z-[2]">
          <div className="w-[1280px] h-24 absolute !!m-[0 important] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(28,_28,_28,_0.2),_#1c1c1c)] overflow-hidden shrink-0 z-[1]" />
          <div className="w-[525px] h-12 relative [background:linear-gradient(180deg,_rgba(28,_28,_28,_0.2)_26.4%,_#1c1c1c)] overflow-hidden shrink-0 [transform:_rotate(90deg)] z-[2]" />
          <div className="w-[1280px] h-[525px] flex items-start !pt-0 !pb-0 !pl-[1232px] !pr-0 box-border z-[3] !mt-[-525px] relative shrink-0">
            <div className="h-12 w-[525px] relative [background:linear-gradient(167.16deg,_rgba(28,_28,_28,_0.2),_#1c1c1c)] overflow-hidden shrink-0 [transform:_rotate(-90deg)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionWrapper;
