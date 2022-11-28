import { Component } from "react";

// import { Alert } from "react-bootstrap";

import CommentItem from "./CommentItem";
import CrUDactions from "./CrUDactions";
// import AlertComment from "./AlertComment";

class CommentArea extends Component {
  state = {
    comments: [],
    selectedId: undefined,
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
        this.setState({ comments: allComments.slice(0, 3), selectedId: this.props.id });
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
        {/* <AlertComment selectedId={this.state.id} /> */}

        <CommentItem comments={this.state.comments} selectedId={this.state.id} />
        <CrUDactions />
      </div>
    );
  }
}

export default CommentArea;
