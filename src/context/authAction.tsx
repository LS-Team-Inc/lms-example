import React from "react";
import { AuthTypes, AuthActions } from "./authReducer";
import { IUser, SignUpBodyType } from "./auth";

const getUsersFromStorage = (): SignUpBodyType[] => {
  const users = localStorage.getItem("users");

  if (users) {
    const parsedUsers = JSON.parse(users);

    return parsedUsers;
  }

  return [];
};

export const signUp = (
  dispatch: React.Dispatch<AuthActions>,
  data: SignUpBodyType
) => {
  const users = getUsersFromStorage();
  const user = users.find((user) => user.email === data.email);

  if (user) {
    dispatch({ type: AuthTypes.SIGN_UP_ERROR, payload: "User already exists" });
  } else {
    const newUsers = [...users, data];
    localStorage.setItem("users", JSON.stringify(newUsers));
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: AuthTypes.SIGN_UP_SUCCESS, payload: data });
  }
};

export const signIn = (
  dispatch: React.Dispatch<AuthActions>,
  data: Pick<SignUpBodyType, "email" | "password">
) => {
  const users = getUsersFromStorage();
  const user = users.find(
    (user) => user.email === data.email && user.password === data.password
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: AuthTypes.SIGN_IN_SUCCESS, payload: user });
  } else {
    dispatch({
      type: AuthTypes.SIGN_IN_ERROR,
      payload: "User does not exist",
    });
  }
};

export const isLoggedIn = (dispatch: React.Dispatch<AuthActions>) => {
  const user = localStorage.getItem("user");

  if (user) {
    dispatch({
      type: AuthTypes.SIGN_IN_SUCCESS,
      payload: JSON.parse(user),
    });
  }
};
