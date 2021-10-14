import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { UserState } from "../../store/user";
import Menu from "./Menu";

export default function Header(): ReactElement | null {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user }: UserState = useAppSelector((state) => state.user);

  function toggleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="flex justify-between items-center w-full bg-main-500 py-2  ">
      <Link
        to="/"
        className="cursor-pointer text-base mx-3 sm:mx-10 sm:text-2xl"
      >
        დამიწერე
      </Link>

      {user ? (
        <button onClick={toggleMenuOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 cursor-pointer mx-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      ) : (
        <div className="space-x-5 mr-5 ">
          <HeaderLink to="/auth/login" text="შესვლა" />
          <HeaderLink to="/auth/signup" text="რეგისტრაცია" />
        </div>
      )}

      {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </header>
  );
}

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
