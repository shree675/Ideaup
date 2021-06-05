import { Component } from "react";
import "./startupcard.css";
import Tilt from "react-parallax-tilt";

class StartupCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className='startupcard-main'>
                    <img src={this.props.img} className='startupcard-img'></img>
                    <div className='startupcard-content'>
                        <div className='startupcard-title'>{this.props.title}</div>
                        <div className='startupcard-subs'>{this.props.subs}</div>
                    </div>
                    <hr id="hr" style={{ position: `absolute`, top: `110px`, width: `320px`, left: `15px`, borderColor: `#8a885a` }}></hr>
                    <div className='startupcard-revenue'>
                        ${this.props.revenue}
                        <span style={{ fontSize: `18px` }}>/month</span>
                    </div>
                    <div className='startupcard-cert'>
                        Verified by <i>stripe</i>
                    </div>
                </div>
            </Tilt>
        );
    }
}

export default StartupCard;
