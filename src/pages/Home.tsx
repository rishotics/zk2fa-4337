import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='d-flex justify-content-center row'>
        <h3 className='mt-5 mb-4'>Before you start... we will have to download a few things</h3>
        <div className="p-3 rounded d-flex justify-content-center m-2 mb-5" style={{backgroundColor:"#F0F0F0", width:"40%"}}>
            <ul>
                <li style={{textAlign:"left", fontSize:"1.2rem"}} >Download Google authenticator on your phone </li>
                <li style={{textAlign:"left", fontSize:"1.2rem"}}>Add Metamask extension to your browser</li>
            </ul>
        </div>
        <h5>All ready??</h5>
        <Link className="btn btn-primary m-2 btn-lg" to="setup-wallet"   style={{width:"fit-content"}} >Get Started</Link>
    </div>
  )
}

export default Home