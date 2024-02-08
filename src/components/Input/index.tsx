import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

const Input: FC<IProps> = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        "w-full h-[46px] rounded-[6px] bg-black300 border border-[#556271] px-[11px] text-white text-[14px] focus:outline-none autofill:bg-black300",
        className
      )}
      {...props}
    />
  );
};

export default Input;
