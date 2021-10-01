import React, { ReactElement } from "react";

interface MenuItemProps {
  name: string;
  svg?: React.ReactNode;
  onClick: () => void;
  noBorderTop?: boolean;
}

export default function MenuItem({
  name,
  svg = null,
  onClick,
  noBorderTop = false,
}: MenuItemProps): ReactElement {
  return (
    <div
      className={
        "flex items-center justify-left pl-2 pr-10 py-1 font-bold text-base cursor-pointer select-none hover:bg-main-100  " +
        `${!noBorderTop && "border-t-2 border-secondary-500"}`
      }
      onClick={onClick}
    >
      {svg}
      <p className="px-1">{name}</p>
    </div>
  );
}
