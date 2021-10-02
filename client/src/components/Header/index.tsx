import { ReactElement, useState } from "react";
import Menu from "./Menu";

export default function Header(): ReactElement | null {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="flex justify-between fixed w-full bg-main-500 py-2  ">
      <button className="text-2xl cursor-pointer mx-10 text-lg">
        დამიწერე
      </button>
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

      {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </header>
  );
}
