import { ReactElement } from "react";

interface AuthSubmitButtonProps {
  text: string;
}

export default function AuthSubmitButton({
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
