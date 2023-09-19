import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


export interface INavItem {
  icon: IconDefinition;
  link: string;
}


function NavItem({
  icon,
  link,
}: INavItem)
{
  return (
    <NavLink
      to={link}
      className={({ isActive }) => twMerge(
        "flex h-12 w-12 items-center justify-center rounded-full p-2",
        isActive
          ? "bg-blue-400 text-black"
          : "bg-neutral-300 text-neutral-700 hover:bg-blue-200",
      )}
    >
      <FontAwesomeIcon
        className="text-inherit"
        icon={icon}
        size="xl"
      />
    </NavLink>
  );
}


export default NavItem;
