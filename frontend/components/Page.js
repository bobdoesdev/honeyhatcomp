import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: RobotoSlab;
    src: url('/static/fonts/RobotoSlab-Regular.ttf');
  }

  @font-face {
    font-family: OpenSans;
    src: url('/static/fonts/OpenSans-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: OpenSansLight;
    src: url('/static/fonts/OpenSans-Light.ttf');
  }
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #edb954;
    --white: #fff;
    --grey: #efefef;
    --maxWidth: 1200px;
  }


  *{
    box-sizing: border-box;
  }

  html{
    font-size: 10px;
    font-family:  OpenSans, serif;
    color: var(--black);
  }

  body {
    font-size: 2rem;
  }



  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family:  RobotoSlab, serif;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--yellow);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .section-header{
    margin-bottom: 75px;
    text-align: center;
    color: black;
  }

  .lead{
    margin: 0 0 20px 0;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.4;
    font-family: OpenSansLight;
  }

  fieldset {
    border: none;
    padding: 0;
  }

  button {
    background: var(--yellow);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .btn {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 20px 0;
    transition: All .5s ease;
    text-decoration: none;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: white;
    border: 2px solid var(--yellow);
    border-radius: 0;
    background: rgba(0, 0, 0, .3);
    padding: 10px 16px;

    &:hover{
      background-color: var(--yellow);
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }


`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
