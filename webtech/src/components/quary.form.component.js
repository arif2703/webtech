import React from 'react'

const QuaryForm = () =>{
  return(

    <div className="container">
        <div className="row enquiry-container">
            <div className="col-md-6 col-sm-12"><img src="images/img-laptop.jpg" alt="Laptop"/></div>
            <div className="col-md-6 col-sm-12">
                <form className="form-row form-boxy">
                    <h4 className="w-100">What are you waiting for?</h4>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Email Id"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div className="form-group col-md-6">
                        <select className="form-control">
                            <option>Service Required</option>
                            <option>Web Design</option>
                            <option>Web Development</option>
                            <option>Graphic & Print Services</option>
                            <option>SEO + Promotion</option>
                            <option>Ecommerce Website</option>
                            <option>Psd to Html</option>
                            <option>Emailer Design Service</option>
                            <option>Photo Retouching Service</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <textarea className="form-control" placeholder="Write your specification"/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit Query"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default QuaryForm;