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

function Confirmation(props) {

    const [confirmation, setConfirmation] = useState([]);
    
    const getTool = () => {
        return axiosWithAuth()
        .get()
            .then(res => {
                setConfirmation(res.data.tools)
                console.log(res.data.tools)
            })
            .catch(err => console.log(err))
    };

    const getToolDetails = () => {
        return axiosWithAuth()
        .get()
            .then(res => {
                console.log(res.data)
                setConfirmation([...confirmation])
            })
            .catch(err => console.log(err))
    }

    const getTotal = () => {
        return axiosWithAuth()
        .get()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    // delete functionality here?

    return(
        <>
            <h2>Confirmation</h2>
            <div className="confirmation-screen" style={{ width: '100%', height: '100vh', backgroundColor: 'blue', display: 'flex', alignItems: 'center' }}>
                <div className="left-column" style={{ height: '100vh', width: '50%', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column'  }}>
                    <div className="product-image" style={{ width: '50%', height: '25%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* below will be where the product image shows  */}
                        <Card style={{ height: '80%', width: '80%', backgroundColor: 'green' }}>
                            <CardContent>
                                <h3>Tool Image</h3>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="product-details" style={{ width: '50%', height: '30%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* below will be where the product details(name, model, etc) will show*/}
                        <Card Style={{ height: '80%', width: '80%', backgroundColor: 'green' }}>
                            <CardContent>
                                <h3>Product Details</h3>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ height: '30%', width: '30%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}} >
                        {/* Dollar Amount / Price will replace div below */}
                        <Card style={{ height: '50%', width: '50%', backgroundColor: 'green' }}>
                            <CardContent>
                                <h3>Total Price</h3>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="confirmed-details" style={{ width: '40%', height: '80%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {/* Product details(description) involved account details shown below */}
                    <Card style={{ height: '80%', width: '80%', backgroundColor: 'green' }}>
                        <CardContent>
                            <h3>Payment Checkout</h3>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Confirmation;