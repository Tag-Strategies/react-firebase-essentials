import styled from "styled-components";
import { metrics, colors } from "../themes";

const Input = styled.input`
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colors.inactive};
  outline: none;
  margin: none;
  margin-bottom: ${metrics.baseUnit}px;
  font-family: inherit;
  padding: 0;
  height: ${metrics.baseUnit * 3 - 1}px;
  width: ${metrics.baseUnit * 16}px;
  font-size: 1.5rem;
  &::placeholder {
    color: ${colors.inactive};
  }
  &:focus {
    border-bottom: 1px solid ${colors.maintext};
  }
  -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: content-box; /* Firefox, other Gecko */
  box-sizing: content-box; /* Opera/IE 8+ */
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Input;
