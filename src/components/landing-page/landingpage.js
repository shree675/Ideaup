import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../nav-bar/navbar";
import "./landingpage.css";
import StartupCard from "../startup-card/startupcard";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import startup from "../../assets/startup.svg";
import idea from "../../assets/idea.svg";
import openbook from "../../assets/openbook.svg";
import growthchart from "../../assets/growthchart.svg";
import econub from "../../assets/econub.svg";

class LandingPage extends Component {
    render() {
        return (
            <div className='main'>
                <Navbar />

                <div style={{ height: `22vh` }}></div>
                <div className="contentwrapper">
                <div className='left'>
                    <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true} duration='1'>
                        <div className='jumbotron-title'>A Leading One Stop</div>
                        <div className='jumbotron-title'>Solutions Provider</div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true} duration='2.5'>
                        <div className='jumbotron-subs'>
                            For all business support services required for all early stage businesses and through their journey beyond
                        </div>
                    </ScrollAnimation>
                </div>

                <div className='jumb-cards'>
                    <div id="fj1" style={{ flex: `1` }}>
                        <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} duration='1'>
                            <div className='jumb-card'>
                                <img src={startup} height='150px'></img>
                                <div className='card-content'>Kickstarting Businesses</div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} duration='1'>
                            <div className='jumb-card'>
                                <img src={growthchart} height='150px'></img>
                                <div className='card-content'>Growing Brands</div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div  id="fj2" style={{ flex: `1` }}>
                        <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} duration='1'>
                            <div className='jumb-card'>
                                <img src={idea} height='150px'></img>
                                <div className='card-content'>Providing Ideas</div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} duration='1'>
                            <div className='jumb-card'>
                                <img src={openbook} height='150px'></img>
                                <div className='card-content'>Book Keeping</div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                </div>
             <div className="division"></div>

                <div className='startup-section'>
                    <div className='startup-title'>Products by Ideaup</div>
                    <div className='startup-content'>
                        Learn from the makers behind hundreds of profitable businesses and side projects
                    </div>

                    <div className='startupcard-display'>
                     
                            <StartupCard img={econub} title='Econub' subs='Your local recycling map' revenue='20,000' />
                            <StartupCard img={econub} title='Econub' subs='Your local recycling map' revenue='20,000' />
                      
                            <StartupCard img={econub} title='Econub' subs='Your local recycling map' revenue='20,000' />
                            <StartupCard img={econub} title='Econub' subs='Your local recycling map' revenue='20,000' />
                       
                            <StartupCard img={econub} title='Econub' subs='Your local recycling map' revenue='20,000' />
                            <StartupCard img={econub} title='Econub' subs='Your local recycling map' revenue='20,000' />
                       
                    </div>

                    <Link to='/' style={{ textDecoration: `none` }}>
                        <div id="up"><div className='more-sts-button'>More Startups ➝</div></div>
                    </Link>

                    <div style={{ height: `30px` }}></div>

                    <div className='startup-content'>
                        Within a short span of time, we have come to acquire an impressive clientele of over 50 banners that have
                        successfully, and satisfactorily, partnered with us. This list continues to grow, with a burgeoning demand for
                        all the business support systems, ably provided by our highly experienced and accomplished team of
                        professionals.
                    </div>
                </div>

                <div style={{ height: `1000px` }}></div>
            </div>
        );
    }
}

export default LandingPage;
