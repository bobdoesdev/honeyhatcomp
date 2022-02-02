import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: space-between;
    justify-content: center;
    text-align: center;
    list-style: none;

    li {
      padding: 0 2rem;
      @media (max-width: 768px) {
        padding: 0 0.5rem;
      }
    }

    @media (max-width: 768px) {
      padding: 10px 0 0;
    }
  }

  a {
    color: black;
    padding: 8px;
    /* font-size: 1.3rem; */
    /* letter-spacing: 3px; */
    text-decoration: none;
    font-weight: 600;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--yellow);
      transition: all 0.1s ease-in;
    }

    &:hover {
      color: var(--yellow);
      animation-name: bounce;
      &:after {
        width: 100%;
      }
    }
  }
`;

const LogoStyles = styled.img`
  max-width: 250px;
  margin: 1rem auto 3rem;
  display: block;

  &:hover {
    text-decoration: none;
  }
`;

const Nav = (props) => (
  <NavStyles>
    <ul>
      <li>
        <Link href="/">Shop</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
