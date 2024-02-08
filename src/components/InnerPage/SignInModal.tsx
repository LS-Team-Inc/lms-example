import React, { FC, useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import { AuthContext } from "@/context/authContext";
import { signIn } from "@/context/authAction";

interface IProps {
  open: boolean;
  onClose: () => void;
  openSignUpModal: () => void;
}

const SignInModal: FC<IProps> = ({ open, onClose, openSignUpModal }) => {
  const {
    state: {
      auth: { signInError },
    },
    dispatch,
  } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const validateFields = () => {
    if (data.email && data.password) {
      return true;
    }

    return false;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (validateFields()) {
      signIn(dispatch, data);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex">
        <div className="w-[250px] min-w-[250px] bg-sign-in-modal-bg bg-cover pt-[120px] px-[15px]">
          <h3 className="font-bold text-[23px] text-white">Welcome Back</h3>
          <p className="font-normal text-[16px] text-white mt-[16px]">
            Sign in to see your courses.
          </p>
        </div>
        <div className="px-[25px] py-[40px] w-full">
          <SocialButtons />
          <div className="w-full relative flex justify-center mt-[32px]">
            <div className="w-full h-[2px] bg-[#00b2ff]" />
            <p className="text-white bg-black200 font-normal text-[16px] absolute w-[40px] text-center top-0 translate-y-[-50%]">
              or
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-[25px]">
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              className="mt-[10px]"
              placeholder="Email"
            />
            <Input
              type="password"
              onChange={handleChange}
              name="password"
              className="mt-[10px]"
              placeholder="Password"
            />
            <div className="text-right mt-[5px]">
              <Link className="text-[#516272] text-[14px] font-normal" href="/">
                Forgot Password?
              </Link>
            </div>
            {signInError && (
              <p className="text-[red] text-[12px] font-normal">
                {signInError}
              </p>
            )}
            <div className="flex justify-center mt-[45px]">
              <Button type="submit" title="Sign In" />
            </div>
          </form>
          <div className="flex items-center justify-center mt-[15px]">
            <p className="text-white text-[17px] font-semibold mr-[20px]">
              Dont have an account?
            </p>
            <Button onClick={openSignUpModal} variant="text" title="Sign Up" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
