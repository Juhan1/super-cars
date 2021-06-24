import React, { useState, useEffect } from "react";
import "./App.css";
import { CarComponent } from "./cars/car.component";
import { SearchComponent } from "./search/search.component";

function App() {
  const [makeModel, setMakeModel] = useState(["", ""]);

  //function to update the make and model selected
  function handleMake(newMake: string, newModel: string) {
    setMakeModel([newMake, newModel]);
  }

  //update document title when makeModel is updated
  useEffect(() => {
    document.title = makeModel[0]
      ? `${makeModel[0]} ${makeModel[1]}`
      : "Car Details";
    //initially set to Car Details
  }, [makeModel]);

  return (
    <div className="app">
      <div className="container">
        <div className="searchComponent">
          <SearchComponent handleMake={handleMake} />
        </div>
        <div className="carComponent">
          <CarComponent makeModel={makeModel} />
        </div>
      </div>
    </div>
  );
}

export default App;
