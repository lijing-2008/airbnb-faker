import styled from "styled-components";

export const SectionTabsWrapper = styled.div`

    .item {
      box-sizing: border-box;
      flex-basis: 120px;
      flex-shrink: 0;
      padding: 14px 16px;
      margin-right: 16px;
      border-radius: 3px;
      font-size: 17px;
      text-align: center;
      border: 0.5px solid #d8d8d8;
      white-space: nowrap;
      cursor: pointer;

      ${props => props.theme.mixin.boxShadow}
      &.active {
        background-color: ${(props) => props.theme.color.secondaryColor};
        color: #fff;
        box-shadow: 0 0;

        &:hover {
          box-shadow: 0 0;
        }
      }
    }

`
