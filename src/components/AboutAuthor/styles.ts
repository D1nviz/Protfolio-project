"use client";

import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
`;
export const AboutDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  color: var(--color-primary);
  background-color: rgba(27,27,27,.1);
  padding: 3rem;
  border-radius: 2rem;
`;
export const AboutTitle = styled.h2`
  text-align: left;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: var(--color-tertiary);
  line-height: 400%;
  font-weight: 700;
`;
export const AboutDesc = styled.p`
  text-align: left;
  line-height: 140%;
  font-weight: 700;
`;
