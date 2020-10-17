import React from 'react';
import ServiceComponent from '../components/serviceComponent'
import Banner from '../components/banner'
import Footer from '../layout/footer'
import TeamComponent from '../components/teamComponent'
import Header from '../layout/header.layout'
import BannerBig from '../components/banner.component'
import OurPassion from '../layout/our.passion.layout'

function ReferencePage() {
  return (
    <div>

      <Header/>

      <BannerBig
            imgUrl={`${process.env.PUBLIC_URL}/images/pic-desktop.jpg`}
            title="Responsive"
            title2="Website Design"
            btnC1="Pricing & Packaging"
            btnC2="Get Started Now"
        />


      
        <ServiceComponent 
          heading="Web Development"
          description="WebTech India offers website development over an extensive variety of innovation stages to guarantee"
          icon="faCode"
        />        
      
         <OurPassion/>

      <div>
        <TeamComponent
          designation = 'Web - Lead Designer'
          name = 'Phillips John'
          imgUrl = {`${process.env.PUBLIC_URL}/images/team2.jpg`}
        />
      </div>
      <Footer
        phone1='9899688447'
        phone2='9910804980'
        copyright="Copyright 2020 WebTech | All rights reserved"
      />

    </div>
  );
}

export default ReferencePage;
