"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header``;
export const NavContainer = styled.nav`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
`;
export const NavList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavListItem = styled.li`
  margin: 0 1rem;
  position: relative;
  a {
    padding: 0.5rem 0.5rem;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 1.5px;
      background-color: #04031e;
      transition: all .3s;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ContactItem = styled.li`
  margin: 0 1rem;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`;
