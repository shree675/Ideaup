import { Component } from "react";
import Navbar from "../nav-bar/navbar";
import "./landingpage.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import startup from "../../assets/startup.svg";
import idea from "../../assets/idea.svg";
import openbook from "../../assets/openbook.svg";
import growthchart from "../../assets/growthchart.svg";

class LandingPage extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />

        <div style={{ height: `22vh` }}></div>

        <div className="left">
          <ScrollAnimation
            animateIn="animate__slideInUp"
            animateOnce={true}
            duration="1"
          >
            <div className="jumbotron-title">A Leading One Stop</div>
            <div className="jumbotron-title">Solutions Provider</div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOnce={true}
            duration="2.5"
          >
            <div className="jumbotron-subs">
              For all business support services required for all early stage
              businesses and through their journey beyond
            </div>
          </ScrollAnimation>
        </div>

        <div className="jumb-cards">
          <div style={{ flex: `1` }}>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOnce={true}
              duration="1"
            >
              <div className="jumb-card">
                <img src={startup} height="150px"></img>
                <div className="card-content">Kickstarting Businesses</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOnce={true}
              duration="1"
            >
              <div className="jumb-card">
                <img src={growthchart} height="150px"></img>
                <div className="card-content">Growing Brands</div>
              </div>
            </ScrollAnimation>
          </div>

          <div style={{ flex: `1` }}>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOnce={true}
              duration="1"
            >
              <div className="jumb-card">
                <img src={idea} height="150px"></img>
                <div className="card-content">Providing Ideas</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOnce={true}
              duration="1"
            >
              <div className="jumb-card">
                <img src={openbook} height="150px"></img>
                <div className="card-content">Book Keeping</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div style={{ height: `1000px` }}></div>
      </div>
    );
  }
}

export default LandingPage;
