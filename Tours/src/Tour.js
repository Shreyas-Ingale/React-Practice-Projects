import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {

  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h3>{name}</h3>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button type="button" className={readMore ? "ps-0" : ""} onClick={() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Read More"}</button>
      </p>
      <button type="button" className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
    </footer>
  </article>;
};

export default Tour;
