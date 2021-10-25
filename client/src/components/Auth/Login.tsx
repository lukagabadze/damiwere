import { ReactElement, useRef, useState } from "react";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from "./shared";
import { userApi } from "../../api";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../store/user/userActions";
import AuthError from "./shared/AuthError";

export default function Login(): ReactElement | null {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    if (!username || !password) return;

    setError("");
    dispatch(fetchUserRequest());

    const res = await userApi.login({ username, password });

    if ("data" in res) {
      dispatch(fetchUserSuccess(res.data.user));

      usernameRef.current!.value = "";
      passwordRef.current!.value = "";
    } else {
      dispatch(fetchUserFailure(res));
      setError(res.message);
    }
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <AuthHeader header="შესვლა" />

      <AuthInput ref={usernameRef} placehoder="სახელი" />
      <AuthInput ref={passwordRef} type="password" placehoder="პაროლი" />
      <AuthError error={error} />
      <AuthSubmitButton text="შეყვანა" />

      <AuthReferText
        text="არ გაქვს ანგარიში?"
        linkText="დარეგისტრირდი"
        linkTo="signup"
      />
    </AuthForm>
  );
}
