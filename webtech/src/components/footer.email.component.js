import React from 'react'

const FooterEmailComponent = (props) => {
  const {heading, email} = props
  return (
    <div className="col-md-3">
        <h5>{heading}</h5>
        <p><a href={`mailto:${email}`}target="blank">{email}</a></p>
    </div>
  )
}

export default FooterEmailComponent