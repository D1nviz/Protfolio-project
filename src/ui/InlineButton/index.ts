"use client";
import { styled } from "styled-components";

export const InlineButton = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: underline !important;
  transition: all 0.2s;
  &:hover {
    text-shadow: 0 .5rem 4rem rgba(0, 0, 0, .5);
    transform: scale(1.05);
  }
`;
