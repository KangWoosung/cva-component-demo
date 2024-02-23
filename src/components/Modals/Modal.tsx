/*  2024-02-23 18:11:17


*/

import { ReactNode } from "react";
import { modalVariants } from "./modalVariants";
import { SVGComponent } from "../../types";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  icon: SVGComponent;
  intent: "primary" | "secondary" | "soft";
  size: "sm" | "md" | "lg" | "xl" | "xs";
  rounded: boolean;
  hiddenLabel: string;
  className: string;
};
const Modal = ({
  isOpen,
  onClose,
  icon: Icon,
  intent,
  size,
  hiddenLabel,
  className,
  children,
  ...props
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={modalVariants({
        className,
        intent,
        rounded: "full",
        size,
        _content: "icon",
      })}
      {...props}
    >
      <div onClick={onClose}>
        <Icon className="h-5 w-5" aria-hidden="true" />
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
        <p className="sr-only">{hiddenLabel}</p>
      </div>
    </div>
  );
};

export { Modal };
