import styled from "styled-components";

export const RoomsWrapper = styled.div`
  .desc {
    display: flex;
    margin: 24px 24px 0;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    .text {
      margin-left: 12px;
    }
  }

  .content {
    position: relative;

    .title {
      font-size: 22px;
      margin: 30px 0 10px 24px;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      padding: 0px 15px 20px;
    }

    .loading-cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
			background-color: rgba(255,255,255,.90);
    }
  }
`
