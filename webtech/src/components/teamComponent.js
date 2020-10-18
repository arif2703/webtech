import React from 'react'
import Heading from './heading.component'
import TeamView from './team.view.component'

const Team = () =>{
  return(
    
    <div class="container-fluid grayBG">
        <div class="container">
            <div class="team-body">
                <Heading
                  title1="Our dedicated"
                  title2="Design Team"
                />
                <div class="row">
                 <TeamView
                  imgUrl={`${process.env.PUBLIC_URL}/images/team1.jpg`}
                  designation="Founder / Lead Designer"
                  name="Cindrella Commy"
                 />  
                   
        </div>
    </div>
    </div>
    </div>
  )
}

export default Team;