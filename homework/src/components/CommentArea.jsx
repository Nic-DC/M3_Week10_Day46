import { Component } from "react";

import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    content: undefined,
  };
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>{this.props.id}</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default CommentArea;
