import React from 'react'
import { Button } from 'react-bootstrap'
import Tick from '../assets/image/Tick.png'

const Sucessful = () => {
    return (
        <div>
            <div style={{ margin: "30px" }}>
                <img className="Tick" src={Tick} alt="" />
            </div>
            <h3>Transaction Successful</h3>
            <div>
                <Button variant="primary">Give Feedback</Button>{' '}
                <Button variant="light">Try Again</Button>{' '}
            </div>
        </div>
    )
}

export default Sucessful