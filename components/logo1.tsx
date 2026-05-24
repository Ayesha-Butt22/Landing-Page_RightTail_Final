import type { NextPage } from "next";

export type Logo1Type = {
  className?: string;
};

const Logo1: NextPage<Logo1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[30px] w-[84px] flex items-start shrink-0 text-left text-[25.4px] text-fg-text-contrast font-[Roboto] ${className}`}
    >
      <div className="!mt-[-10px] !ml-[-10px] flex items-center justify-center !p-2.5 shrink-0">
        <h2 className="!m-0 relative text-[length:inherit] font-bold font-[inherit]">
          PentAi.
        </h2>
      </div>
    </div>
  );
};

export default Logo1;
