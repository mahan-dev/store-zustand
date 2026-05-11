import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.div<{ open?: boolean }>`
  position: relative;

  background: red;

  div {
    position: absolute;
  }

  & :nth-child(1) {
    transition: all 0.4s ease;
    display: ${(props) => (props.open ? "hidden" : "hidden")}
    transform: ${(props) =>
      props.open ? "translateX(-100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  & :nth-child(2) {
    transition: all 0.4s ease;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${(props) => (props.open ? 1 : 0)};
  }
`;

const MenuIcon = () => {
  const [reveal, setReveal] = useState<boolean>(false);

  const handleClick = () => {
    setReveal(!reveal);
  };

  return (
    <StyledButton open={reveal} onClick={handleClick}>
      <div>open</div>
      <div>close</div>
    </StyledButton>
  );
};

export default MenuIcon;
