import React from 'react'
import StayInformationText from '../components/stay.information.text.component'
import Subscribe from '../components/subscribe.component'

const StayInfromation = () =>{
  return(
    <div class="container-fluid stayConnected p-5 mt-5 padL-Rzero text-center">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <StayInformationText
                  title="Stay Informed / Connected"
                  description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
                  ipsum natus excepturi iure odit quisquam officia, tempore minus quas."
                />

                  <Subscribe/>
            </div>
        </div>
    </div>
</div>

  )
}

export default StayInfromation;