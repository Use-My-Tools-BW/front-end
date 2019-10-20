import React from "react";
import { connect } from "react-redux";

import { fetchToolListings } from "../actions";

function Home(props) {

    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    return {
        tools: state.tools,
        isFetching: state.isFetching,
        error: state.error
    };
  };

export default connect(
    mapStateToProps,
    { fetchToolListings }
)(Home)