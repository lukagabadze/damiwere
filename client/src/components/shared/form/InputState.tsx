import { ReactElement } from "react";
import { InputProps, inputStyling } from ".";

export default function InputState({
  type,
  placehoder,
  value,
  changeValue,
  className,
}: InputProps): ReactElement | null {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!changeValue) return;

    const newVal = e.currentTarget.value;
    changeValue(newVal);
  }

  return (
    <input
      value={value}
      onChange={handleChange}
      className={inputStyling + " " + className}
    />
  );
}
