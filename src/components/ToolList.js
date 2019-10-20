import React from 'react';

import { connect } from "react-redux";

function ToolList(props) {
    // A useState() hook will need to be used here to hold filtered search results
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {/* Minimal search component replaces 'search' div */}
            <div className="search" style={{ height: '50vh', width: '80vw', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form>
                    {/* handleChange and onSubmit will need to be added */}
                    <input type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>
            {/* Featured listings appear below. Search submissions will filter the featured listings */}
            <div className="featured-tools" style={{ width: '80vw', height: '100vh', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                {/* The four div elements below will be removed. This is just shows how 4 tool cards will be positioned. */}
                <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
            </div>
        </div>
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
    { }
)(ToolList)