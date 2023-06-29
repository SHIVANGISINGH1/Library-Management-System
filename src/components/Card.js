import { useContext, useState } from "react";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  BorrowListButton,
  CardName,
} from "./Styles";
import bookContext from "../context/books/bookContext";
import book from "../images/books.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const CardComponent = ({ img, title, desc, borrow, author, release, id }) => {
  const data = useContext(bookContext);
  const addBook = data.addBook;
  const removeBook = data.removeBook;
  const inBor = data.inBorrow(id);
const { isAuthenticated, loginWithRedirect } =
    useAuth0();
  return (
    <Card key={id}>
      <CardImage src={book} />
      <CardBody>
        <CardName>{title}</CardName>
        <p>{author}</p>
        <p>{release}</p>
        <CardDescription>{desc}</CardDescription>
        {!inBor ? (
          <BorrowListButton
            onClick={() => {
              console.log("add to borrow books");
              if (!isAuthenticated) {
                return loginWithRedirect();
              } 
              addBook(id);
            }}
          >
            Borrow
          </BorrowListButton>
        ) : (
          <BorrowListButton
            onClick={() => {
              console.log("remove to borrow books");
              removeBook(id);
            }}
          >
            Remove from Borrow
          </BorrowListButton>
        )}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
