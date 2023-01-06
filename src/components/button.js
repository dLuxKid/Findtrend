import React from "react";
import styled from "styled-components";

const jsxx = styled.div`
  background: red;
  fontsize: 1.5rem;

  p {
    color: red;
  }
`;

const Button = () => {
  return (
    <jsxx>
      <p>I Love money</p>
    </jsxx>
  );
};

export default Button;
