import { Component } from "react";
import Navbar from "../nav-bar/navbar";

class LandingPage extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <div style={{ height: `1000px` }}></div>
      </div>
    );
  }
}

export default LandingPage;
