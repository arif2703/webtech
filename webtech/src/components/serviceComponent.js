import React from 'react'

export default (props) => {
  const {heading, description, icon} = props
  return (
    <div className="row no-gutters">
        <div className="col-md-2 icony">
          <i className={`fa ${icon}`} aria-hidden="true"></i>
        </div>
        <div className="col-md-10">
            <div className="card-body">
              <h3 className="card-title">{heading}</h3>
              <p className="card-text">{description}</p>
            </div>
        </div>
    </div>
  )
}