import styled from "styled-components";

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.color.borderColor};

  .left {
    display: flex;

    .logo {
      display: flex;
      align-items: center;
      width: 29px;
    }

    img {
      position: relative;
      bottom: 8px;
      width: 20px;
      margin: 0 4px;
    }

    a {
      margin-right: 2px;
      &:hover {

        text-decoration: #222222 underline;
      }
    }
  }
	.right{
		display: flex;
		width: 72px;
		height: 43px;
		.item{
      color: ${props  => props.theme.textColor.primaryColor};
			padding: 0 8px;
			&:hover{
				cursor: pointer;
			}
		}
	}
`
