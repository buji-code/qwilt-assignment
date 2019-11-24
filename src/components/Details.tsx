import React from "react";
import DetailsData from "../interfaces/DetailsData";
import { connect } from "react-redux";

class Details extends React.Component<DetailsData> {
  constructor(props: any) {
    super(props);
    console.log("props", props);
  }
  render() {
    return (
      <div className="details-div">
        <label className="title-label">{this.props.title}</label>
        <div style={{ padding: "5 px" }}>
          <div>
            {this.props.total
              ? Math.round(
                  (this.props.total *
                    (this.props.percentage ? this.props.percentage : 0)) /
                    100
                ) + " bps"
              : ""}
          </div>
          <div>
            {this.props.total
              ? this.props.percentage + "% of total " + this.props.total
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    title: state.title,
    percentage: state.percentage,
    total: state.total
  };
};

export default connect<DetailsData>(mapStateToProps)(Details);
