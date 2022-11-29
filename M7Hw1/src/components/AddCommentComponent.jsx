import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class AddComment extends Component {
 

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.props.addComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjkyOTM4MjQsImV4cCI6MTY3MDUwMzQyNH0.krsGgTWHFNAtchIBi9nUyCVJeKaYcEdqIWqpO4JUhSk",
          },
        }
      );
      if (response.ok) {
        alert("Comment posted successfully");
        this.props.reloadComments();
        this.setState({ addComment: { comment: "", rate: "" } });
      } else {
        console.log("something went wrong!");
        this.setState({ addComment: { comment: "", rate: "" } });
      }
    } catch (error) {
      this.setState({ addComment: { comment: "", rate: "" } });
    }
  };

  render() {
    return (
      <>
        <h6>Add a Comment below:</h6>
        {!this.props.elementId && (
          <Alert variant="danger">
            Please add some comments.
          </Alert>
        )}
        {this.props.elementId && (
          <>
            <Form onSubmit={this.onSubmitHandler}>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  className="commentListItem"
                  as="textarea"
                  rows={3}
                  value={this.props.addComment.comment}
                  required
                  onChange={(e) =>
                    this.props.onChangeHandler(e.target.value, "comment")
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  className="commentListItem"
                  as="select"
                  value={this.props.addComment.rate}
                  required
                  onChange={(e) =>
                    this.props.onChangeHandler(e.target.value, "rate")
                  }
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Button className="submitButton" type="submit">
                Submit Comment
              </Button>
            </Form>
          </>
        )}
      </>
    );
  }
}

export default AddComment;
