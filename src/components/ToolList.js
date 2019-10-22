import React from 'react';
import { addTool } from '../actions';
import { connect } from "react-redux";

import { fetchToolListings } from "../actions";

import FilterSearch from './FilterSearch';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ToolList extends React.Component {
    

    componentDidMount() {
        this.props.fetchToolListings();
        console.log("Component did mount at ToolList", this.props)
    }
    componentDidUpdate() {
        console.log("Component did update at ToolList", this.props)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addNewTool = e => {
        e.preventDefault()

        const newTool = this.state
        this.props.addTool(newTool)

        this.setState({
            name: '',
            model: '',
            manufacturer: '',
            category: '',
            condition: '',
            price: '',
        })
    }

    // classes = useStyles();

    // A useState() hook will need to be used here to hold filtered search results
   render() {
    return (
        <>
            <h2>Tool List</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* Minimal search component replaces 'search' div */}
                {/* <div className="search" style={{ height: '50vh', width: '80vw', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <form>
                        handleChange and onSubmit will need to be added
                        <input type="text"/>
                        <button type="submit">Search</button>
                    </form>
                </div> */}
                <FilterSearch/>
                <button type="submit">Search</button>
                {/* Featured listings appear below. Search submissions will filter the featured listings */}
                <div className="featured-tools" style={{ width: '80vw', height: '100vh', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {/* The four div elements below will be removed. This is just shows how 4 tool cards will be positioned. */}
                    {this.props.tools.slice(0, 4).map(e =>
                        <Card style={{ width:"35%", height:"45%", margin:20 }}>
                            <CardActionArea>
                                <img width="25%" src={e.img_url} />
                                <CardContent>
                                    <Typography component="h2">{e.title}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{[<p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {e.daily_cost}</p>].map(data => <p>{data}</p>)}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary">View</Button>
                                <Button variant="contained" color="secondary">Rent</Button>
                            </CardActions>
                        </Card>
                        )}
                </div>
            </div>
        </>
    )
   }
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
    { addTool, fetchToolListings }
)(ToolList)