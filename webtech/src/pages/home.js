import React from 'react';
import BannerBig from '../components/banner.component'

function HomePage() {
  return (
    <>
      <BannerBig
        imgUrl={`${process.env.PUBLIC_URL}/images/pic-desktop.jpg`}
        title="Responsive"
        title2="Website Design"
        btnC1="Pricing & Packaging"
        btnC2="Get Started Now"
      />
    </>
  )
}

export default HomePage;