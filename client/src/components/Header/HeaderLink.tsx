import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
  to: string;
  text: string;
}

export function HeaderLink({ to, text }: HeaderLinkProps): ReactElement | null {
  return (
    <Link
      className="rounded-sm font-bold  
			bg-secondary-100 text-black hover:bg-secondary-200 transition-all duration-200
		  text-sm px-2 py-1 sm:text-lg sm:px-4"
      to={to}
    >
      {text}
    </Link>
  );
}
