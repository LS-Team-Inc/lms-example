import React, { FC, useContext, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import { AuthContext } from "@/context/authContext";
import { signUp } from "@/context/authAction";

interface IProps {
  open: boolean;
  onClose: () => void;
  openSignInModal: () => void;
}

const SignUpModal: FC<IProps> = ({ open, onClose, openSignInModal }) => {
  const {
    state: {
      auth: { signUpError },
    },
    dispatch,
  } = useContext(AuthContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setError(false);
  };

  const validateFields = () => {
    if (data.firstName && data.lastName && data.email && data.password) {
      return true;
    }
    setError(true);
    return false;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (validateFields()) {
      signUp(dispatch, data);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex">
        <div className="w-[250px] min-w-[250px] bg-sign-up-modal-bg bg-cover pt-[120px] px-[15px]">
          <h3 className="font-bold text-[23px] text-white">
            Join LS Team for
            <br />
            Free
          </h3>
          <p className="font-normal text-[16px] text-white mt-[16px]">
            Explore hundreds of
            <br />
            programming courses and
            <br />
            tutorials
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
            <div className="flex items-center">
              <Input
                onChange={handleChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                onChange={handleChange}
                name="lastName"
                placeholder="Last Name"
                className="ml-[20px]"
              />
            </div>
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
            {signUpError && (
              <p className="text-[red] text-[12px] font-normal">
                {signUpError}
              </p>
            )}
            {error && (
              <p className="text-[red] mt-[15px] text-[12px] font-normal">
                All fields are required
              </p>
            )}
            <div className="flex justify-center mt-[25px]">
              <Button type="submit" title="Sign Up" />
            </div>
          </form>
          <div className="flex items-center justify-center mt-[15px]">
            <p className="text-white text-[17px] font-semibold mr-[20px]">
              Already have an account?
            </p>
            <Button onClick={openSignInModal} variant="text" title="Sign In" />
          </div>
          <div className="text-gray text-[13px] leading-[22px] text-center mt-[10px]">
            <p className="">By signing up you agree to our</p>
            <p>
              <Link className="underline" href="/">
                Terms of Use
              </Link>
              <span className="mx-[10px]">and</span>
              <Link className="underline" href="/">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
