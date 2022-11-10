import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.color.borderColor};
	font-size: 14px;
	margin-top: 28px;
	
  .container {
    width: 1080px;
    height: 312px;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 48px 24px;
		.top{
      display: flex;
		}
		.bottom{
			
		}
  }
`
