// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./components/SingleBook";
import BooksList from "./components/BooksList";
import CommentArea from "./components/CommentArea";

import fantasyBooks from "./books/fantasy.json";

class App extends Component {
  state = {
    selectedBook: null,
    id: undefined,
  };

  changeSelectedBook = (book) => {
    this.setState({ selectedBook: book, id: book.asin });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1 className="my-5">State Lifting & componentDidUpdate</h1>
            </Col>
          </Row>
        </Container>
        <Container className="container-fluid">
          <Row>
            <Col xs={this.state.selectedBook ? 8 : 12}>
              {/* <SingleBook
                // selectedBook={this.state.selectedBook}
                changeSelectedBook={this.changeSelectedBook}
                fantasyBook={fantasyBooks[3]}
              /> */}

              <BooksList fantasyBooks={fantasyBooks} changeSelectedBook={this.changeSelectedBook} />
            </Col>
            {this.state.selectedBook && (
              <Col xs={4}>
                <h2>Comment Area</h2>
                <CommentArea id={this.state.id} />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
