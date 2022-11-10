import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
	color: ${props => props.color};
	display: flex;
	align-items: center;
	font-size: 17px;
	margin-top: 12px;
	&:hover{
		cursor: pointer;
		text-decoration: underline ${props=>props.color};
	}
	.info{
		margin-right: 4px;
	}
`
