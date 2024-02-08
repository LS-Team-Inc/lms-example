import React, { FC } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  variant?: "primary" | "text";
}

const Button: FC<IProps> = ({ title, variant = "primary", ...props }) => {
  const buttonClasses = {
    primary:
      "w-[208px] h-[37px] rounded-[4px] flex bg-blue200 text-white items-center justify-center",
    text: "text-blue200 text-[17px]",
  };
  return (
    <button className={buttonClasses[variant]} {...props}>
      {title}
    </button>
  );
};

export default Button;
