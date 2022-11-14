import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
	.picture-container{
		display: flex;
		height: 350px;
    overflow: hidden;
		cursor: pointer;
		img{
			width: 100%;
			height: 100%;
      object-fit: cover;
			transition: transform 500ms ease;
			&:hover{
				transform: scale(1.05);
			}
		}
		.left{
			flex: 1;
			overflow: hidden;
      border: 1px solid #000;
		}
		.right{
			position: relative;
			display: flex;
			flex-wrap: wrap;
			flex: 1;
			overflow: hidden;
			.item{
				width: 50%;
        border: 1px solid #000;
				overflow: hidden;
			}
			.show-btn{
        position: absolute;
				z-index: 99;
				right: 10px;
				bottom: 10px;
				box-sizing: border-box;
				padding: 4px;
				background-color: white;
				border-radius: 5px;
        border: 1px solid #000;
			}
		}
	}
`
