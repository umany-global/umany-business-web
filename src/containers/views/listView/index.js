// LIBS
import React from "react";
import { connect } from "react-redux";

// COMPONENTS
import ListItems from "@components/list.component";

class ListItemView extends React.Component {
  constructor(props) {
    super(props);
    console.log("props :>> ", props);
  }
  render(props) {
    return (
      <div>
        <ListItems />
      </div>
    );
  }
}

const mapStateToProps = (state) => state.dashboard;
export default connect(mapStateToProps)(ListItemView);
