import { ReactElement, useState } from "react";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from ".";

export default function Signup(): ReactElement | null {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function onSubmit() {}

  return (
    <AuthForm onSubmit={onSubmit}>
      <AuthHeader header="რეგისტრაცია" />

      <AuthInput value={username} setValue={setUsername} placehoder="სახელი" />
      <AuthInput
        value={password}
        setValue={setPassword}
        type="password"
        placehoder="პაროლი"
      />
      <AuthInput
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        type="password"
        placehoder="გაიმეორეთ პაროლი"
      />
      <AuthSubmitButton text="შეყვანა" />

      <AuthReferText
        text="უკვე გაქვს ანგარიში?"
        linkText="შედი"
        linkTo="login"
      />
    </AuthForm>
  );
}
