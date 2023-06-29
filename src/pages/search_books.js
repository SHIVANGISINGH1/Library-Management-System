import React from "react";
import {
  PageContainer,
  ContentContainer,
  SearchCard,
  SearchCardInner,
  SearchLabel,
  SearchIcon,
  SearchInputContainer,
  SearchInput,
  BooksList,
  CardContainer,
} from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import bookContext from "../context/books/bookContext";
import CardComponent from "../components/Card";

const SearchBooks = () => {
  const data = useContext(bookContext);
  const bookData = data.state.books;

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log(searchValue);
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: searchValue,
          },
        }
      );

      console.log(response.data);
      setSearchResults(response.data);

      navigate("/searchpage", { state: { searchResults: response.data } });

      searchValue("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <SearchCard class="Card">
              <SearchCardInner class="CardInner">
                <SearchLabel>Search Books Of Your Choice</SearchLabel>
                <div class="container" style={{ display: "flex" }}>
                  <SearchIcon class="Icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#657789"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </SearchIcon>
                  <SearchInputContainer
                    class="InputContainer"
                    onSubmit={handleSearch}
                  >
                    <SearchInput
                      type="text"
                      placeholder="Search for Books"
                      id="searchInput" // Add a unique id attribute
                      name="search" // Add a unique name attribute
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                  </SearchInputContainer>
                </div>
              </SearchCardInner>
            </SearchCard>

            <BooksList>
              <CardContainer>
                {bookData.map((book) => (
                  <CardComponent
                    title={book.title}
                    desc={book.subject}
                    author={book.author}
                    release={book.releasedate}
                    img={book.image}
                    id={book.id}
                    key={book.id}
                  ></CardComponent>
                ))}
              </CardContainer>
            </BooksList>
          </div>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default SearchBooks;
