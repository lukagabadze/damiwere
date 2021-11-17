import { ReactElement, useEffect } from "react";
import { requestApi } from "../../api";
import RequestForm from "./Form";

export default function Requests(): ReactElement | null {
  return (
    <main className="">
      {/*<RequestForm />*/}

      <div className="relative bg-red-200 w-min m-5 group">
        <button className="bg-main-200 rounded-full p-2 duration-200 hover:bg-white hover:text-main-200">
          <PlusIcon />
        </button>
        <p className="absolute top-3 right-0 whitespace-nowrap group-hover:left-10">
          მოითხოვე დავალება
        </p>
      </div>
    </main>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}
