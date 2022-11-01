import React from 'react';
import qrImg from "../assets/image/qr.png"
import {generateMerkleTree} from "./util"



const SetupWallet = () => {

  const deploy = async() => {
    const {uri, secret, root} = await generateMerkleTree()
    console.log(`uri:`)
  }
  // await deploy()
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