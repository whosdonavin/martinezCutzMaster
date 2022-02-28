import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media (max-width: 750px) {
      ${props}
    }
  `;
};

export const IPadPro = (props) => {
  return css`
    @media (max-width: 1024px) {
      ${props}
    }
  `;
};
