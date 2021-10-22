import { ReactElement, useRef } from "react";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from ".";
import { userApi } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../store/user/userActions";

export default function Login(): ReactElement | null {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const userStore = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  console.log("userStore + ", userStore);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!usernameRef.current || !passwordRef.current) return;

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    dispatch(fetchUserRequest());

    const res = await userApi.login({ username, password });
    console.log("res ", res);

    if ("data" in res) {
      console.log("SHEN SHIG XOM AR GAQVS SHEMTXVEVIT");
      console.log(res.data);
      dispatch(fetchUserSuccess(res.data.user));
    } else {
      dispatch(fetchUserFailure(res));
    }
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <AuthHeader header="შესვლა" />

      <AuthInput ref={usernameRef} placehoder="სახელი" />
      <AuthInput ref={passwordRef} type="password" placehoder="პაროლი" />
      <AuthSubmitButton text="შეყვანა" />

      <AuthReferText
        text="არ გაქვს ანგარიში?"
        linkText="დარეგისტრირდი"
        linkTo="signup"
      />
    </AuthForm>
  );
}
