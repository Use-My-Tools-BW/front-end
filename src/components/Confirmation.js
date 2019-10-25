import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../components/utils/axiosWithAuth";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { CardForm } from 'react-payment';

function Confirmation(props) {

    // const [confirmation, setConfirmation] = useState([]);
    
    // const getTool = () => {
    //     return axiosWithAuth()
    //     .get()
    //         .then(res => {
    //             setConfirmation(res.data.tools)
    //             console.log(res.data.tools)
    //         })
    //         .catch(err => console.log(err))
    // };

    // const getToolDetails = () => {
    //     return axiosWithAuth()
    //     .get()
    //         .then(res => {
    //             console.log(res.data)
    //             setConfirmation([...confirmation])
    //         })
    //         .catch(err => console.log(err))
    // }

    // const getTotal = () => {
    //     return axiosWithAuth()
    //     .get()
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }

    // delete functionality here?

    const confirmationStyles = makeStyles({
        bigAvatar: {
            margin: 0,
            width: 80,
            height: 80,
        },
    });

    const confirmationGrid = makeStyles({
        root: {
            width: '100%',
            overflowX: 'auto',
        },
        table: {
            minWidth: 650,
        },
    });
    
    const classes = confirmationStyles();

    // onSubmitCard = (card) => {
    //     const { number, exp_month, exp_year, cvc, name, zip } = card;
    //     Stripe.card.createToken({
    //         number,
    //         exp_month,
    //         exp_year,
    //         cvc,
    //         name,
    //         address_zip: zip
    //     }, (status, response) => {
    //         if (response.error) {
    //             alert('Adding card failed with error: ' + response.error.message)
    //           } else {
    //             const cardToken = response.id;
    //             server.saveCard(cardToken);
    //             this.closeDialog();
    //             // show success message
    //           }
    //     })
    // }


    

    return(
        <>
            <h2>Confirmation</h2>
            <div className="confirmation-screen" style={{ width: '100%', height: '100vh', backgroundColor: 'none', display: 'flex', alignItems: 'center' }}>
                <div className="left-column" style={{ height: '100vh', width: '50%', backgroundColor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column'  }}>
                    <div className="product-image" style={{ width: '50%', height: '25%', backgroundColor: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* below will be where the product image shows  */}
                        <Card style={{ height: '100%', width: '80%', backgroundColor: 'rgb(245, 247, 234)' }}>
                            <CardContent>
                                <h3>Tool Image</h3>
                            </CardContent>
                            <Grid container justify="center" alignItems="center">
                                <Avatar src="" className={classes.bigAvatar} />
                            </Grid>
                        </Card>
                    </div>
                    <div className="product-details" style={{ width: '50%', height: '30%', backgroundColor: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* below will be where the product details(name, model, etc) will show*/}
                        <Card style={{ height: '80%', width: '80%', backgroundColor: 'rgb(245, 247, 234)' }}>
                            <CardContent>
                                <h3>Rental Details</h3>
                                <Paper>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </Paper>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ height: '30%', width: '30%', backgroundColor: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}} >
                        {/* Dollar Amount / Price will replace div below */}
                        <Card style={{ height: '70%', width: '50%', backgroundColor: 'rgb(245, 247, 234)' }}>
                            <CardContent>
                                <h3>Total Price</h3>
                                <h2>$</h2>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="confirmed-details" style={{ width: '40%', height: '50%', backgroundColor: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {/* Product details(description) involved account details shown below */}
                    <Card style={{ height: '80%', width: '80%', backgroundColor: 'rgb(245, 247, 234)' }}>
                        <CardContent>
                            <h3>Product Details</h3>
                            <Paper>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </Paper>
                        </CardContent>
                    </Card>
                </div>
                <div className="payment-details" style={{ width: '50%', height: '50%', backgroundColor: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                <Card style={{ height: '80%', width: '80%', backgroundColor: 'rgb(245, 247, 234)' }}>
                        <CardContent>
                            <h3>Payment Details</h3>
                            <span class="dc_payment_icons_glossy_50 dc_visa_glossy" title="Visa"></span>
                            <span class="dc_payment_icons_glossy_50 dc_mastercard_glossy" title="Mastercard"></span>
                            <span class="dc_payment_icons_glossy_50 dc_americanexpress_glossy" title="American Express"></span>
                            <span class="dc_payment_icons_glossy_50 dc_discover_glossy" title="Discover"></span>
                            <span class="dc_payment_icons_glossy_50 dc_paypal_glossy" title="PayPal"></span>
                            <span class="dc_payment_icons_glossy_50 dc_maestro_glossy" title="Maestro"></span>
                            <span class="dc_payment_icons_glossy_50 dc_cirrus_glossy" title="Cirrus"></span>
                            <span class="dc_payment_icons_glossy_50 dc_visaelectron_glossy" title="Visa Electron"></span>
                            {/* <CardForm
                                onSubmit={this.onSubmitCard}
                                getName={true}
                                getZip={true}
                            /> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Confirmation;