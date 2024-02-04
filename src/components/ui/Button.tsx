import cn from "../../utils/cn";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type TRef = HTMLButtonElement;
type TButtonOptions = {
  variant?: "btn-solid" | "btn-outline" | "btn-ghost";
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "", children, ...rest }, ref) => {
    const getVariant = (variant: string) => {
      switch (variant) {
        case "btn-outline":
          return "btn-outline";
        case "btn-ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        ref={ref}
        {...rest}
        className={cn(getVariant(variant), className)}
      >
        {children || "Click"}
      </button>
    );
  }
);

export default Button;
