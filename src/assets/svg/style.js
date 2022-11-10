import styled from "styled-components";

export const ArrowCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color.borderColor};
  box-shadow: 0 0 2px rgba(0, 0, 0, .15);

  &:active {
    outline: 1px solid #504b4b;
  }

  img {
  }
`
