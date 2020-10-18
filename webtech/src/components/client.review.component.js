import React from "react";
import Heading from "./heading.component";
import ClientReviewView from "./client.review.view.component";
const ClientReview = () => {
  return (
    <div className="container">
      <div className="client-body">
        <Heading title1="Awesome Client" title2="Reviews & Comments" />

        <div className="row">
          <ClientReviewView
            imgUrl={`${process.env.PUBLIC_URL}/images/client1.jpg`}
            title="Amazing service!"
            description="Objectively innovate empowered manufactured products whereas parallel platforms.
              Holisticly predominate extensible testing procedeurs for releiable supply chains"
            name="John Enrich"
            city="New York"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
