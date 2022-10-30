import React from 'react';
import qrImg from "../assets/image/qr.png"

const SetupWallet = () => {
  return (
    <div className="d-flex row justify-content-center m-4">
      <h3>Wallet Setup</h3>
      <div className='m-4 p-4 rounded' style={{backgroundColor:"#F0F0F0", width:"40%"}}>
        <p>Scan this code with your authenicator app</p>
        <img src={qrImg} alt="" />
      </div>
      
    </div>
  )
}

export default SetupWallet