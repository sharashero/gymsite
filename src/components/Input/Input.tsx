import {
  forwardRef,
  ForwardedRef,
  InputHTMLAttributes,
} from "react";
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


function InputComponent({
  size = "md",
  variant = "primary",
  ...props
}: IInput, ref: ForwardedRef<HTMLInputElement>)
{
  const styleSize = inputSizes[size];
  const styleVariant = inputVariants[variant];

  return (
    <input
      ref={ref}
      className={twMerge("border-2 outline-none", styleSize, styleVariant)}
      {...props}
    />
  );
}


const Input = forwardRef(InputComponent);


export default Input;
