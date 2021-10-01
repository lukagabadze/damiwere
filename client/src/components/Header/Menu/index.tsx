import React, { ReactElement, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { LogoutSVG, UserSVG } from "../../../utils/svgs";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({
  menuOpen,
  setMenuOpen,
}: Props): ReactElement | null {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function detectOutsideClick(e: MouseEvent) {
      const menu = menuRef.current;
      if (!menu) return;

      if (!menu.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("click", detectOutsideClick);

    return () => {
      window.removeEventListener("click", detectOutsideClick);
    };
  }, [setMenuOpen]);

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="menuWindowww"
          className="overflow-hidden fixed z-20 h-96 right-6 top-14 bg-secondary-100 text-black border-2 rounded-lg border-secondary-500"
          ref={menuRef}
          initial={{ height: 20 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.25 }}
        >
          <MenuItem
            name="პროფილი"
            svg={UserSVG(5)}
            onClick={() => console.log("profili")}
            noBorderTop
          />
          <MenuItem name="ზდ გაბო" onClick={() => console.log("zd")} />
          <MenuItem name="ზდ გაბო" onClick={() => console.log("zd")} />
          <MenuItem name="ზდ გაბო" onClick={() => console.log("zd")} />
          <MenuItem
            name="გასვლა"
            svg={LogoutSVG(5)}
            onClick={() => console.log("gasvla")}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
