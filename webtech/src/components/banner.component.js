import React from 'react'

const BannerBig = ({imgUrl, title, title2, btnC1, btnC2}) =>{
  return(
    <div className="banner">
        <div className="container">
            <div className="bannerDesign">
                <img src={imgUrl} alt=""/>
                <div className="slider-right">
                    <h1>{title}<span>{title2}</span></h1>
                    <div className="bannerContent">
                      <button className="btn btn-pink mrL">{btnC1}</button>
                      <button className="btn btn-blue">{btnC2}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerBig;