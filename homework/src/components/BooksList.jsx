import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BooksList extends Component {
  render() {
    return (
      <Row>
        {this.props.fantasyBooks.map((book) => (
          <Col xs={6} md={3}>
            <SingleBook fantasyBook={book} changeSelectedBook={this.props.changeSelectedBook} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default BooksList;
