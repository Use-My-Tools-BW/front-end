import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { axiosWithAuth } from "./utils/axiosWithAuth"

import ToolCard from "./ToolCard"

import Swiper from 'react-id-swiper';

/////////////////////////// Material-UI Start
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/////////////////////////// Material-UI End

import { availableTools, toolCategories, homeIcons } from "../data/data"

import { fetchToolListings, fetchAddRentalTool } from "../actions";

/////////////////////////// Material-UI Start
const useStyles = makeStyles({
    card: {
      width: '35%',
      height: '45%',
      margin: 20
    },
    media: {

    },
  });
const params = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
}
/////////////////////////// Material-UI End

function Home(props) {
    const [startDate, setStartDate] = useState();

    useEffect(() => {
        props.fetchToolListings();
    }, []);

    const changeHandler = event => {
        setStartDate(event.target.value)
        console.log(startDate)
    }

    const classes = useStyles();

    return (
        <>
            <div className="hero-search" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://i.imgur.com/FcZNjJ7.png)' }}>
                <form>
                    {/* handleChange and onSubmit will need to be added */}
                    <h2>Need a tool? See what's available!</h2>
                    <input type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="featured-products-categories" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div className="categories" style={{ height: '20vh', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Swiper {...params}>
                        {toolCategories.map(e =>
                            <div><span class={e.class} data-icon={e.dataIcon} data-inline="false" style={{ fontSize: "6rem", color: '#312A34'}} /><p>{e.name}</p></div>
                        )}
                    </Swiper>
                </div>
                <div className="featured-products" style={{ width: '80vw', alignItems: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {props.tools.slice(0, 4).map(e =>
                        <ToolCard {...e} fetchAddRentalTool={props.fetchAddRentalTool} loggedUser={props.loggedUser} history={props.history}/>
                        )}
                </div>
            </div>
            <div className="home-button-icons" style={{ height: '33vh', width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="icons" style={{ width: '60vw', height: '30vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}> 
                    {homeIcons.map(e =>
                        <div><span class={e.class} data-icon={e.dataIcon} data-inline="false" style={{ fontSize: "6rem", color: 'white'}} /><p style={{ fontSize: '2.2rem', color: 'white' }}>{e.name}</p></div>
                    )} 
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser,
        tools: state.tools,
        isFetching: state.isFetching,
        error: state.error
    };
  };

export default connect(
    mapStateToProps,
    { fetchToolListings, fetchAddRentalTool }
)(Home)