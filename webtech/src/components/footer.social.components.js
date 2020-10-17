import React from 'react'

const FooterSocialComponent=(props)=>{
    const {heading, facebook, twitter, linkedin} = props
    return(
        <div class="col-md-3">
            <h5>Follow us On</h5>
            <p>
                <a href="#np">{facebook}</a> | 
                <a href="#np">{twitter}</a> | 
                <a href="#np">{linkedin}</a>
            </p>
        </div>
    )
}
export default FooterSocialComponent;