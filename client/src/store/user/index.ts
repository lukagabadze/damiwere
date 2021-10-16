export type User = {
  id: number;
  username: string;
};

export type UserState = {
  loading: boolean;
  user: Readonly<User | null>;
  error: UserError | null;
};

export type UserAction = {
  type: string;
  user?: User | null;
  error?: UserError;
};
export const defaultState: UserState = {
  loading: false,
  user: null,
  error: null,
};

export type UserError = {
  message: string;
};
export const defaultError = {
  message: "რაღაც არ მუშაობს, გთხოვთ სცადოთ თავიდან",
};

//export type DispatchType = (args: UserAction) => UserAction;
