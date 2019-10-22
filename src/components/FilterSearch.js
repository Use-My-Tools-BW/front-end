import React, { useState, useEffect } from 'react';

export default function FilterSearch(props) {
    const [query, setQuery] = useState("")
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
            <div>
                {
                    queryResults.map(function(item) {
                        return <div>{item.title}</div>
                    })
                }
            </div>
            </div>
        );
        
}
