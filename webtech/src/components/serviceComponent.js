import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fontIcon from '@fortawesome/free-solid-svg-icons'

export default (props) => {
  const {heading, description, icon} = props
  return (
    <div className="row no-gutters">
        <div className="col-md-2 icony">
          <FontAwesomeIcon icon={fontIcon[icon]} />
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