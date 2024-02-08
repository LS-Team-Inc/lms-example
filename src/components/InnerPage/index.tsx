"use client";

import Header from "./Header";
import Footer from "./Footer";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { AuthContext } from "@/context/authContext";
import { isLoggedIn } from "@/context/authAction";

interface IProps {
  children: ReactNode;
}

const InnerPage: FC<IProps> = ({ children }) => {
  const {
    state: {
      auth: { user },
    },
    dispatch,
  } = useContext(AuthContext);
  const [isSignUpModalOpened, setIsSignUpModalOpened] = useState(false);
  const [isSignInModalOpened, setIsSignInModalOpened] = useState(false);

  useEffect(() => {
    isLoggedIn(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setIsSignUpModalOpened(false);
      setIsSignInModalOpened(false);
    }
  }, [user]);

  const openSignUpModal = () => {
    setIsSignUpModalOpened(true);
    setIsSignInModalOpened(false);
  };

  const openSignInModal = () => {
    setIsSignUpModalOpened(false);
    setIsSignInModalOpened(true);
  };

  return (
    <div className="font-body">
      <Header openSignUpModal={openSignUpModal} />
      {children}
      <Footer />
      <SignUpModal
        open={isSignUpModalOpened}
        onClose={() => setIsSignUpModalOpened(false)}
        openSignInModal={openSignInModal}
      />
      <SignInModal
        open={isSignInModalOpened}
        onClose={() => setIsSignInModalOpened(false)}
        openSignUpModal={openSignUpModal}
      />
    </div>
  );
};

export default InnerPage;
