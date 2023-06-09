"use client";
import styled from "styled-components";
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
      background-color: var(--color-primary);
      transition: all 0.3s;
    }
    &:hover::before {
      width: 100%;
    }
    &.active {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 1.5px;
        background-color: var(--color-primary);
        transition: all 0.3s;
      }
    }
  }
`;