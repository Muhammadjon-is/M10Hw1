import Card from "react-bootstrap/Card";
import { Component } from "react";
import { BsBookmarkFill } from "react-icons/bs";

class SingleBook extends Component {
  state = {
    hovered: false,
  };

  handleEnter = () => {
    this.setState({ hovered: true });
  };

  handleLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    return (
      <div className="CardAndComments mb-3">
        <Card
          // id={`${this.props.handleBookClick ? "selectedBook" : ""}`}
          className="bookCard"
          onMouseEnter={() => this.handleEnter()}
          onMouseLeave={() => this.handleLeave()}
          onClick={(e) =>
            this.props.handleBookClick(
              e,
              this.props.book.asin,
              this.props.book.title
            )
          }
        >
          <div className={`${this.state.hovered ? "" : "hidden"}`}>
            <div className="readMore">
              <BsBookmarkFill />
            </div>
          </div>

          <Card.Img
            className="bookImg"
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body className="bookText">
            <Card.Title className="bookTitle">
              {this.props.book.title}
            </Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
