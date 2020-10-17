import React from 'react'
import TopHeader from '../components/top.header.component'
import Navigation from '../components/navigation.component'
import Logo from '../components/logo.component'
const Header = () =>{
  return(
    <>
      <TopHeader
        mobileNo="9899688447"
        mail="enquiry@webtech.com"
        call="Request A Call"
      />
      <div className="container">
        <header className="row">
          <Logo
            logo={`${process.env.PUBLIC_URL}/images/logo.jpg`}
          />
          <Navigation/>
        </header>
      </div>
    </>
  )
}

export default Header;