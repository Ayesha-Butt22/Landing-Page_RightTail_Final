import type { NextPage } from "next";
import Image from "next/image";
import Button1 from "./button1";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] flex flex-col items-center justify-center !pt-spacing-16 !pb-spacing-16 !pl-0 !pr-0 box-border z-[11] shrink-0 mq450:gap-4 mq450:!pt-[42px] mq450:!pb-[42px] mq450:box-border mq750:gap-8 ${className}`}
    >
      <div className="w-screens-xl1 shadow-[0px_4px_70px_rgba(80,_80,_80,_0.1),_0px_0px_5px_6px_rgba(80,_80,_80,_0.08)] rounded-borderradius-rounded-3xl1 bg-secondary-bg border-secondary-line border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center !pt-[62px] !pb-[62px] !pl-0 !pr-0 relative isolate gap-2.5">
        <Image
          className="w-[1022px] h-[626px] absolute !!m-[0 important] top-[51px] left-[129px] z-[0] shrink-0"
          width={1022}
          height={626}
          sizes="100vw"
          alt=""
          src="/Union.svg"
        />
        <section className="flex flex-col items-center gap-spacing-61 z-[1] shrink-0 text-left text-5xl text-fg-text-contrast font-['DM_Sans']">
          <h2 className="!m-0 relative text-[length:inherit] tracking-[0.01em] leading-[100%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(92.48deg,_#7e7e7e_2.41%,_#fff_69.57%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[29px] mq450:leading-[29px] mq750:text-[38px] mq750:leading-[38px]">
            Ready to get started?
          </h2>
          <div className="w-[915px] relative text-lg tracking-[0.01em] leading-7 font-medium text-center inline-block">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
            netus sollicitudin. In enim tortor sed libero velit lectus. Egestas
            facilisi neque a arcu vitae dignissim. Sit lobortis orci risus
            volutpat eu habitasse.
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
        </section>
      </div>
    </section>
  );
};

export default Header;
