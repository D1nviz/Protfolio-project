"use client";
import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
  to {
    transform: translateY(-10px);
  }
`;

const moveDown = keyframes`
  to {
    transform: translateY(10px);
  }
`;
export const Card = styled.div`
  width: 40rem;
  height: 50rem;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }
`;

export const CardInner = styled.div`
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 90%;
    height: 92%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Circle = styled.div`
  width: 10rem;
  height: 10rem;
  background: radial-gradient(var(--color-secondary), var(--color-primary));
  border-radius: 50%;
  position: absolute;
  animation: ${moveUp} 2s ease-in infinite alternate-reverse;

  &:nth-child(1) {
    top: -25px;
    left: -25px;
  }

  &:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: ${moveDown};
  }
`;
