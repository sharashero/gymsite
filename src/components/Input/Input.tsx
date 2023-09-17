import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md";
  variant?: "primary" | "success" | "danger";
}


const inputVariants = {
  primary: "border-blue-100 focus:border-blue-500",
  success: "border-green-500",
  danger: "border-red-500",
};


const inputSizes = {
  sm: "rounded-md px-2 py-1 text-sm",
  md: "rounded-lg px-4 py-2 text-base",
};


function Input({
  size = "md",
  variant = "primary",
  ...props
}: IInput)
{
  const styleSize = inputSizes[size];
  const styleVariant = inputVariants[variant];

  return (
    <input
      className={twMerge("border-2 outline-none", styleSize, styleVariant)}
      {...props}
    />
  );
}


export default Input;
