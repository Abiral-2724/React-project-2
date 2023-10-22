import React from "react";
import Card from "./Card";

function Tours({ tours, removetour }) {
  return (
    <div className="container">
      <div>
        <h1 className="title"> Plan with Abiral</h1>
      </div>
      
      <div className="cards">
        {
          tours.map((tour) => {
          return <Card key={tour.id} {...tour} removetour={removetour}></Card>;
        })
        }

      </div>
    </div>
  );
}

export default Tours;
