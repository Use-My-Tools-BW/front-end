import React, { useEffect, useState } from "react";

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
function ToolCard(props) {
    const [date, setDate] = useState({
        startDate: "",
        endDate: ""
    });
    const [dayTotal, setDayTotal] = useState()
    const [totalCost, setTotalCost] = useState()

    const date1 = new Date(date.startDate)
    const date2 = new Date(date.endDate)
    const timeDifference = date2.getTime() - date1.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24)


    const changeHandler = event => {
        
        setDate({ ...date, [event.target.name]: event.target.value })
        console.log(date)
        console.log(dayDifference)
    }

    useEffect(() => {
        setDayTotal(dayDifference)
        setTotalCost(dayTotal * props.daily_cost)
    }, [date, dayTotal]);

    const useStyles = makeStyles({
        card: {
          width: '35%',
          height: '100%',
          margin: 20,
          padding: 20
        },
        media: {
    
        },
      });
    const classes = useStyles();
    return(
    <Card className={classes.card}>
    <CardActionArea>
        <img width="25%" src={props.img_url} />
        <CardContent>
            <Typography component="h2">{props.title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{[<p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {props.daily_cost}/day</p>].map(data => <p>{data}</p>)}</Typography>
        </CardContent>
    </CardActionArea>
    <CardActions style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <form>
        <input 
            type = "text"
            name="startDate"
            value={date.startDate}
            onChange ={changeHandler}
            placeholder="Enter start date"
            required
        />
        <input 
            type = "text"
            name="endDate"
            value={date.endDate}
            onChange ={changeHandler}
            placeholder="Enter end date"
        />
        <div>
            <Button variant="contained" color="secondary" onClick={() =>
                
                totalCost > 0 ?                
                    props.loggedUser > 0 ? 
                    props.fetchAddRentalTool(totalCost, props.id, props.loggedUser, date.startDate, date.endDate) & props.history.push('/account')

                    :
                    props.history.push('/account')
                :
                alert("You must enter dates")
                
                }>Rent</Button>
                {dayTotal > 0 ?
            <>
                <p>{dayTotal} days</p>
                <p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {totalCost}/total</p>
            </>
                :
            <p></p>
            }
        </div>
        </form>
    </CardActions>
    </Card>
    )
}
export default ToolCard;