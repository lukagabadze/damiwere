import { ReactElement, useRef } from "react";
import {
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthReferText,
  AuthSubmitButton,
} from ".";

export default function Signup(): ReactElement | null {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordRepeatRef = useRef<HTMLInputElement | null>(null);

  function onSubmit() {}

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

      <AuthSubmitButton text="შეყვანა" />

      <AuthReferText
        text="უკვე გაქვს ანგარიში?"
        linkText="შედი"
        linkTo="login"
      />
    </AuthForm>
  );
}
