import React, { ReactElement } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth(): ReactElement | null {
  return (
    <Switch>
      <Route path="*/login">
        <Login />
      </Route>
      <Route path="*/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

interface AuthFormProps {
  children: React.ReactNode;
  onSubmit(): void;
}

export function AuthForm({
  children,
  onSubmit,
}: AuthFormProps): ReactElement | null {
  return (
    <form
      className="flex flex-col w-full max-w-sm m-auto px-4"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

interface AuthHeaderProps {
  header: string;
}

export function AuthHeader({ header }: AuthHeaderProps): ReactElement | null {
  return <p className="text-3xl font-bold mt-10 mb-0 text-center">{header}</p>;
}

interface AuthInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placehoder: string;
  type?: string;
}

export function AuthInput({
  value,
  setValue,
  placehoder,
  type = "text",
}: AuthInputProps): ReactElement | null {
  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  }

  return (
    <input
      type={type}
      placeholder={placehoder}
      value={value}
      onChange={inputChangeHandler}
      className="bg-transparent border-b-2 border-white text-lg my-5 py-2 px-1 focus:outline-none"
    />
  );
}

interface AuthSubmitButtonProps {
  text: string;
}

export function AuthSubmitButton({
  text,
}: AuthSubmitButtonProps): ReactElement | null {
  return (
    <button
      className="w-full bg-secondary-100 text-lg text-black rounded-lg border-2 font-bold my-3"
      type="submit"
    >
      {text}
    </button>
  );
}

interface AuthReferTextProps {
  text: string;
  linkText: string;
  linkTo: string;
}

export function AuthReferText({ text, linkText, linkTo }: AuthReferTextProps) {
  return (
    <div className="flex space-x-1">
      <p>{text}</p>
      <Link className="font-bold underline" to={linkTo}>
        {linkText}
      </Link>
    </div>
  );
}
