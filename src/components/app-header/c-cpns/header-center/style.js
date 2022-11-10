import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
	.search-bar{
    display: flex;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding-left: 12px;
    border-radius: 25px;
    border: 1px solid ${(props) => props.theme.color.borderColor};
    cursor: pointer;
    font-weight: 500;
    .text{
      box-sizing: border-box;
      padding: 0 12px;
      width: 251px;

    }
    .search{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      margin: 7px 7px 7px 0;
      color: white;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 16px;
    }

    box-shadow: 0 1px 2px rgba(0,0,0,.18);
    ${props => props.theme.mixin.boxShadow}
	}
`
