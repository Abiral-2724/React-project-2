import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data";

const App = () => {
  const [tours, settours] = useState(data);

  function removetour(id) {
    // yaha parr hum ne tour ko filter kara diya ki jis
    // tour parr not interseted bala button click kiya ha
    // usee hata dena
    // to use hatne ke liye use filter kara diya

    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button onClick={() => settours(data)} className="btn-white">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours  tours = {tours} removetour={removetour}>
      </Tours>
    </div>
  );
};

export default App;
