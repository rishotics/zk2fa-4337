import React from 'react'
import { Button } from 'react-bootstrap'
const Cross = require('../assets/image/Cross.png');

const UnSuccessful = () => {
  return (
    <div>
            <div style={{ margin: "30px" }}>
                <img className="Cross" src={Cross} alt="" />
            </div>
            <h3>Submission Failed</h3>
            <div>
                <Button variant="primary">Try Again</Button>{' '}
                <Button variant="light">Give Feedback</Button>{' '}
            </div>
        </div>
  )
}

export default UnSuccessful