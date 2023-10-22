import { useState } from "react";

function Card({ id, image, name, info, price, removetour }) {
  const [readmore, setreadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmorehandler() {
    setreadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">$ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmorehandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removetour(id)}>
        Not interseted
      </button>
    </div>
  );
}

export default Card;
