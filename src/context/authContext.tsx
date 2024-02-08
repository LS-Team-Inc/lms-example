"use client";

import { createContext, useReducer } from "react";
import { AuthState, AuthReducer, AuthActions } from "./authReducer";

type InitialStateType = {
  auth: AuthState;
};

const mainReducer = ({ auth }: InitialStateType, action: AuthActions) => ({
  auth: AuthReducer(auth, action),
});

const initialState = () => {
  return {
    auth: {
      user: null,
      signInError: null,
      signUpError: null,
    },
  } as InitialStateType;
};

export const AuthContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<AuthActions>;
}>({
  state: initialState(),
  dispatch: () => null,
});

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState());

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
