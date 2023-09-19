import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "success" | "outline-success" | "danger" | "outline-danger";
}


const buttonVariants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  success: "bg-green-500 text-white hover:bg-green-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
  "outline": "border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600",
  "outline-success": "border-2 border-green-500 text-green-500 hover:border-green-600 hover:bg-green-50 hover:text-green-600",
  "outline-danger": "border-2 border-red-500 text-red-500 hover:border-red-600 hover:bg-red-50 hover:text-red-600",
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
      className={twMerge("flex items-center", styleSize, styleVariant)}
      {...props}
    >
      {children}
    </button>
  );
}


export default Button;
