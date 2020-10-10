import React from 'react'

const FooterPhoneComponent = (props) => {
  const {heading, phones} = props
  return (
    <div className="col-md-3">
        <h5>{heading}</h5>
      <p>
        {phones.map(phone => (
          <a href={`tel:${phone}`} target="_blank">{phone}<span> </span></a>
        ))}
      </p>
    </div>
  )
}

export default FooterPhoneComponent