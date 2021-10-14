import { ReactElement, useState } from "react";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from ".";

export default function Login(): ReactElement | null {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {}

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
