"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavList, NavListItem } from "./styles";
import { INavLink } from "@/types";

interface INavigationProps {
  navLinks: INavLink[];
}
const Navigation: FC<INavigationProps> = ({ navLinks }) => {
  const pathname = usePathname();
  return (
    <NavList>
      {navLinks.map(({ path, label }) => {
        const isActive = pathname === path;
        return (
          <NavListItem key={path}>
            <Link className={isActive ? "active" : ""} href={path}>
              {label}
            </Link>
          </NavListItem>
        );
      })}
    </NavList>
  );
};

export default Navigation;
