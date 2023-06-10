"use client";
import styled from "styled-components";

export const BulbContainer = styled.div`
  position: absolute;
  right: 5rem;
  bottom: 2rem;
  &:hover {
    filter: saturate(200%);
  }
`;
