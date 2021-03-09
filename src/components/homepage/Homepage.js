import React, { Component } from "react";
import "./Homepage.css";
import axios from "axios";

// pages
import Slideshow from "../SlideShow/SlideShow";

//images

import slide3 from "../../assets/carousel/image10.jpg";
import slide5 from "../../assets/carousel/image16.jpg";
import slide6 from "../../assets/carousel/image11.jpg";

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
      }
    });
  };

  render() {
    return (
      <div className="homepage">
        <div className={s.container}>
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
        </div>
      </div>
    );
  }
}

export default Homepage;
