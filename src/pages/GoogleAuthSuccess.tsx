import React from 'react';
import Sucessful from '../components/Sucessful';

const GoogleAuthSuccess = () => {
    return (
        <div className="d-flex row justify-content-center m-4">
            <div>
                <h3>Try the wallet !!</h3>
                <h5><b>Send the transaction</b> and tell us about the experience</h5>
            </div>
            <Sucessful/>
        </div>
    )
}

export default GoogleAuthSuccess
