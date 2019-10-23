import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
                        <div style={{ height: '80%', width: '80%', backgroundColor: 'green' }} />
                    </div>
                    <div className="product-details" style={{ width: '50%', height: '30%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                        {/* below will be where the product details(name, model, etc) will show*/}
                        <div style={{ height: '80%', width: '80%', backgroundColor: 'green' }} />
                    </div>
                    <div style={{ height: '30%', width: '30%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}} >
                        {/* Dollar Amount / Price will replace div below */}
                        <div className="price" style={{ height: '50%', width: '50%', backgroundColor: 'green' }} />
                    </div>
                </div>
                <div className="confirmed-details" style={{ width: '40%', height: '80%', backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    {/* Product details(description) involved account details shown below */}
                    <div style={{ height: '80%', width: '80%', backgroundColor: 'green' }} />
                </div>
            </div>
        </>
    )
}

export default Confirmation;