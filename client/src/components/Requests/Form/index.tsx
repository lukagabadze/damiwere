import { ReactElement } from "react";

interface Props {}

export default function RequestForm({}: Props): ReactElement | null {
  return (
    <form className="bg-main-100 border-2 border-white max-w-2xl w-full">
      <input className="text-black m-2 text-xl" placeholder="Title" />
    </form>
  );
}
