"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Button1Type = {
  className?: string;
  text?: string;

  /** Variant props */
  leadingIcon?: CSSProperties["leadingIcon"];
  size?: CSSProperties["size"];
  state?: CSSProperties["state"];
  theme?: CSSProperties["theme"];
  trailingIcon?: CSSProperties["trailingIcon"];
  type?: CSSProperties["type"];
  variant?: CSSProperties["variant"];

  /** Style props */
  buttonHeight?: CSSProperties["height"];
};

const getButtonContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "off-md-default-solid-light-off-gradiant":
      return "[&]:!pt-spacing-01 [&]:!pb-spacing-01 [&]:!pl-6 [&]:!pr-6 [&]:[background:linear-gradient(-33.59deg,_#301a3a,_#442155_62.07%)] [&]:opacity-[0.9]";
  }
};
const getButtonText3Style = (styleKey: string) => {
  switch (styleKey) {
    case "off-md-default-solid-light-off-gradiant":
      return "[&]:!m-[unset] [&]:text-[15px]";
    case "off-lg-disabled-ghost-light-off-primary":
      return "[&]:text-fg-border-hover";
  }
};

const Button1: NextPage<Button1Type> = ({
  className = "",
  leadingIcon = "off",
  size = "lg",
  state = "default",
  theme = "light",
  trailingIcon = "off",
  type = "solid",
  variant = "primary",
  text = "Home",
  buttonHeight,
}) => {
  const variantKey = [
    leadingIcon,
    size,
    state,
    type,
    theme,
    trailingIcon,
    variant,
  ].join("-");

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonHeight,
    };
  }, [buttonHeight]);

  return (
    <div
      className={`h-sizing-161 rounded-borderradius-rounded-full flex items-center justify-center !pt-spacing-01 !pb-spacing-01 !pl-spacing-101 !pr-spacing-101 box-border text-center text-xl text-fg-text-contrast font-['DM_Sans'] ${getButtonContainerStyle(variantKey)} ${className}`}
      style={buttonStyle}
    >
      <h3
        className={`!m-0 relative text-[length:inherit] tracking-[0.01em] font-semibold font-[inherit] ${getButtonText3Style(variantKey)}`}
      >
        {text}
      </h3>
    </div>
  );
};

export default Button1;
