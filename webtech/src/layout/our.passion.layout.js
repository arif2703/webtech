import React from 'react'
import About from '../components/about.component'

const OurPassion = () =>{
  return(
    <>
      <About
        imgUrl={`${process.env.PUBLIC_URL}/images/pic1.jpg`}
        title1="Design Business"
        title2="is our passion"
        description="At WebTech India we actually understand the deep functionality of websites - we would prefer not to confound you in complex technical languages however attempt our level best to pick up your confidence by disclosing everything to you clearly in a simple talk that we will have the ability to build up an ideal website to address the issues of both you and your clients."
      />
    </>
  )
}

export default OurPassion;