import React from "react";

interface AuthInputProps {
  //ref: MutableRefObject<HTMLInputElement | null>;
  placehoder: string;
  type?: string;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ type, placehoder }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placehoder}
        className="bg-transparent border-b-2 border-white text-lg my-5 py-2 px-1 focus:outline-none"
      />
    );
  }
);

export default AuthInput;
