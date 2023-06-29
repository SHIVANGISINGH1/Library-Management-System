import React from "react";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  HomeContainer,
  HomeOuterContainer,
  HomeContainerButton,
  NavItem,
  NavLink,
} from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import main from "../images/main.jpg";

const Home = () => {
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>
            Library Management System
          </HeadTitle>
          <HomeOuterContainer>
            <HomeContainer src={main} />
            <HomeContainerButton type="submit">
              <NavItem>
                <NavLink href="/books"> Start Learning Now!!</NavLink>
              </NavItem>
            </HomeContainerButton>
          </HomeOuterContainer>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Home;
