import styled from "styled-components";

export const FooterSectionWrapper = styled.div`
  width: 262px;
  padding: 0 8px;
	.name{
		font-weight: 700;
	}

	.list{
		color: #484848;
		margin-top: 16px;
		.item{
			margin-bottom: 4px;
			&:hover{
				cursor: pointer;
				text-decoration: #222222 underline;
			}
		}
	}
`
