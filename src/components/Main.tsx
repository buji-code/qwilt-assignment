import React from "react";
import { ApiData, apiToSingleBarData } from "../interfaces/ApiData";
import updateDetails from "../actions";
import MultiBar from "./MultiBar";
import "./Main.css";
import Details from "./Details";

interface AppProps {
  dispatch: Function;
  updateDetails: typeof updateDetails;
  title: string;
  percentage: number;
  total: number;
}

class Main extends React.Component<AppProps> {
  state = {
    Charts: <div>Loading...</div>,
    Details: null
  };

  constructor(props: any) {
    super(props);
    fetch(
      "https://gist.githubusercontent.com/vitalybe/cd3d6f939d37294727f8e83329b4afcb/raw/59ba6e5f1ae06429fceb407fc0cc0a13e9f3ef35/data.json"
    )
      .then(response => response.json())
      .then(jsonData => {
        const fetchdata: any[] = [];
        jsonData.forEach(function(item: ApiData) {
          fetchdata.push(apiToSingleBarData(item));
        });
        this.setState({
          Charts: (
            <MultiBar
              values={fetchdata}
              updateDetails={this.props.updateDetails}
              dispatch={this.props.dispatch}
            />
          )
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="app-div">
        <div className="charts-div">
          <label style={{ fontSize: "14px", color: "white" }}>Charts</label>
          {this.state.Charts}
        </div>
        <div className="data-div">
          <label style={{ fontSize: "14px", color: "white" }}>Details</label>
          <Details />
        </div>
      </div>
    );
  }
}

export default Main;
