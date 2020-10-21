import React from "react";

const StayInformationText = ({title, description}) => {
  return (
    <>
<h2 class="text-white border-bottom-0">{title}</h2>
      <p>
          {description}
      </p>
    </>
  );
};

export default StayInformationText;
