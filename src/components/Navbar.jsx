import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" ,padding:"2rem"}}>
        <Link className="text-decoration-none btn" to="/">Home</Link>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around" ,gap:"2rem"}}>
            <Link className="text-decoration-none btn" to="setup-wallet">Setup2FA</Link>
            <Link className="text-decoration-none btn" to="try-it-out">Try it Out!</Link>
            <Button style={{
                
            }}>Give Feedback</Button>
        </div>
    </div>
  )
}

export default Navbar