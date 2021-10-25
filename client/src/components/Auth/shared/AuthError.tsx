import { ReactElement } from "react";

interface Props {
  error: string;
}

export default function AuthError({ error }: Props): ReactElement | null {
  return <p className="text-red-600 font-bold text-left">{error}</p>;
}
