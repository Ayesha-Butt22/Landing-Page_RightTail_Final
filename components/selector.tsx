import type { NextPage } from "next";
import { type CSSProperties } from "react";

export type SelectorType = {
  className?: string;
  link?: string;

  /** Variant props */
  active?: CSSProperties["active"];
};

const getSelectorContainer1Style = (styleKey: string) => {
  switch (styleKey) {
    case "On":
      return "[&]:bg-[unset] [&]:[border:unset] [&]:[background:#282828_padding-box,_linear-gradient(-55.46deg,_#8e4ec8_9.69%,_#b77ddd_48.62%,_#f7ecfc_89.05%)_border-box]";
  }
};
const getLoremIpsumDolor4Style = (styleKey: string) => {
  switch (styleKey) {
    case "On":
      return "[&]:text-fg-text-contrast";
  }
};

const Selector: NextPage<SelectorType> = ({
  className = "",
  active = "Off",
  link,
}) => {
  const variantKey = `${active}`;

  return (
    <div
      className={`self-stretch flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.1)] rounded-borderradius-rounded-md bg-secondary-bg-subtle border-fg-line border-solid border-[1px] flex flex-col items-start justify-center !pt-spacing-5 !pb-spacing-5 !pl-spacing-41 !pr-spacing-41 gap-spacing-21 text-center text-xl text-fg-text-contrast font-['DM_Sans'] ${getSelectorContainer1Style(variantKey)} ${className}`}
    >
      <div className="flex items-center shrink-0">
        <h3 className="!m-0 relative text-[length:inherit] tracking-[0.01em] leading-7 font-semibold font-[inherit]">
          {link}
        </h3>
      </div>
      <div
        className={`self-stretch relative text-base tracking-[0.13px] leading-6 font-medium text-fg-text text-left shrink-0 ${getLoremIpsumDolor4Style(variantKey)}`}
      >
        Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus
        sollicitudin. In enim tortor sed libero velit lectus.
      </div>
    </div>
  );
};

export default Selector;
