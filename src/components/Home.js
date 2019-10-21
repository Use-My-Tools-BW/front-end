import React from "react";
import { connect } from "react-redux";

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

import { availableTools } from "../data/data"

import { fetchToolListings } from "../actions";

/////////////////////////// Material-UI Start
const useStyles = makeStyles({
    card: {
      width: '35%',
      height: '45%'
    },
    media: {

    },
  });
/////////////////////////// Material-UI End

function Home(props) {
    const classes = useStyles();

    return (
        <>
            <h2>Home</h2>
            <div className="hero-search" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <form>
                    {/* handleChange and onSubmit will need to be added */}
                    <input type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="featured-products-categories" style={{ height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div className="featured-products" style={{ height: '80vh', width: '80vw', alignItems: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {/* Replace divs below with card components getting props from state passed down */}
                    {availableTools.map(e => 
                        <Card className={classes.card}>
                            <CardActionArea>
                                <img width="25%" src={e.listingImg} />
                                <CardContent>
                                    <Typography component="h2">{e.listingtitle}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{[ `${e.lendSpan.dateStart} to ${e.lendSpan.dateEnd}`, `Price: ${e.totalCost}`].map(data => <p>{data}</p>)}</Typography>
                                </CardContent>
                                <Button variant="contained" color="primary">View</Button>
                                <Button variant="contained" color="secondary">Rent</Button>
                            </CardActionArea>
                        </Card>
                        )}
                </div>
                <div className="categories" style={{ height: '20vh', width: '80vw', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Slider for categories will be added here. Most likely react-id-swiper (see npm) */}
                    <div className="slider" style={{ height: '18vh', width: '90%', backgroundColor: 'green' }} />
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