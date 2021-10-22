import { ReactElement } from "react";

interface AuthFormProps {
  children: React.ReactNode;
  onSubmit(args: any): void;
}

export default function AuthForm({
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
