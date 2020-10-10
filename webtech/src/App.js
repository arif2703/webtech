import React from 'react';
import ServiceComponent from './components/serviceComponent'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Banner from './components/banner'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Banner
        image={`${process.env.PUBLIC_URL}/images/pic-desktop.jpg`}
        bannerTitle="Responsive"
        bannerTitle2="Website Design"
        btn1="Pricing &amp; Packaging"
        btn2="Get Started Now"
      />
      <div className="card col-md-6 col-lg-4">
        <ServiceComponent 
          heading="Web Development"
          description="WebTech India offers website development over an extensive variety of innovation stages to guarantee"
          icon="fa-code"
        />
      </div>
      <Footer
        address="C-27, Ist floor, Pili Kothi, Khanpur, ND-80"
        email="sales@webtech.com"
        phone1='9899688447'
        phone2='9910804980'
        fbMedia="Facebook"
        twitter="Twitter"
        linkedin="Linkedin"
        copyright="Copyright 2020 WebTech | All rights reserved"
      />
    </div>
  );
}

export default App;
