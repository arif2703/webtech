import React from 'react'

import FooterEmailComponent from '../components/footer.email.component'
import FooterPhoneComponent from '../components/footer.phone.component'
import FooterAddressComponent from '../components/footer.address.component'
import FooterSocialComponent from '../components/footer.social.components'

const Footer = (props) =>{
    console.log(props)
    const phones = [props.phone1, props.phone2]
    return(
        <div className="container-fluid footer">
            <div className="container">
            <div className="row">
            <FooterAddressComponent
                heading="Get in Touch"
                address="C-27, Ist floor, Pili Kothi, Khanpur, ND-80"
            />

            <FooterEmailComponent 
                heading="Work with Us" 
                email="sales@webtech.com"
            />
            <FooterPhoneComponent 
                heading="Give us a Call"
                phones={phones}
            />
            <FooterSocialComponent
                heading="Follow us On"
                facebook={facebook}
                twitter={twitter}
                linkedin={linkedin}
            />
            
            </div>
        </div>
        <div className="container-fluid copyright">{props.copyright}</div>
        </div>
    )
}
export default Footer;