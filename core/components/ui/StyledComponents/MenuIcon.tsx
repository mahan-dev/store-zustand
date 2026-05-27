import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Button } from "@/ui/button";

const StyledButton = styled.div<{ open?: boolean }>`
  position: relative;

  button {
    position: absolute;
  }

  > :nth-child(1) {
    transition: all 0.4s ease;

    transform: ${(props) =>
      props.open ? "translateX(-100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  > :nth-child(2) {
    transition: all 0.4s ease;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${(props) => (props.open ? 1 : 0)};
  }
`;

const MenuIcon = () => {
  const [reveal, setReveal] = useState<boolean>(false);
  const [mount, setMount] = useState<boolean>(false);

  const handleClick = () => {
    setReveal(!reveal);
  };

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return;

  return (
    <StyledButton open={reveal} onClick={handleClick}>
      <Button variant="outline">
        <HiMenuAlt3 className="text-[#9D44B5]" />
      </Button>
      <Button variant="outline">
        <IoClose className=" text-[#9D44B5]" />
      </Button>
    </StyledButton>
  );
};

export default MenuIcon;
