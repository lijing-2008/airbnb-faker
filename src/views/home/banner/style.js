import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg"

export const TopBannerWrapper = styled.div`
  @media (max-width: 744px) {
    background-position-x: 60%;
  }
  height: 529px;
    //background: center/cover no-repeat url(${coverImg});
  background: center/cover no-repeat url(${require("@/assets/img/cover_01.jpeg")});
`
