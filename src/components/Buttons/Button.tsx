/*  2024-02-23 17:40:21


*/

import { ButtonProps } from "../../types";
import { checkEnv } from "../../utils";
import { buttonVariants } from "./buttonVariants";

function Button({
  intent,
  size,
  rounded,
  className,
  children,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...props
}: ButtonProps) {
  checkEnv("development", () => {
    if (LeadingIcon && TrailingIcon) {
      console.warn(
        "You should only have a trailing or leading icon, not both!"
      );
    }
  });

  return (
    <button
      className={buttonVariants({
        className,
        intent,
        rounded,
        size,
        _content: LeadingIcon || TrailingIcon ? "textAndIcon" : "text",
      })}
      {...props}
    >
      {LeadingIcon ? (
        <LeadingIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      ) : null}
    </button>
  );
}

function ButtonWrapper({ children }: { children: React.ReactNode }) {
  return <div className="space-x-8">{children}</div>;
}

export { Button, ButtonWrapper };
