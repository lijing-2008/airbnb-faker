import styled from "styled-components";

export const ItemShowWrapper = styled.div`
	flex-shrink: 0;
	box-sizing: border-box;
	width: ${props => props.itemWidth};
	
  .container {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 8px 12px;

    .cover {
			position: relative;
			box-sizing: border-box;
			padding: 66.66% 8px 0;
      border-radius: 4px;
			overflow: hidden;
			img{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
    }

    .text {
      padding-top: 8px;
			.plus{
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
			.star{
				position: relative;
				z-index: 0;
        .count, .extra{
					margin-left: 4px;
          font-size: 14px;
          color: ${props => props.verifyColor};
        }
			}
    }

  }
`
