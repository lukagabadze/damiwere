import { ReactElement } from "react";

interface AuthHeaderProps {
  header: string;
}

export default function AuthHeader({
  header,
}: AuthHeaderProps): ReactElement | null {
  return <p className="text-3xl font-bold mt-10 mb-0 text-center">{header}</p>;
}
