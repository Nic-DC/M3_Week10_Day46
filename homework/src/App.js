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
  };

  changeSelected = (book) => {
    this.setState({ selectedBook: book });
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
            <Col xs={6} md={9}>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <SingleBook
                    // selectedBook={this.state.selectedBook}
                    // changeSelectedBook={this.changeSelected}
                    fantasyBook={fantasyBooks[0]}
                  />
                </Col>
              </Row>
              <BooksList fantasyBooks={fantasyBooks} />
            </Col>
            <Col xs={6} md={3}>
              <h2>Comment Area</h2>
              <CommentArea />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
