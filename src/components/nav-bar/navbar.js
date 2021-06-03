import { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: true,
      y: 100,
      color: "white",
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        this.setState({
          scrolled: false,
        });
      } else {
        this.setState({
          scrolled: true,
        });
      }
    });
  }

  render() {
    return (
      <div className="navbar-main">
        <div
          className={
            this.state.scrolled ? "inside-navbar" : "inside-navbar-scrolled"
          }
        >
          <Link to="/" style={{ textDecoration: `none` }}>
            <div className={this.state.scrolled ? "ideaup" : "ideaup-scrolled"}>
              IDEA
              <span style={{ color: `goldenrod` }}>UP</span>
            </div>
          </Link>
          <div className="right">
            <div
              className={
                this.state.scrolled ? "nav-button" : "nav-button-scrolled"
              }
            >
              <Link to="/" style={{ textDecoration: `none` }}>
                <span className="but-nav">About Us</span>
              </Link>
            </div>

            <div
              className={
                this.state.scrolled ? "nav-button" : "nav-button-scrolled"
              }
            >
              <Link to="/" style={{ textDecoration: `none` }}>
                <span className="but-nav">Associates</span>
              </Link>
            </div>

            <div
              className={
                this.state.scrolled ? "nav-button" : "nav-button-scrolled"
              }
            >
              <Link to="/" style={{ textDecoration: `none` }}>
                <span className="but-nav">Our Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
