import type { NextPage } from "next";
import Image from "next/image";
import AngularGradient1stVersion from "./angular-gradient1st-version";
import DesktopHeader from "./desktop-header";

export type PageType = {
  className?: string;
};

const Page: NextPage<PageType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-center justify-center !pt-spacing-8 !pb-spacing-8 !pl-0 !pr-0 relative isolate z-[1] shrink-0 text-left text-[38.6px] text-fg-default-fg font-[Roboto] ${className}`}
    >
      <AngularGradient1stVersion state="in-view" />
      <Image
        className="w-[1440px] h-[1440px] absolute !!m-[0 important] top-[calc(50%_-_164px)] left-[calc(50%_-_720px)] z-[1] shrink-0"
        width={1440}
        height={1440}
        sizes="100vw"
        alt=""
        src="/Vector.svg"
      />
      <DesktopHeader size="lg" theme="dark" />
    </header>
  );
};

export default Page;
