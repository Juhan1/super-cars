import React, { useState } from "react";
import "./App.css";
import { CarComponent } from "./cars/car.component";
import { SearchComponent } from "./search/search.component";

function App() {
  const [makeModel, setMakeModel] = useState(["", ""]);

  function handleMake(newMake: string, newModel: string) {
    setMakeModel([newMake, newModel]);
  }

  return (
    <div className="app">
      <SearchComponent handleMake={handleMake} />
      <CarComponent />
      {makeModel.join(" ")}
    </div>
  );
}

export default App;
