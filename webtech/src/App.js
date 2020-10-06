import React from 'react';
import ServiceComponent from './components/serviceComponent'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TeamComponent from './components/teamComponent'

function App() {
  return (
    <div>
      <button className="btn btn-primary">Submit</button>
      <div className="card col-md-6 col-lg-4">
        <ServiceComponent 
          heading="Web Development"
          description="WebTech India offers website development over an extensive variety of innovation stages to guarantee"
          icon="fa-code"
        />        
      </div>
      <div>
        <TeamComponent
          designation = 'Web - Lead Designer'
          name = 'Phillips John'
          imgUrl = {`${process.env.PUBLIC_URL}/images/team2.jpg`}
        />
      </div>

    </div>
  );
}

export default App;
