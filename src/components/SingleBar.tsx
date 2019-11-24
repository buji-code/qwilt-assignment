import React from "react";
import "./SingleBar.css";
import SingleBarData from "../interfaces/SingleBarData";
import DetailsData from "../interfaces/DetailsData";
import updateDetails from "../actions";

interface AppProps {
  dispatch: Function;
  updateDetails: typeof updateDetails;
}

class SingleBar extends React.Component<SingleBarData & AppProps, {}> {
  state = {
    total: this.props.left.value + this.props.right.value,
    percentage: {
      left: Math.round(
        (this.props.left.value /
          (this.props.left.value + this.props.right.value)) *
          100
      ),
      right: Math.round(
        (this.props.right.value /
          (this.props.left.value + this.props.right.value)) *
          100
      )
    }
  };

  hoverHandler = (side: string) => {
    let data: DetailsData = {
      title: this.props.title,
      total: this.state.total,
      percentage: 0
    };
    switch (side) {
      case "left":
        data.percentage = this.state.percentage.left;
        break;
      case "right":
        data.percentage = this.state.percentage.right;
        break;
    }
    this.props.updateDetails(data);
  };
  leaveHandler = () => {
    let data: DetailsData = {
      title: undefined,
      total: undefined,
      percentage: undefined
    };
    this.props.updateDetails(data);
  };

  render() {
    return (
      <div className="main-div">
        <div className="labels-div">
          <label className="left-label">{this.props.title}</label>
          <label className="right-label">Total: {this.state.total}</label>
        </div>
        <div className="rects-div">
          <div
            className="left-rect"
            style={{
              background: this.props.left.color,
              width: this.state.percentage.left + "%"
            }}
            onMouseEnter={() => {
              this.hoverHandler("left");
            }}
            onMouseLeave={this.leaveHandler}
          >
            <span style={{ color: this.props.left.color }}>
              {this.state.percentage.left}%
            </span>
          </div>
          <div
            className="right-rect"
            style={{
              background: this.props.right.color,
              width: this.state.percentage.right + "%"
            }}
            onMouseEnter={() => {
              this.hoverHandler("right");
            }}
            onMouseLeave={this.leaveHandler}
          >
            <span style={{ color: this.props.right.color }}>
              {this.state.percentage.right}%
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBar;
