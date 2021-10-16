import { ReactElement, useState } from "react";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from ".";
import { userApi } from "../../api";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { UserError } from "../../store/user";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../store/user/userActions";

export default function Login(): ReactElement | null {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(fetchUserRequest());

    try {
      const res = await userApi.login({ username, password });
      console.log(res);
      dispatch(fetchUserSuccess(res.data.user));
    } catch (err) {
      dispatch(fetchUserFailure(err as UserError));
    }
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <AuthHeader header="შესვლა" />

      <AuthInput value={username} setValue={setUsername} placehoder="სახელი" />
      <AuthInput
        value={password}
        setValue={setPassword}
        type="password"
        placehoder="პაროლი"
      />
      <AuthSubmitButton text="შეყვანა" />

      <AuthReferText
        text="არ გაქვს ანგარიში?"
        linkText="დარეგისტრირდი"
        linkTo="signup"
      />
    </AuthForm>
  );
}
