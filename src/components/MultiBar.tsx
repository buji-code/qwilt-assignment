import React from "react";
import "./MultiBar.css";
import SingleBar from "./SingleBar";
import values from "../interfaces/Values";
import updateDetails from "../actions";

interface AppProps {
  dispatch: Function;
  updateDetails: typeof updateDetails;
}

class MultiBar extends React.Component<values & AppProps, {}> {
  constructor(props: any) {
    super(props);

    const items: any = [];
    this.props.values.forEach(item => {
      items.push(
        <SingleBar
          title={item.title}
          left={item.left}
          right={item.right}
          updateDetails={this.props.updateDetails}
          dispatch={this.props.dispatch}
        ></SingleBar>
      );
    });
    this.state = { items };
  }
  state = {
    items: []
  };

  render() {
    return this.state.items;
  }
}

export default MultiBar;
