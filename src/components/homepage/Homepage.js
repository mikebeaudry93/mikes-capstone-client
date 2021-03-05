import React, { Component } from "react";
import "./Homepage.css";
import axios from "axios";

import ReactPlayer from "react-player";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

// pages
import Slideshow from "../SlideShow/SlideShow";
import Quiz from "../quiz/Quiz";

//images

import slide1 from "../../assets/carousel/image8.jpg";
import slide2 from "../../assets/carousel/image15.jpg";
import slide3 from "../../assets/carousel/image10.jpg";
import slide4 from "../../assets/carousel/image4.jpg";
import slide5 from "../../assets/carousel/image16.jpg";
import slide6 from "../../assets/carousel/image11.jpg";
import image7 from "../../assets/carousel/image7.jpg";

const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter",
};

const slides = [slide3, slide6, slide5];

export class Homepage extends Component {
  state = {
    isClicked: false,
    isLoading: false,
  };

  toggleQuiz = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  beginWorkout = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    axios.get("https://ufitness.herokuapp.com/result").then((response) => {
      if (response) {
        this.props.history.push("/duration-page");
        this.setState({
          isLoading: false,
        });
        // setInterval(function () {
        //   console.log("hello world");
        // }, 3000);
      }
    });
  };

  render() {
    return (
      <div className="homepage">
        <div className={s.container}>
          {/* <div className={s.header}>uFitness</div> */}
          <div className={s.main}>
            <div className={s.header}>uFitness</div>
            <Slideshow slides={slides} />
            <div className="workout-button-container">
              <button
                onClick={(e) => this.beginWorkout(e)}
                className="button1 button"
                value="start"
                name="start"
              >
                {this.state.isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>Create Workout</div>
                )}
              </button>
            </div>
          </div>
          {/* <div className={s.footer}>
                        <Link to="/duration-page">
                           <button className="button1 button buttonstart" value="start" name="start" 
                            >Start Quiz</button>
                        </Link>
                        </div> */}
        </div>
        {/* <div className="home__title-box">
                        <h1 className="home__title">uFitness</h1>
                        // <Link to="/duration-page">
                        //     <button className="button1 button" value="start" name="start" 
                        //     >Start Quiz</button>
                        // </Link>
                    </div> */}
      </div>
    );
  }
}

export default Homepage;
