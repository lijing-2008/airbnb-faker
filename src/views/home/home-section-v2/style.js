import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
  margin-top: 30px;

  .btns {
    position: relative;
    width: 1032px;
    height: 80px;
    line-height: 80px;
    box-sizing: border-box;
    margin: -10px 0;
    //padding: 16px 8px;

    overflow: hidden;
    white-space: nowrap;

    .left, .right {
      position: absolute;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 50%;
      text-align: center;
      border: 1px solid ${props => props.theme.color.borderColor};
      box-shadow: 0 1px 4px rgba(0, 0, 0, .14);
    }

    .left {
      transform: translate(-50%, -50%);
      padding-left: 6px;
    }

    .right {

      right: 0;
      padding-right: 6px;
      transform: translate(50%, -50%);
    }

    .btn {
      display: inline-block;
      width: 120px;
      height: 48px;
      margin-right: 16px;
      line-height: 48px;
      border-radius: 4px;
      box-sizing: border-box;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
      font-size: 17px;
      text-align: center;
      font-weight: bold;
      outline: none;
      border: 0.5px solid ${props => props.theme.color.borderColor};

      &:hover {
        cursor: pointer;
      }

      ${props => props.theme.mixin.boxShadow}
    }

    .btn.selected {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
      box-shadow: 0 0;

      &:hover {
        box-shadow: 0 0;
      }
    }
  }
`
