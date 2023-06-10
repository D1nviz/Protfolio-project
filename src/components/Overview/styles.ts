"use client";
import styled from "styled-components";

export const OverviewContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ImgContainer = styled.div`
  flex: 0 0 50%;
  max-width: 60rem;
  max-height: 60rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
export const IntroductionContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const IntroductionTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
`;
export const IntroductionDesc = styled.p`
  font-weight: 500;
  line-height: 120%;
  margin: 2rem 0;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
