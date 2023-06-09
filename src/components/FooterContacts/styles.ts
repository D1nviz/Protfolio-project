"use client";
import styled from "styled-components";

export const ContactsTitle = styled.p`
  font-size: 1.6rem;
  margin-right: 2rem;
`;
export const ContactsList = styled.ul`
  display: flex;
`;
export const ContactsListItem = styled.li`
  margin: 0 1rem;
  position: relative;
  a {
    padding: 4px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 1.5px;
      background-color: #fff;
      transition: all 0.3s;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;

export const ContactsContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;
