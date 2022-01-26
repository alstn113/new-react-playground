import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isDropMenuOpen, setIsDropMenuOpen] = useState<boolean>(false);
  const [isMegaBoxOpen, setIsMegaBoxOpen] = useState<boolean>(false);
  return (
    <>
      <Nav>
        <Wrapper>
          <Logo>
            <Link to="/">MINSOO'S</Link>
          </Logo>
          <NavLinks isNavOpen={isNavOpen}>
            <CloseBtn isNavOpen={isNavOpen} onClick={() => setIsNavOpen(!isNavOpen)}>
              <FaTimes />
            </CloseBtn>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <button className="desktop-item">Dropdown Menu</button>
              <button className="mobile-item" onClick={() => setIsDropMenuOpen(!isDropMenuOpen)}>
                Dropdown Menu
              </button>
              <DropMenu isDropMenuOpen={isDropMenuOpen} className="drop-menu">
                <li>
                  <Link to="/">Drop Menu 1</Link>
                </li>
                <li>
                  <Link to="/">Drop Menu 2</Link>
                </li>
                <li>
                  <Link to="/">Drop Menu 3</Link>
                </li>
                <li>
                  <Link to="/">Drop Menu 4</Link>
                </li>
              </DropMenu>
            </li>
            <li>
              <button className="desktop-item">Mega Menu</button>
              <button className="mobile-item" onClick={() => setIsMegaBoxOpen(!isMegaBoxOpen)}>
                Mega Menu
              </button>
              <MegaBox isMegaBoxOpen={isMegaBoxOpen} className="mega-box">
                <Content>
                  <Row>
                    <img src={"/images/cat.jpg"} alt="" />
                  </Row>
                  <Row>
                    <header>Design Services</header>
                    <ul>
                      <li>
                        <Link to="/">Graphics</Link>
                      </li>
                      <li>
                        <Link to="/">Vectors</Link>
                      </li>
                      <li>
                        <Link to="/">Business cards</Link>
                      </li>
                      <li>
                        <Link to="/">Custom logo</Link>
                      </li>
                    </ul>
                  </Row>
                  <Row>
                    <header>Email Services</header>
                    <ul>
                      <li>
                        <Link to="/">Personal Email</Link>
                      </li>
                      <li>
                        <Link to="/">Business Email</Link>
                      </li>
                      <li>
                        <Link to="/">Mobile Email</Link>
                      </li>
                      <li>
                        <Link to="/">Web Marketing</Link>
                      </li>
                    </ul>
                  </Row>
                  <Row>
                    <header>Security services</header>
                    <ul>
                      <li>
                        <Link to="/">Site Seal</Link>
                      </li>
                      <li>
                        <Link to="/">VPS Hosting</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/">Website design</Link>
                      </li>
                    </ul>
                  </Row>
                </Content>
              </MegaBox>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
          </NavLinks>
          <Hamburger isNavOpen={isNavOpen} onClick={() => setIsNavOpen(!isNavOpen)}>
            <FaBars />
          </Hamburger>
        </Wrapper>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  * {
    font-family: BMEULJIRO;
  }
  position: fixed;
  z-index: 99;
  background: #242526;
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  max-width: 1300px;
  padding: 0 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  a {
    color: #f2f2f2;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }
`;
const NavLinks = styled.ul<{ isNavOpen: boolean }>`
  .mobile-item {
    display: none;
  }
  display: inline-flex;
  li {
    list-style: none;
    &:hover .drop-menu,
    &:hover .mega-box {
      transition: all 0.3s ease;
      opacity: 1;
      visibility: visible;
    }
    a,
    button {
      background: none;
      border: 0;
      outline: 0;
      color: #f2f2f2;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      padding: 9px 15px;
      border-radius: 5px;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background: #3a3b3c;
      }
    }
  }
  ${({ theme }) => theme.media.custom(970)} {
    .desktop-item {
      display: none;
    }
    .mobile-item {
      display: block;
      color: #f2f2f2;
      font-size: 20px;
      font-weight: 500;
      padding-left: 20px;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s ease;
      &:hover {
        background: #3a3b3c;
      }
    }
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
    li {
      margin: 15px 10px;
      a {
        padding: 0 20px;
        display: block;
        font-size: 20px;
      }
    }
    ${({ isNavOpen }) =>
      isNavOpen &&
      css`
        left: 0%;
      `}
  }
`;
const DropMenu = styled.ul<{ isDropMenuOpen: boolean }>`
  position: absolute;
  background: #242526;
  width: 180px;
  line-height: 45px;
  top: 70px;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  li a {
    width: 100%;
    display: block;
    padding: 0 0 0 15px;
    font-weight: 400;
    border-radius: 0px;
  }
  ${({ theme }) => theme.media.custom(970)} {
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    overflow: hidden;
    box-shadow: none;
    display: none;
    li {
      margin: 0;
      a {
        border-radius: 5px;
        font-size: 18px;
      }
    }
    ${({ isDropMenuOpen }) =>
      isDropMenuOpen &&
      css`
        display: block;
      `}
  }
`;
const MegaBox = styled.div<{ isMegaBoxOpen: boolean }>`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 0 30px;
  opacity: 0;
  visibility: hidden;
  ${({ theme }) => theme.media.custom(970)} {
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    overflow: hidden;
    display: none
      ${({ isMegaBoxOpen }) =>
        isMegaBoxOpen &&
        css`
          display: block;
        `};
  }
`;
const Content = styled.div`
  background: #242526;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.media.custom(970)} {
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
`;
const Row = styled.div`
  width: calc(25% - 30px);
  line-height: 45px;
  header {
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ul {
    margin-left: -40px;
    border-left: 1px solid rgba(255, 255, 255, 0.09);
    li {
      padding: 0 20px;
      a {
        padding: 0 20px;
        color: #d9d9d9;
        font-size: 17px;
        display: block;
        &:hover {
          color: #f2f2f2;
        }
      }
    }
  }
  ${({ theme }) => theme.media.custom(970)} {
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    &:nth-child(1),
    &:nth-child(1) {
      border-top: 0px;
    }
    ul {
      border-left: 0px;
      padding-left: 15px;
    }
    li {
      margin: 0px;
    }
    header {
      font-size: 19px;
    }
  }
`;
const StyledButton = styled.button<{ isNavOpen: boolean }>`
  color: #fff;
  font-size: 20px;
  background: none;
  border: 0;
  outline: 0;
  display: none;
  cursor: pointer;
`;
const Hamburger = styled(StyledButton)`
  ${({ theme }) => theme.media.custom(970)} {
    display: block;
    ${({ isNavOpen }) =>
      isNavOpen &&
      css`
        display: none;
      `}
  }
`;
const CloseBtn = styled(StyledButton)`
  position: absolute;
  right: 30px;
  top: 30px;
  ${({ theme }) => theme.media.custom(970)} {
    ${({ isNavOpen }) =>
      isNavOpen &&
      css`
        display: block;
      `}
  }
`;

export default Navbar;
