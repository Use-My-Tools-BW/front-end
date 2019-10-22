import React from 'react';

import { connect } from "react-redux";

function Account(props) {
    return(
        <>
            <h2>Account</h2>
            <div className="account-section" style={{ height: '100vh', width: '100%', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className="icon-buttons" style={{ width: '25%', height: '80%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {/* Three div elements below show how icon buttons will be positioned */}
                    <div style={{ height: '30%', width: '80%', backgroundColor: 'green' }} />
                    <div style={{ height: '30%', width: '80%', backgroundColor: 'green' }} />
                    <div style={{ height: '30%', width: '80%', backgroundColor: 'green' }} />
                </div>
                <div className="currently-section" style={{ width: '65%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className="currently-renting" style={{ width: '80%', height: '45%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* Three div elements below show how currently renting slider will be positioned */}
                        <div style={{ height: '80%', width: '90%', backgroundColor: 'green' }} />
                    </div>
                    <div className="currently-lending" style={{ width: '80%', height: '45%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* Three div elements below show howw currently lending slider will be positioned */}
                        <div style={{ height: '80%', width: '90%', backgroundColor: 'green' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser,
        isFetching: state.isFetching,
        error: state.error
    };
  };

export default connect(
    mapStateToProps,
    { }
)(Account)