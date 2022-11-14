import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: sticky;
  top: 80px;
	background-color: #fff;
	z-index: 10;

  .filter {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid ${props => props.theme.color.borderColor};
  }

  .items {
    display: flex;
    padding-left: 16px;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      height: 32px;
      padding: 6px 12px;
      margin: 0 8px;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.color.borderColor};
      font-size: 14px;
      cursor: pointer;

      &:hover {
        border-color: #f0f0f0;
        background-color: #F0F0F0;
      }

      &.active {
        background-color: ${props => props.theme.color.secondaryColor};
        color: #fff;
        border: 1px solid ${props => props.theme.color.secondaryColor};
      }
    }
  }

  .map {

  }
`
