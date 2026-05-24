"use client";
import type { NextPage } from "next";
import { useState, type CSSProperties } from "react";
import Logo from "./logo";
import Button1 from "./button1";

export type DesktopHeaderType = {
  className?: string;
  size?: CSSProperties["size"];
  theme?: CSSProperties["theme"];
};

const DesktopHeader: NextPage<DesktopHeaderType> = ({
  className = "",
  size,
  theme,
}) => {
  const [button1Items] = useState([
    {
      leadingIcon: "off" as const,
      size: "lg" as const,
      state: "default" as const,
      theme: "light" as const,
      trailingIcon: "off" as const,
      type: "ghost" as const,
      variant: "gray" as const,
      text: "Home",
      buttonHeight: "64px" as const,
    },
    {
      leadingIcon: "off" as const,
      size: "lg" as const,
      state: "disabled" as const,
      theme: "light" as const,
      trailingIcon: "off" as const,
      type: "ghost" as const,
      variant: "primary" as const,
      text: "SecrtChat",
      buttonHeight: undefined,
    },
    {
      leadingIcon: "off" as const,
      size: "lg" as const,
      state: "disabled" as const,
      theme: "light" as const,
      trailingIcon: "off" as const,
      type: "ghost" as const,
      variant: "primary" as const,
      text: "GenPen",
      buttonHeight: undefined,
    },
    {
      leadingIcon: "off" as const,
      size: "lg" as const,
      state: "disabled" as const,
      theme: "light" as const,
      trailingIcon: "off" as const,
      type: "ghost" as const,
      variant: "primary" as const,
      text: "Contact",
      buttonHeight: undefined,
    },
  ]);
  return (
    <div
      className={`w-screens-xl h-sizing-16 [backdrop-filter:blur(4px)] rounded-borderradius-rounded-3xl flex items-center justify-center z-[2] shrink-0 text-left text-[38.6px] text-fg-default-fg font-[Roboto] ${className}`}
    >
      <div className="flex-1 flex items-center justify-between gap-0 max-w-full">
        <div className="flex items-center gap-spacing-10">
          <Logo size={size} theme={theme} />
          <nav className="!m-0 flex items-center text-center text-xl text-fg-text-contrast font-['DM_Sans'] mq1275:hidden">
            {button1Items.map((item, index) => (
              <Button1
                key={index}
                leadingIcon={item.leadingIcon}
                size={item.size}
                state={item.state}
                theme={item.theme}
                trailingIcon={item.trailingIcon}
                type={item.type}
                variant={item.variant}
                text={item.text}
                buttonHeight={item.buttonHeight}
              />
            ))}
          </nav>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Button1
            leadingIcon="off"
            size="md"
            state="default"
            theme="light"
            trailingIcon="off"
            type="solid"
            variant="gradiant"
            text="Dashboard"
            buttonHeight="48px"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
