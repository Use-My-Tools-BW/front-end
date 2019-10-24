import React, {useEffect, useState} from 'react';

import EditListingForm from "../components/forms/EditListingForm"
import EditAccountForm from "../components/forms/EditAccountForm"
import PostListingForm from "../components/forms/PostListingForm"

import { axiosWithAuth } from "../components/utils/axiosWithAuth"
import axios from "axios";

import Swiper from 'react-id-swiper';

import { Route, Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import { fetchLendPosts, fetchRentedTools, fetchUserInformation, fetchEditUserInformation, fetchToolListings, fetchDeleteLendPost } from "../actions/index"

import { connect } from "react-redux";



const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false
    },
}
    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    card: {
        width: "35%"
    },
    paper: {
      position: 'absolute',
      width: 600,
      height: 250,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Account(props) {
    const [postedTools, setPostedTools] = useState([])
    const [rentedTools, setRentedTools] = useState([])
    //Modal Start
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
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
    useEffect(() => {
        if(props.loggedUser > 0){
        props.fetchLendPosts(props.loggedUser)
        props.fetchRentedTools(props.loggedUser)
        props.fetchUserInformation(props.loggedUser)
        props.fetchToolListings()
        } else{
            props.history.push('/Login')
        }
    }, [props.loggedUser]);


    return(
        <>
            <div className="account-section" style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className="icon-buttons" style={{ width: '25%', height: '80%', backgroundColor: '#F5F7EA', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        <div onClick={handleOpenAccount} style={{ width: '100%' }}><span class="iconify" data-icon="ic:baseline-account-box" data-inline="false" style={{ fontSize: "6rem", color: 'black' }} /><p style={{ fontSize: '2.2rem', color: 'black' }}>Edit Account</p></div>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={openAccount}
                            onClose={handleCloseAccount}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <EditAccountForm loggedUser={props.loggedUser} loggedUserInfo={props.loggedUserInfo} fetchEditUserInformation={props.fetchEditUserInformation}/>
                            </div>
                        </Modal>
                        <div style={{ width: '100%' }}><span class="iconify" data-icon="fa-solid:shopping-basket" data-inline="false" style={{ fontSize: "6rem", color: 'black' }} /><p style={{ fontSize: '2.2rem', color: 'black' }}>Rent Tools</p></div>
                        <div onClick={handleOpenPostTool} style={{ width: '100%' }}><span class="iconify" data-icon="ic:round-post-add" data-inline="false" style={{ fontSize: "6rem", color: 'black' }} /><p style={{ fontSize: '2.2rem', color: 'black' }}>Lend Your Tool</p></div>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={postTool}
                            onClose={handleClosePostTool}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <PostListingForm loggedUser={props.loggedUser} userInfo={props.userInfo} />
                            </div>
                        </Modal>

                </div>
                <div className="currently-section" style={{ width: '65%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '75%' }}><h3>Tool Rental History</h3></div>
                    <div className="currently-renting" style={{ width: '80%', height: '40%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F5F7EA'}}>
                        <Swiper {...params} style={{ height: '100%', width: '90%', backgroundColor: 'green' }}>
                            {props.loggedRentedTools.map(e =>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                            <img width="25%" src={e.img_url} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {e.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">{[<p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {e.daily_cost}</p>].map(data => <p>{data}</p>)}</Typography>
                                    </CardContent>
                                    <Modal
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                        open={open}
                                        onClose={handleClose}
                                    >
                                    <div style={modalStyle} className={classes.paper}>
                                        <EditListingForm tool={e} />
                                    </div>
                                    </Modal>
                                    </CardActionArea>
                                </Card>
                            )}  
                        </Swiper>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '75%' }}><h3>Tool Lending History</h3></div>
                    <div className="currently-lending" style={{ width: '80%', height: '40%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F5F7EA'}}>
                    <Swiper {...params} style={{ height: '100%', width: '90%', backgroundColor: 'green' }}>
                            {props.loggedPostedTools.map(e =>
                                <Card className={classes.card}>
                                <CardActionArea>
                                        <img width="25%" src={e.img_url} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {e.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{[<p style={{ color: 'green', fontSize: '1.6rem', marginBottom: -20, marginTop: -10 }}>$ {e.daily_cost}</p>].map(data => <p>{data}</p>)}</Typography>
                                </CardContent>
                                <Button onClick={handleOpen}>Edit</Button>
                                <Modal
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                >
                                <div style={modalStyle} className={classes.paper} >
                                    <EditListingForm tool={e}/>
                                </div>
                                </Modal>
                                <Button onClick={() => props.fetchDeleteLendPost(e.id)}>Delete</Button>
                                </CardActionArea>
                            </Card>
                            )}  
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return {
        tools: state.tools,
        loggedUser: state.loggedUser,
        isFetching: state.isFetching,
        error: state.error,
        loggedPostedTools: state.loggedPostedTools,
        loggedRentedTools: state.loggedRentedTools,
        loggedUserInfo: state.loggedUserInfo
    };
  };

export default connect(
    mapStateToProps,
    { fetchLendPosts, fetchRentedTools, fetchUserInformation, fetchEditUserInformation, fetchToolListings, fetchDeleteLendPost }
)(Account)