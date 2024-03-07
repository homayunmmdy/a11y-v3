import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    id: 1,
    name: "خانه",
    href: "/",
  },
  {
    id: 2,
    name: "پروژه ها",
    href: "/projects",
  },
];
const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              className={clsx(
                "block px-3  text-gray-600 dark:text-white rounded md:bg-transparent",
                {
                  "text-blue-600": pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLink;
