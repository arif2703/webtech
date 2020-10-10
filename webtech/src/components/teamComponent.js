
import React from 'react'


const TeamComponent = (props) =>{
    return(
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <img src={props.imgUrl} className="card-img-top" alt="Team"/>
                <div className="card-body">
                    <div className="card-text">{props.designation}
                        <span></span>
                    </div>
                    <div className="card-title">{props.name}</div>
                </div>
            </div>
        </div>
    )
}

export default TeamComponent;