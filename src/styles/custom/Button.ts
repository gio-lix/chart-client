import styled from "styled-components"

export interface Props {
    bg: string;
}

export const Button = styled.button<Props>`
  display: inline-block;
  height: auto;
  padding: 4px 15px;
  text-align: center;
  border: none;
  border-radius: 7px;
  background: ${(b: Props) => b.bg};
  opacity: 0.8;
  color: white;
  &:hover {
    opacity: 1;
  }
`
