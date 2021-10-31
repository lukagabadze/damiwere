import { ReactElement, useRef, useState } from "react";
import { authApi } from "../../api";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../store/user/userActions";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from "./shared";
import AuthError from "./shared/AuthError";
import { saveTokens } from "./utils/saveTokens";

export default function Signup(): ReactElement | null {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordRepeatRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");

  //const userStore = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordRepeat = passwordRepeatRef.current?.value;
    if (!username || !password) return;

    if (password !== passwordRepeat) {
      return setError("პაროლები არ ემთხვევა");
    }

    setError("");
    dispatch(fetchUserRequest());

    const res = await authApi.signup({ username, password });

    if ("data" in res) {
      dispatch(fetchUserSuccess(res.data.user));
      saveTokens(res.data.accessToken);

      usernameRef.current!.value = "";
      passwordRef.current!.value = "";
      passwordRepeatRef.current!.value = "";
    } else {
      dispatch(fetchUserFailure(res));

      setError(res.message);
    }
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <AuthHeader header="რეგისტრაცია" />

      <AuthInput ref={usernameRef} placehoder="სახელი" />
      <AuthInput ref={passwordRef} type="password" placehoder="პაროლი" />
      <AuthInput
        ref={passwordRepeatRef}
        type="password"
        placehoder="გაიმეორეთ პაროლი"
      />
      <AuthError error={error} />
      <AuthSubmitButton text="შეყვანა" />

      <AuthReferText
        text="უკვე გაქვს ანგარიში?"
        linkText="შედი"
        linkTo="login"
      />
    </AuthForm>
  );
}
