import { Component } from "react";
import cake from "../assets/slide1.jpeg"
import cake1 from "../assets/slide2.jpg"
import cake2 from "../assets/slide3.jpg"
import cake3 from "../assets/slide4.jpg"
import "./ContentStyles.css"

class ContentData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>
                {this.props.text}
                </p>
            </div>
            <div className="image-cont">
                <img alt="img" src={this.props.img1} />
                <img alt="img" src={this.props.img2} />
            </div>
        </div>
        )
    }
}

export default ContentData;