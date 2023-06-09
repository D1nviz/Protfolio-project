"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header``;
export const NavContainer = styled.nav`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
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
