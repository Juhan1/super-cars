import React from "react";
import "./App.css";
import { CarComponent } from "./cars/car.component";
import { SearchComponent } from "./search/search.component";

function App() {
  return (
    <div className="app">
      <SearchComponent />
      <CarComponent />
    </div>
  );
}

export default App;
