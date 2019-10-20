import React from "react";
import { connect } from "react-redux";

import { fetchToolListings } from "../actions";

function Home(props) {

    return (
        <>
            <div className="hero-search" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <form>
                    {/* handleChange and onSubmit will need to be added */}
                    <input type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="featured-products-categories" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div className="featured-products" style={{ height: '65vh', width: '80vw', alignItems: 'center', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {/* Replace divs below with card components getting props from state passed down */}
                    <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                    <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                    <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                    <div style={{ height: '45%', width: '45%', backgroundColor: 'green' }} />
                </div>
                <div className="categories" style={{ height: '35vh', width: '80vw', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Slider for categories will be added here. Most likely react-id-swiper (see npm) */}
                    <div className="slider" style={{ height: '30vh', width: '90%', backgroundColor: 'green' }} />
                </div>
            </div>
            <div className="home-button-icons" style={{ height: '33vh', width: '100%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Account, Borrow, Lend icon buttons mapped here */}
                <div className="icons" style={{ width: '75vw', height: '30vh', backgroundColor: 'green' }} />
            </div>
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