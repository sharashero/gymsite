import { useDeferredValue, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import SignOutButton from "./SignoutButton";


interface IDropdownItem {
  name: string;
  link: string;
}


interface IDropdown {
  links?: IDropdownItem[];
}


function Dropdown({
  links = [],
}: IDropdown)
{
  const [open, setOpen] = useState(false);
  const isOpen = useDeferredValue(open);

  return (
    <>
      <button
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 p-3 hover:bg-blue-200"
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
        />
      </button>

      <div
        className={twMerge(
          "absolute right-0 top-[110%] w-max rounded-lg bg-neutral-200 py-2 shadow-md",
          isOpen ? "block" : "hidden"
        )}
      >
        <ul
          className="space-y-1"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          {links.map(item => (
            <li
              key={item.link}
              className="px-2 hover:bg-blue-200"
            >
              <Link
                to={item.link}
                onClick={() => setOpen(false)}
              >{item.name}</Link>
            </li>
          ))}

          <li className="px-2 hover:bg-blue-200">
            <SignOutButton />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
