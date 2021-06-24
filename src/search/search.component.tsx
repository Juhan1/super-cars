import { useState, useEffect } from "react";
import "./search.css";
import { findCars } from "../cars/car.api";
import { Car } from "../cars/car";

interface childProps {
  handleMake: (newMake: string, newModel: string) => void;
}

export const SearchComponent: React.FC<childProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Car[]>([]);

  //hook to fetch the search results when searchTerm is changed
  useEffect(() => {
    async function fetchSearch() {
      const request = await findCars(searchTerm);
      setSearchResults(request);
    }

    fetchSearch();
  }, [searchTerm]);

  //function to updated selected car in parent component
  function selectCar(newMake: string, newModel: string) {
    props.handleMake(newMake, newModel);
    //clear search term
    setSearchTerm("");
  }

  return (
    <div className="searchContainer">
      <div>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="listComponent">
        {searchTerm !== "" && (
          <ul className="list">
            {searchResults.map((result) => {
              return (
                <li
                  key={result.make + result.model}
                  onClick={() => selectCar(result.make, result.model)}
                  className="listItem"
                >
                  {result.make} {result.model}
                  <br />
                  {result.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
