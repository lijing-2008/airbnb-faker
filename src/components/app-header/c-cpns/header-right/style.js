import styled from "styled-components";
export const HeaderRightWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.textColor.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #F5F5F5;
      }
    }
  }

  .profile {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    border-radius: 25px;
    border: 1px solid ${(props) => props.theme.color.borderColor};
    cursor: pointer;

		${( props ) => props.theme.mixin.boxShadow}

    .avatar {
      color: #666666;
    }
		.menu-list{
			position: fixed;
			top: 72px;
			right: 38px;
			width: 230px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 4px rgba(0,0,0,.18);
			
			.top, .bottom{
				padding: 10px 0;
			}
			.top{
				border-bottom: 1px solid ${props => props.theme.color.borderColor};
			}
			.item{
				height: 40px;
				line-height: 40px;
				padding: 0 20px;
			}
		}
  }

`
