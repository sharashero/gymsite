import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "success" | "outline-success" | "danger" | "outline-danger";
}


const buttonVariants = {
  primary: "bg-blue-500 text-white enabled:hover:bg-blue-600",
  success: "bg-green-500 text-white enabled:hover:bg-green-600",
  danger: "bg-red-500 text-white enabled:hover:bg-red-600",
  "outline": "border-2 border-blue-500 text-blue-500 enabled:hover:border-blue-600 enabled:hover:bg-blue-50 enabled:hover:text-blue-600",
  "outline-success": "border-2 border-green-500 text-green-500 enabled:hover:border-green-600 enabled:hover:bg-green-50 enabled:hover:text-green-600",
  "outline-danger": "border-2 border-red-500 text-red-500 enabled:hover:border-red-600 enabled:hover:bg-red-50 enabled:hover:text-red-600",
};


const buttonSizes = {
  sm: "gap-1 rounded-md px-2 py-1 text-sm",
  md: "gap-2 rounded-lg px-4 py-2 text-base",
  lg: "gap-4 rounded-2xl px-8 py-4 text-xl",
};


function Button({
  size = "md",
  variant = "primary",
  children,
  ...props
}: IButton)
{
  const styleSize = buttonSizes[size];
  const styleVariant = buttonVariants[variant];

  return (
    <button
      className={twMerge(
        "flex items-center justify-center disabled:cursor-wait",
        styleSize,
        styleVariant,
      )}
      {...props}
    >
      {children}
    </button>
  );
}


export default Button;
