import React from "react";
import { HeadDescription } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
} from "../components/Styles";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>User Login</HeadTitle>

          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
                id="name"
                name="name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="pw"
                name="pw"
              />
            </FormGroup>

            {isAuthenticated ? (
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                style={{ marginLeft: "110px", marginTop: "50px" }}
                type="submit"
              >
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                style={{ marginLeft: "110px", marginTop: "50px" }}
                type="submit"
              >
                Login
              </Button>
            )}
            <HeadDescription style={{ marginLeft: "30px" }}>
              New User? <a href="/signup">Signup!</a>{" "}
            </HeadDescription>
          </form>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Login;
