import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import addbutton from "../images/add.png";
import main from "../images/main.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: #E7CBCB;
    position: relative;
    font-family: roboto, sans-serif;
  }
`;

export const SearchCard = styled.div`
  padding: 1px;
  border-radius: var(--border-radius);
  background: linear-gradient(
    -67deg,
    rgba(#c8d8e7, 0.7),
    rgba(255, 255, 255, 0.8)
  );
  overflow: hidden;
  box-shadow: -2px -2px 6px rgba(#fff, 0.6), 2px 2px 12px #c8d8e7;
  width: 1180px;
`;

export const SearchCardInner = styled.div`
  padding: 16px 16px;
  background-color: #643843;
  border-radius: 20px;
`;

export const SearchIcon = styled.div`
  min-width: 46px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  margin-right: 12px;
  box-shadow: -2px -2px 6px rgba(#fff, 0.6), 2px 2px 12px #c8d8e7;
`;

export const SearchLabel = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 12px;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  background-color: #e3edf7;
  padding: 16px 32px;
  border: none;
  display: block;
  font-weight: 600;
  font-size: 20px;
  color: #a9b8c9;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  width: 100%;

  &::placeholder {
    color: #6d7f8f;
  }

  &:focus {
    outline: none;
    color: #6d7f8f;
    background-color: lighten(#e3edf7, 3%);
  }
`;

export const SearchInputContainer = styled.form`
  width: 100%;
  --top-shadow: inset 1px 1px 3px #c5d4e3, inset 2px 2px 6px #c5d4e3;
  --bottom-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.7);

  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;

  &:before,
  &:after {
    left: 0;
    top: 0;
    display: block;
    content: "";
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &:before {
    box-shadow: var(--bottom-shadow);
  }

  &:after {
    box-shadow: var(--top-shadow);
  }
`;
export const HomeOuterContainer = styled.div`
  margin-top: 5px;
  height: 900px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const HomeContainer = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 900px;
  object-fit: cover;
  opacity: 0.9;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  position: relative;
`;

export const HomeContainerButton = styled.button`
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #643843;
  color: white;
  font-size: 20px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  height: 50px;
  width: 250px;
  list-style: none;
  opacity: 0.9;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 4%;
  background: #643843;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

export const BrandLogo = styled.img`
  height: 50px;
  widht: 50px;
  border-radius: 50%;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  background-color: #99627a;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  opacity: 0.9;
`;

export const RightContainer = styled.div`
  display: block;
  margin-left: auto;
`;

export const SearchBox = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 30px;
  color: #fff;
  width: 250px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s;

  &::placeholder {
    color: #98d7c2;
  }

  &:focus {
    border-color: #98d7c2;
    width: 400px;
  }
`;

export const LoginLink = styled.a`
  color: #fff;
  opacity: 0.9;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const FooterHeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 4%;
  background: #643843;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  opacity: 0.8;
`;

export const FooterHeadText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 80px;
`;

export const HeadTitle = styled.h1`
  padding-left: 50px;
  color: #643843;
  text-align: center;
  text-transform: capitalize;
  margin-top: 80px;
`;

export const HeadDescription = styled.p`
  width: 80%;
  line-height: 30px;
  padding-left: 50px;
  margin-top: 30px;
  color: #643843;
  font-size: 16px;
`;

export const Title = styled.h2`
  color: #643843;
  opacity: 0.9;
  padding-left: 0;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500px;
`;

export const BooksList = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  margin: 10px 0 20px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 92%;
  padding-left: 10px;
  height: 220px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .CardContainer {
      flex-wrap: nowrap;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  min-width: 150px;
  width: 150px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BookCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const BookName = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
  color: #643843;
`;

export const BooksViewList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BookDescription = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  opacity: 0.8;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BookBody = styled.div`
  flex: 1;
`;

export const BookImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`;

export const CardBody = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(rgb(222 48 6 / 0%), rgb(215 196 152) 90%);
  padding: 10px;
  transition: 0.5s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const CardName = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 60%;
`;

export const CardDescription = styled.p`
  color: #000;
  opacity: 0.8;
  margin: 5px 0;
  font-weight: 500;
  font-size: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  margin-right: 10px;
  color: #643843;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border: none;
  border-left: 1px solid #643843;
  background: transparent;
  outline: none;
  height: 30px;
  color: #643843;
  width: 250px;
  font-weight: 500;

  &::placeholder {
    color: #643843;
  }
`;

export const Button = styled.button`
  background-color: #99627a;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #c88ea7;
  }

  &:focus {
    outline: none;
  }
`;

export const BorrowListButton = styled.button`
  position: relative;
  width: 100%;
  text-transform: capitalize;
  background: none;
  border: none;
  outline: none;
  font-weight: 500;
  text-align: right;
  color: #000;
  margin: 5px 0;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 5px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -5px;
    height: 35px;
    width: 35px;
    background-image: url(${addbutton});
    background-size: cover;
    transform: scale(0.4);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  &:hover:before {
    transform: scale(0.5);
  }
`;

export const PreviousButton = styled.button`
  position: absolute;
  top: 0;
  width: 3%;
  height: 100%;
  z-index: 2;
  border: none;
  outline: none;
  cursor: pointer;
  left: 0;
  background: #c88ea7;
  opacity: 0.3;

  img {
    width: 15px;
    height: 20px;
    opacity: 0;
  }

  &:hover img {
    opacity: 1;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 0;
  width: 3%;
  height: 100%;
  z-index: 2;
  border: none;
  outline: none;
  cursor: pointer;
  right: 0;
  background: #c88ea7;

  opacity: 0.5;

  img {
    width: 15px;
    height: 20px;
    opacity: 0;
  }

  &:hover img {
    opacity: 1;
  }
`;

export const FilterContainer = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  display: flex;
  justifycontent: flex-end;
`;
