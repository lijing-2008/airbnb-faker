import styled from "styled-components";

export const ItemShowWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemWidth};

  .container {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 8px 12px;

    .slider {
      position: relative;

      &:hover .control {
        display: flex;
      }

      .control {
        color: #fff;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: none;
        justify-content: space-between;
        cursor: pointer;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          cursor: pointer;

          &.left {
            background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, .25) 100%);
          }

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, .25) 100%);

          }
        }
      }

      .indicator {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        z-index: 2;
        width: 30%;
        margin: 0 auto;


        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;

            &.active {
              width: 8px;
              height: 8px;
							background-color: #ff385c;
            }
            &.secondary {
              width: 6px;
              height: 6px;
            }
            &.third {
              width: 5px;
              height: 5px;
            }
            &.fourth {
              width: 4px;
              height: 4px;
            }
            &.fifth {
              width: 3px;
              height: 3px;
            }
          }
        }
      }

      .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 4px;
        overflow: hidden;
        background-color: #fff;

        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

    }

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 4px;
      overflow: hidden;
      background-color: #fff;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      padding-top: 8px;

      .plus {
        background-color: #71455C;
        color: #fff;
        padding: 0 4px;
        margin-right: 4px;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 16px;
        border-radius: 3.2px;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC", sans-serif;
      }

      .message, .price {
        color: ${props => props.verifyColor};
      }

      .name {
        font-size: 16px;
        font-weight: 800;
        line-height: 1.375;
      }

      .multi {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .star {
        position: relative;
        z-index: 0;

        .count, .extra {
          margin-left: 4px;
          font-size: 14px;
          color: ${props => props.verifyColor};
        }
      }
    }

  }
`
