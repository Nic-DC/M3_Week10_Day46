import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        // onClick={() => {
        //   this.setState({ selected: !this.state.selected });
        //   console.log("the selected is now: ", this.state.selected);
        // }}
        // style={{
        //   border: this.state.selected ? "5px solid black" : "none",
        // }}

        onClick={() => this.props.changeSelectedBook(this.props.fantasyBook)}
        className="mb-4"
      >
        <Card.Img
          variant="top"
          src={this.props.fantasyBook.img}
          className="single-card-img"
          style={{ height: "350px" }}
        />
        <Card.Body
          style={{
            border: "1px solid lightgrey",
            borderRadius: "6px",
            backgroundImage: "linear-gradient(white, lightgrey)",
          }}
        >
          <Card.Title className="line-clamp">{this.props.fantasyBook.title}</Card.Title>
          <Card.Text className="line-clamp">
            {this.props.fantasyBook.category} | {this.props.fantasyBook.asin}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
