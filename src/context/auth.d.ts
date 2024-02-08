export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export type UserContextStorageType = {
  user: IUser;
};

export interface SignUpBodyType extends IUser {
  password: string;
}

// Helper Type Function
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
