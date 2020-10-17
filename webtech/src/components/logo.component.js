import React from 'react'

const Logo = ({logo}) =>{
  return(
    <div className="col-lg-3 col-md-12 logos">
          <img src={logo} alt="WebTech Logo"/>
    </div>
  )
}

export default Logo;

//imgUrl={`${process.env.PUBLIC_URL}/images/client1.jpg`}