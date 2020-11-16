import StarRatings from "react-star-ratings";
import React, { Component } from "react";
import Popup from "reactjs-popup";
import "../../../styles.css";

class FeedBack extends Component {
  constructor(props) {
    super(props);
    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: 0,
    };
  }
  changeRating(rating) {
    this.setState({
      rating: rating,
    });
  }
  render() {
    return (
      <Popup
        modal
        className="feedbackContent"
        trigger={
          <button
            type="button"
            value="submit"
            className="buttonPass"
            onClick={this.handleChange}
          >
            Reset
          </button>
        }
        position="center center"
      >
        <div
          style={{
            background: "#66C4E1",
            position: "absolute",
            width: "inherit",
            left: "0",
            top: "0",
            fontSize: "large",
            fontWeight: "bold",
            height: "50px",
          }}
        >
          Feedback
        </div>
        <div style={{ marginTop: "80px" }}>
          <div
            className="textFeedback"
            style={{
              marginRight: "36%",
              marginBottom: "20px",
            }}
          >
            How are you doing?
          </div>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="#F3D743"
            starHoverColor="#F3D743"
            starEmptyColor="rgba(0, 0, 0, 0.54)"
            changeRating={this.changeRating}
            numberOfStars={5}
            name="rating"
          />
          <div
            className="textFeedback"
            style={{
              width: "100%",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            How can we improve your experience?
          </div>
          <input
            type="text"
            id="corAddress"
            placeholder="Type here"
            style={{
              background: " #FFFFFF",
              boxShadow: " 0px 1px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "3px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              width: "80%",
              height: "110px",
              marginTop: "30px",
            }}
          />
        </div>
        <div>
          <button
            style={{
              background: "#262F56",
              borderRadius: "6px",
              color: "white",
              fontSize: "  18px",
              lineHeight: " 22px",
              width: "188px",
              height: " 53px",
              marginTop: " 40px",
            }}
          >
            Submit
          </button>
        </div>
        {/* <img src={passwordImg} alt="" /> */}
        {/* Your password was succesfully changed
        <button className="buttonPass" onSubmit={this.handleSubmit}>
          Login
        </button> */}
      </Popup>
    );
  }
}

export default FeedBack;
