import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";

class CommentsList extends Component {
  handleDelete = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjkyOTM4MjQsImV4cCI6MTY3MDUwMzQyNH0.krsGgTWHFNAtchIBi9nUyCVJeKaYcEdqIWqpO4JUhSk",
          },
        }
      );

      if (response.ok) {
        alert("Comment deleted successfully");
        this.props.reloadComments();
      } else {
        console.log("Something went wrong while deleting comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.props.comments.slice(0, 3).map((comment) => (
          <ListGroup className="my-1" key={comment._id}>
            <ListGroup.Item className="commentListItem">
              <div>
                {" "}
                {comment.rate} | {comment.comment}
              </div>
              <div>
                <RiDeleteBinFill
                  className="deleteButton"
                  onClick={() => this.handleDelete(comment._id)}
                />
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </>
    );
  }
}

export default CommentsList;
