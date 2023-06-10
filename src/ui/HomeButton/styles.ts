"use client";
import styled from "styled-components";

export const FancyButton = styled.a`
  background-color: transparent;
  border: 2.5px solid var(--color-primary);
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-right: 4rem;
  outline: none;
  overflow: visible;
  padding: 0.7em 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 1.8rem;

  &:hover {
    color: white;
    background: var(--color-primary);
  }

  &::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: #000;
    top: 50%;
    left: 1rem;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  &:hover::before {
    width: 0.9375rem;
    background: #fff;
  }

  .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 1em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: #000;
  }

  &:hover .text {
    color: white;
    padding-left: 1.5em;
  }

  .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #fff;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  &:hover .top-key {
    left: -2px;
    width: 0px;
  }

  .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #fff;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #fff;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  &:hover .bottom-key-1,
  &:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }
`;
