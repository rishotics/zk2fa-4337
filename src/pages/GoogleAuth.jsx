import React from 'react';
import Otpinput from '../components/Otp';

const GoogleAuth = () => {
    return (
        <div className="d-flex row justify-content-center m-4">
            <div>
                <h3>Try the wallet !!</h3>
                <h5><b>Send the transaction</b> and tell us about the experience</h5>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1em" }}>
                <div className='m-4 p-4 rounded' style={{ backgroundColor: "#F0F0F0", width: "40%" }}>
                    <h3><b>Enter the pin from Google authenticator app</b></h3>
                    <Otpinput />
                </div>

            </div>
        </div>
    )
}

export default GoogleAuth
