import styled from "styled-components";
import Link from "next/link";

const TextLink = styled(Link)`
  font-family: Playfair Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  color: #000000;
  text-decoration: underline;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const AppLink = ({ children, to, state, ...otherProps }) => {
  return (
    <TextLink href={to} {...otherProps}>
      {children}
    </TextLink>
  );
};

export default AppLink;
