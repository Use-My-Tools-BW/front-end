import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../components/utils/axiosWithAuth"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function FilterSearch(props) {
    const [query, setQuery] = useState(null)
    const [queryResults, setQueryResults] = useState([])
    
    // state = {
    //     query: "",
    //     results: []
        // items: []
    // }

    const filterList = (event) => {
        // let items = this.state.initialItems;
        // items = this.props.tools.filter((item) => {
        //     console.log([item])
        //     return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        // })
        // this.setState({items: items})
        // console.log(this.state)
        setQuery(event.target.value)
        if (event.target.value===""){
                setQuery()
            }
        console.log(queryResults)
        console.log(props)
    }


     useEffect (() => {
        const data = props.tools
        const transform = data.filter(e => e.title.toLowerCase().includes(query))
        setQueryResults(transform)
        console.log(transform)
    },[query])
    
        
   
        return (
            <div>
                <form>
                    <input
                    type="text"
                    placeholder="Enter Tool Name"
                    onChange={filterList}
                    value={query}/>
                </form>
                <button type="submit">Search</button>                
            <div>
            {queryResults.map(e =>
            <Card style={{ width:"100%", height:"60%", margin:20, display: "flex" }}>
                            <CardActionArea>
                                <img width="25%" src={e.img_url} />
                                <CardContent>
                                    <Typography component="h2">{e.title}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{[<p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {e.daily_cost}</p>].map(data => <p>{data}</p>)}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary">View</Button>
                                <Button variant="contained" color="secondary" onClick={() => props.fetchAddRentalTool(e.daily_cost, e.id, props.loggedUser)}>Rent</Button>
                            </CardActions>
                        </Card>
            )}
                
                {/* {
                    queryResults.map(function(item) {
                        return <div>{item.title}</div>
                    })
                } */}
            </div>
            </div>
        );
        
}
