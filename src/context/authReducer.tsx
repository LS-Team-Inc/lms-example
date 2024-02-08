import { IUser, ActionMap } from "./auth";

export enum AuthTypes {
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR = "SIGN_IN_ERROR",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_ERROR = "SIGN_UP_ERROR",
}

export type AuthState = {
  user: IUser | null;
  signInError: string | null;
  signUpError: string | null;
};

type AuthPayload = {
  [AuthTypes.SIGN_IN_SUCCESS]: IUser;
  [AuthTypes.SIGN_IN_ERROR]: string;
  [AuthTypes.SIGN_UP_SUCCESS]: IUser;
  [AuthTypes.SIGN_UP_ERROR]: string;
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const AuthReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        signInError: null,
      };
    }
    case AuthTypes.SIGN_IN_ERROR: {
      return {
        ...state,
        user: null,
        signInError: action.payload,
      };
    }
    case AuthTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        signUpError: null,
      };
    }
    case AuthTypes.SIGN_UP_ERROR: {
      return {
        ...state,
        user: null,
        signUpError: action.payload,
      };
    }
    default:
      return state;
  }
};
