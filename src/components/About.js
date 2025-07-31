import { Component } from "react";
import User from "./User";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h2>This is About page of my app</h2>

        <User />
      </div>
    );
  }
}

export default About;
