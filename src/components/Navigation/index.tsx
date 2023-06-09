"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { NavList, NavListItem } from "./styles";

const Navigation = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <NavList>
      {navLinks.map(({ path, label }) => {
        const isActive = pathname === path;
        return (
          <NavListItem key={path}>
            <Link className={isActive? "active" : ""} href={path}>{label}</Link>
          </NavListItem>
        );
      })}
    </NavList>
  );
};

export default Navigation;
