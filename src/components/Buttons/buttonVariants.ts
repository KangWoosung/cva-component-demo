/*  2024-02-23 17:54:14


*/

import { cva } from "class-variance-authority";

/*  2024-02-23 17:27:07
  범용 펑션으로 사용할 수 있지만, 프로젝트의 특성에 따라 커스터마이징이 필요하다.
  -intent 속성의 컬러 밸류는, 프로젝트 특성에 맞는 밸류로 결정하고 관리한다. 
  -size 속성의 크기도, 프로젝트 특성에 따라 결정하고 관리한다. 
*/
export const buttonVariants = cva("font-semibold shadow-sm", {
  variants: {
    intent: {
      primary:
        "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
      secondary:
        "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 active:bg-gray-100",
      soft: "bg-indigo-50 text-teal-700 hover:bg-teal-100 active:bg-teal-200",
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
  compoundVariants: [
    { size: ["xs", "sm"], rounded: "normal", className: "rounded" },
    { size: ["md", "lg", "xl"], rounded: "normal", className: "rounded-md" },
    {
      size: ["xs", "sm"],
      _content: ["text", "textAndIcon"],
      className: "gap-x-1.5 px-2 py-1",
    },
    {
      size: ["md", "lg", "xl"],
      _content: ["text", "textAndIcon"],
      className: "gap-x-2",
    },
    {
      size: "md",
      _content: ["text", "textAndIcon"],
      className: "px-2.5 py-1.5",
    },
    {
      size: "lg",
      _content: ["text", "textAndIcon"],
      className: "px-3 py-2",
    },
    {
      size: "xl",
      _content: ["text", "textAndIcon"],
      className: "px-3.5 py-2.5",
    },
    { size: "xs", _content: "icon", className: "p-0.5" },
    { size: "sm", _content: "icon", className: "p-1" },
    { size: "md", _content: "icon", className: "p-1.5" },
    { size: "lg", _content: "icon", className: "p-2" },
    { size: "xl", _content: "icon", className: "p-2.5" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
    rounded: "normal",
    _content: "text",
  },
});
