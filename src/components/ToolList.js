import React from 'react';
import { connect } from "react-redux";

import { axiosWithAuth } from "../components/utils/axiosWithAuth"

import { fetchToolListings, fetchAddRentalTool } from "../actions";

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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
            <FilterSearch tools={this.props.tools} loggedUser={this.props.loggedUser} fetchAddRentalTool={this.props.fetchAddRentalTool}/>

                <div className="featured-tools" style={{ width: '80vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {this.props.tools.map(e =>
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
        error: state.error,
        loggedUser: state.loggedUser
    };
  };

export default connect(
    mapStateToProps,
    { fetchToolListings, fetchAddRentalTool }
)(ToolList)