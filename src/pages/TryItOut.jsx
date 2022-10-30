import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TryItOut = () => {
    return (
        <div className="d-flex row justify-content-center m-4">
            <div>
                <h3>Try the wallet !!</h3>
                <h5><b>Send the transaction</b> and tell us about the experience</h5>
            </div>
            <div style = {{display:"flex", flexDirection:"column", alignItems:"center", margin:"1em"}}>
                <div className='m-4 p-4 rounded' style={{ backgroundColor: "#F0F0F0", width: "40%" }}>
                    <Form>
                        <Form.Group style={{ display: "flex", justifyContent: "stretch" }} className="mb-3" controlId="formBasicEmail">
                            <div class={{ display: "flex" }}>
                                <div style={{ width: "14em", justifyContent: "center" }}>
                                    <Form.Label style={{}}>Email address :</Form.Label>
                                </div>
                            </div>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group style={{ display: "flex" }} className="mb-3" controlId="formBasicPassword">
                            <div class={{ display: "flex" }}>
                                <div style={{ width: "14em", justifyContent: "center" }}>
                                    <Form.Label style={{}}>Password :</Form.Label>
                                </div>
                            </div>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="d-flex flex-column" style={{ width: "40%", padding:"1.5em", border:"1px solid #F0F0F0", borderRadius:"15px"}}>
                    <h4 style={{textAlign:"left"}}><b>Disclaimer :</b></h4>
                    <ul>
                        <li style={{ listStyleType: "disc", textAlign:"left", paddingLeft: "2px" }}>There is some ETH already in your wallet. You can use that to send the transaction.</li>
                        <li style={{ listStyleType: "disc", textAlign:"left", paddingLeft: "2px" }}>We support only ETH for now.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TryItOut