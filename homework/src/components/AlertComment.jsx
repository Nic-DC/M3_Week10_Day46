import { Component } from "react";

import { Alert } from "react-bootstrap";

class AlertComment extends Component {
  render() {
    return <Alert variant="warning">{this.props.selectedId || "Click a book"}</Alert>;
  }
}

export default AlertComment;
