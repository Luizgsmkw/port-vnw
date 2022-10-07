import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  background: rgba(108, 223, 225, 0.57);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.9px);
  -webkit-backdrop-filter: blur(1.9px);
  border: 1px solid rgba(108, 223, 225, 0.3);
`;

export const NavDesktop = styled.nav`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: 500px) {
    display: initial;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 400px;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: #2e2e2e;
  display: block;
  padding: 5px 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3d3d3d;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: left;
  }
  &:hover:before {
    transform: scaleX(1);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3d3d3d;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: right;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const LinkHeaderMobile = styled(Link)`
  text-decoration: none;
  color: white;
  display: block;
  padding: 8px 10px;
  position: relative;
  margin-bottom: 20px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: left;
  }
  &:hover:before {
    transform: scaleX(1);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: right;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
