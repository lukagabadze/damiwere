export type User = {
  id: number;
  username: string;
};

export type UserState = {
  loading: boolean;
  user: Readonly<User | null>;
  error: string;
};

export type UserAction = {
  type: string;
  user?: User | null;
};

//export type DispatchType = (args: UserAction) => UserAction;
