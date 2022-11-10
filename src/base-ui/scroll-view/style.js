import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
	margin: 0 0 12px;

  .content {
    overflow: hidden;
    padding: 0;

    .scroll-content {
      display: flex;
      //overflow: hidden;
      transition: transform 250ms ease-in;
    }
  }

  .control {
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 10;

    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }

  }

  .blur {
    position: absolute;
    z-index: 8;
    top: 50%;
    width: 48px;
    height: 68px;
		
    &.left {
      transform: translate(-8px, -50%);
      background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);
    }

    &.right {
			right:0;
      transform: translate(0, -50%);
      background: linear-gradient(to left, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);
    }
  }




`
