import styled from "styled-components";

export const ForwardItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;

  .inner {
    position: relative;
    padding: 8px;

    .info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
    }

    .cover {
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .bg-cover {
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      bottom: 0;
      height: 50%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    }

    .content {
      width: 100%;
      position: absolute;
      z-index: 3;
      height: 33%;
      bottom: 0;
      text-align: center;
      color: #fff;
    }

    .address {
      font-size: 18px;
      margin-bottom: 4px;
    }

    .price {
      font-size: 14px;

      &::before {
        content: "均价";
        margin-right: 8px;
      }
    }
  }
`
