import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBar $isSticky={isSticky}>
      <Name $isSticky={isSticky}>Aidan Charlton</Name>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  min-height: ${({ $isSticky }) => ($isSticky ? "46px" : "64px")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ $isSticky }) => ($isSticky ? "0 16px" : "0 24px")};
  box-sizing: border-box;
  background-color: white;
  transition: min-height 0.25s ease, padding 0.25s ease;

  @media (max-width: 700px) {
    justify-content: flex-start;
    padding: ${({ $isSticky }) => ($isSticky ? "0 12px" : "0 16px")};
  }
`;

const Name = styled.h1`
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: ${({ $isSticky }) =>
    $isSticky ? "18px" : "clamp(26px, 7vw, 35px)"};
  letter-spacing: ${({ $isSticky }) => ($isSticky ? "0.5px" : "1px")};
  text-align: left;
  white-space: nowrap;
  padding: ${({ $isSticky }) => ($isSticky ? "10px 0" : "30px 0")};
  transform: ${({ $isSticky }) =>
    $isSticky ? "translateX(0)" : "translateX(0)"};
  transition: font-size 0.25s ease, padding 0.25s ease, letter-spacing 0.25s ease;

  @media (max-width: 380px) {
    font-size: ${({ $isSticky }) => ($isSticky ? "16px" : "24px")};
    letter-spacing: 0.5px;
  }
`;