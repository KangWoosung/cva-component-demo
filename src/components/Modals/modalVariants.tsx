/*  2024-02-23 18:02:27

GPT 에게 요청해서 받은 코드...

    size: {
      small: "w-1/2",
      medium: "w-2/3",
      large: "w-3/4",
    },
    centered: "flex items-center justify-center",
    rounded: {
      normal: "",
      full: "rounded-lg",
    },
*/

import { cva } from "class-variance-authority";

export const modalVariants = cva("fixed inset-0 overflow-hidden", {
  variants: {
    intent: {
      primary: "",
      secondary: "",
      soft: "",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-sm",
    },
    rounded: {
      normal: "",
      full: "rounded-full",
    },
    _content: {
      text: "",
      textAndIcon: "inline-flex items-center",
      icon: "",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    rounded: "normal",
    _content: "text",
  },
});
