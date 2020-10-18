import React from 'react'
import ServiceCardView from './service.card.view.component'
import Heading from './heading.component'

const ServiceCard = () =>{
  
  return(
    <div className="services-body mb-5">
      <div className="container">
        <Heading
          title1="WebTech Professional"
          title2="Design Services"
        />
      <div className="row no-gutters">
        <ServiceCardView
          title="Web Design"
          description="Your website is the initial introduction of your organization and
          says a lot about your work, not simply regarding"
        />

<ServiceCardView
          title="Web Development"
          description="Your website is the initial introduction of your organization and
          says a lot about your work, not simply regarding"
        />

<ServiceCardView
          title="Graphic & Print design"
          description="Your website is the initial introduction of your organization and
          says a lot about your work, not simply regarding"
        />
    </div>
      </div>
    </div>
    
  )
}

export default ServiceCard;