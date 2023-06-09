"use client";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--color-primary);
  color: white;
  height: 10rem;
`;
export const FooterWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoDescContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    filter: invert(1);
  }
  div {
    margin-right: 1rem;
  }
`;
export const FooterDesc = styled.p`
  font-size: 1.4rem;
`;
