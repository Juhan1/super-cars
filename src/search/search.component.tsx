import { useState, useEffect } from "react";
import { findCars } from "../cars/car.api";
import { Car } from "../cars/car";

interface childProps {
  handleMake: (newMake: string, newModel: string) => void;
}

export const SearchComponent: React.FC<childProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchSearch() {
      const request = await findCars(searchTerm);
      //console.log(request[0].make);
      setSearchResults(request);
    }

    fetchSearch();
  }, [searchTerm]);

  function selectCar(newMake: string, newModel: string) {
    props.handleMake(newMake, newModel);
    setSearchTerm("");
  }

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm !== "" && (
        <ul>
          {searchResults.map((result) => {
            return (
              <li
                key={result.make + result.model}
                onClick={() => selectCar(result.make, result.model)}
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
  );
};
