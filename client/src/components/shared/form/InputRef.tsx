import { forwardRef } from "react";
import { InputProps, inputStyling } from ".";

const InputRef = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placehoder, className }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placehoder}
        className={inputStyling + " " + className}
      />
    );
  }
);
export default InputRef;
