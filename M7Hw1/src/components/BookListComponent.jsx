import SingleBook from "./SingleBookComponent";
import history from "../data/books/history.json";
import { Component } from "react";
import CommentArea from "./CommentAreaComponent";

class BookList extends Component {
  state = {
    searchedQuery: "",
    filteredArray: history,
    clickedBook: false,
    clickedBookId: undefined,
    clickedBookTitle: undefined,
    isLoading: false,
    isError: false,
  };

  handleBookClick = (e, id, title) => {
    this.setState({ clickedBook: true });
    this.setState({ clickedBookId: id });
    this.setState({ clickedBookTitle: title });
    // this.setState({ isLoading: true });
  };

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchedQuery: e.target.value });
    this.setState({
      filteredArray: history.filter((book) => {
        if (this.state.searchedQuery === "") {
          return book;
        } else {
          return book.title
            .toLowerCase()
            .includes(this.state.searchedQuery.toLowerCase());
        }
      }),
    });
  };
  render() {
    return (
      <>
        <h2 className="mx-4">BookList</h2>
        <div>
          <input
            className="mx-4 my-2"
            type="text"
            placeholder="Search books here"
            onChange={(e) => this.handleOnChange(e)}
          ></input>
        </div>

        <div className="row w-100">
          <div className="col leftRow">
            {this.state.filteredArray.map((book) => (
              <SingleBook
                book={book}
                handleBookClick={this.handleBookClick}
                key={book.asin}
              />
            ))}
          </div>{" "}
          <div className="rightRow">
            <CommentArea
              elementId={this.state.clickedBookId}
              elementTitle={this.state.clickedBookTitle}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>
      </>
    );
  }
}

export default BookList;
