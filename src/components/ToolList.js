import React from 'react';
import { connect } from "react-redux";

import { axiosWithAuth } from "../components/utils/axiosWithAuth"

import { fetchToolListings, fetchAddRentalTool } from "../actions";

import FilterSearch from './FilterSearch';
import ToolCard from "./ToolCard"

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
            <FilterSearch tools={this.props.tools} loggedUser={this.props.loggedUser} fetchAddRentalTool={this.props.fetchAddRentalTool} history={this.props.history}/>

                <div className="featured-tools" style={{ width: '80vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {this.props.tools.map(e =>
                        <ToolCard {...e} history={this.props.history}/>
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