import React from 'react'

import FooterEmailComponent from '../components/footer.email.component'
import FooterPhoneComponent from '../components/footer.phone.component'

const Footer = (props) =>{
    console.log(props)
    const phones = [props.phone1, props.phone2]
    return(
        <div className="container-fluid footer">
            <div className="container">
            <div className="row">
            <div className="col-md-3">
                <h5>Get in Touch</h5>
                <p>{props.address}</p>
            </div>
            <FooterEmailComponent 
                heading="Work with Us"
                email="sales@webtech.com"
            />
            <FooterPhoneComponent 
                heading="Give us a Call"
                phones={phones}
            />

            <div className="col-md-3">
                <h5>Follow us On</h5>
                <p><a href="#np">{props.fbMedia}</a> | 
                   <a href="#np">{props.twitter}</a> | 
                   <a href="#np">{props.linkedin}</a>  
                </p>
            </div>
            </div>
        </div>
        <div className="container-fluid copyright">{props.copyright}</div>
        </div>
    )
}
export default Footer;