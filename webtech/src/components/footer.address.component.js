import React from 'react'

const FooterAddressComponent=(props)=>{
    const {heading} = props
    return(
        <div class="col-md-3">
            <h5>{heading}</h5>
            <p>{props.address}</p>
        </div>
    )
}
export default FooterAddressComponent;