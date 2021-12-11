import InputRef from "./InputRef";
import InputState from "./InputState";
export { InputRef, InputState };

export interface InputProps {
  placehoder?: string;
  type?: string;
  className?: string;
  value?: any;
  changeValue?(newVal: any): void;
}

export const inputStyling =
  "bg-transparent border-b-2 border-white text-lg my-5 py-2 px-1 focus:outline-none";
