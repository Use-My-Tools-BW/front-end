import React, {useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import EditListingForm from "./forms/EditListingForm"

const useStyles = makeStyles(theme => ({
    card: {
        width: "35%",
        minWidth: 200,
        minHeight: '100%'
    },
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ToolPostCard(props){
    //Modal Start
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openAccount, setOpenAccount] = React.useState(false);
    const [postTool, setPostTool] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpenAccount = () => {
        setOpenAccount(true);
    };
    const handleCloseAccount = () => {
    setOpenAccount(false);
    };
    const handleOpenPostTool = () => {
    setPostTool(true);
    };
    const handleClosePostTool = () => {
    setPostTool(false);
    };
//Model End

    return(
        <Card className={classes.card}>
            <CardActionArea>
                    <img width="25%" src={props.img_url} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title.substring(0,11) + ".."}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">{[<p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {props.daily_cost}</p>].map(data => <p>{data}</p>)}</Typography>
            </CardContent>
            <Button onClick={handleOpen}>Edit</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
            <div className={classes.paper} >
                <EditListingForm tool={props}/>
            </div>
            </Modal>
            
            <Button onClick={() => props.fetchDeleteLendPost(props.id) & props.fetchLendPosts(props.user_id)}>Delete</Button>
            </CardActionArea>
        </Card>
    )
}

export default ToolPostCard;