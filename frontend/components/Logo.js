import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const LogoWrapper = styled.div`
  text-align: center;
  max-width: 250px;
  margin: 0 auto;
  display: block;

  a {
    display: inline-block;
  }
`;

export default function Logo(props) {
  return (
    <LogoWrapper>
      <Link href="/">
        <img src="/logo.png" alt="HoneyHatComp" />
      </Link>
    </LogoWrapper>
  );
}
