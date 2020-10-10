import React from 'react'

const Footer = (props) =>{
    console.log(props)
    return(
        <div className="container-fluid footer">
            <div className="container">
            <div className="row">
            <div className="col-md-3">
                <h5>Get in Touch</h5>
                <p>{props.address}</p>
            </div>
            <div className="col-md-3">
                <h5>Work with Us</h5>
                <p><a href="mailto:sales@webtech.com" target="blank">{props.email}</a></p>
            </div>
            <div className="col-md-3">
                <h5>Give us a Call</h5>
                <p>{props.phone1}, {props.phone2}</p>
            </div>
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