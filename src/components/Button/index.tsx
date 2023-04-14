import React from "react";
import cn from "classnames";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "outline" | "answer" | "contained";
  onClick?: () => void
  className?: string
  name?: string
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
};

const Button = ({ variant = 'primary', children, onClick, className, name, type, disabled}: ButtonProps) => (
  <button
    className={cn(className, {
      "bg-main-grad text-white p-14 min-w-328 rounded-16 text-base hover:opacity-90 leading-140 shadow-btn": variant === "primary",
      "border-1 border-white rounded-16 p-14 min-w-160 text-white hover:opacity-90": variant === 'outline',
      "bg-white p-14 hover:opacity-90 text-main-violet rounded-16 min-w-160": variant === 'contained',
      "bg-light-blue text-md rounded-16 shadow-btn p-22 min-w-328 hover:bg-main-grad hover:opacity-90 hover:text-white": variant === 'answer',
      "hover:opacity-90": variant === 'ghost',
      "hover:opacity-100": disabled,
    })}
    onClick={onClick}
    name={name}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
