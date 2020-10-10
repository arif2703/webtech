import React from 'react'

const Banner = (props) =>{
    console.log(props)
    return(
        <div className="banner">
            <div className="container">
            <div className="bannerDesign">
                <img src={props.image} />
                <div className="slider-right">
                    <h1>{props.bannerTitle} <span>{props.bannerTitle2}</span></h1>
                    <div className="bannerFix">
                        <button className="btn btn-pink mrL">{props.btn1}</button>
                        <button className="btn btn-blue">{props.btn2}</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    ) 
}

export default Banner;
