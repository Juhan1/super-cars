import { useState, useEffect } from "react";
import { findCars } from "../cars/car.api";
import { Car } from "../cars/car";

export const SearchComponent: React.FC = () => {
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

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map((result) => {
          return (
            <li key={result.make + result.model}>
              {result.make} {result.model}
              <br />
              {result.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
