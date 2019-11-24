import { connect } from "react-redux";
import updateDetails from "../actions";
import Main from "./Main";

const mapStateToProps = (state: any) => {
  return {
    title: state.title,
    percentage: state.percentage,
    total: state.total
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateDetails: (data: any) => dispatch(updateDetails(data))
});

const ConnectRedux = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectRedux;
