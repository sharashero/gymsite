import NavItem, { INavItem } from "./NavItem";


interface INavbar {
  links?: INavItem[];
}


function Navbar({
  links = [],
}: INavbar)
{
  return (
    <nav className="flex max-w-max items-center justify-center gap-2 rounded-full bg-neutral-200 p-2">
      {links.map(item => {
        return (
          <NavItem key={item.link} {...item} />
        );
      })}
    </nav>
  );
}


export default Navbar;
