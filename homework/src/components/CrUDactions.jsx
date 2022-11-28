import { Component } from "react";
import { Button } from "react-bootstrap";
class CrUDactions extends Component {
  render() {
    return (
      <div>
        <Button variant="danger">Danger</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>{" "}
      </div>
    );
  }
}
export default CrUDactions;
