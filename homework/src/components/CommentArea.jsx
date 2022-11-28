import { Component } from "react";

import { ListGroup, Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNjJkZWQ4MzkzNTAwMTVlOGM0YTciLCJpYXQiOjE2Njk2NDc0MzQsImV4cCI6MTY3MDg1NzAzNH0.rs8164EUSRjLAG6itSQxN8kSyUop6RsMqWveh2mSuTM",
    },
  };

  fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + this.props.id, this.options);

      if (response.ok) {
        let allComments = await response.json();
        console.log(allComments);
        this.setState({ comments: allComments });
      } else {
        console.log(this.props.id);
        console.log("something's not working");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <div>
        <Alert variant="warning">{this.props.id || "Click a book"}</Alert>
        <ListGroup>
          {this.state.comments.map((comm) => (
            <ListGroup.Item>{comm.comment}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CommentArea;
