import { Component } from "react";

import { ListGroup, Alert, Badge, Toast } from "react-bootstrap";

class CommentItem extends Component {
  state = {
    showComment: true,
  };

  render() {
    return (
      <div>
        {this.props.comments.map((comm) => (
          <Toast show={this.state.showComment} onClose={() => this.setState({ showComment: !this.state.showComment })}>
            <Toast.Header>
              <Badge variant="light" className="mr-auto">
                Rating: {comm.rate} ⭐
              </Badge>
              <Badge variant="warning">
                <small>{new Date().getFullYear()}</small>
              </Badge>
            </Toast.Header>
            <Toast.Body>{comm.comment}</Toast.Body>
          </Toast>
        ))}
      </div>
    );
  }
}

export default CommentItem;

{
  /* <ListGroup>
          {this.props.comments.map((comm) => (
            <ListGroup.Item>
              <Toast
                show={this.state.showComment}
                onClose={() => this.setState({ showComment: !this.state.showComment })}
              >
                <Toast.Header>
                  <Badge variant="light" className="mr-auto">
                    Rating: {comm.rate} ⭐
                  </Badge>
                  <Badge variant="warning">
                    <small>{new Date().getFullYear()}</small>
                  </Badge>
                </Toast.Header>
                <Toast.Body>{comm.comment}</Toast.Body>
              </Toast>
            </ListGroup.Item>
          ))}
        </ListGroup> */
}
