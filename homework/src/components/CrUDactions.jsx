import { Component } from "react";
import { Button } from "react-bootstrap";
class CrUDactions extends Component {
  render() {
    return (
      <div>
        <Button variant="light" className="mr-4">
          Post
        </Button>
        <Button variant="dark" className="">
          Update
        </Button>{" "}
        <Button variant="danger" className="mr-4">
          Delete
        </Button>
      </div>
    );
  }
}
export default CrUDactions;
