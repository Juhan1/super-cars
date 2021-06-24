import { useState, useEffect } from "react";
import "./car.css";
import { getCarDetails } from "../cars/car.api";
import { CarDetails } from "../cars/car";

interface childProps {
  makeModel: string[];
}

export const CarComponent: React.FC<childProps> = (props) => {
  const [carDetails, setCarDetails] = useState<CarDetails>();

  //hook to fetch the car details when a car is selected
  useEffect(() => {
    async function fetchSearch() {
      const request = await getCarDetails(
        props.makeModel[0],
        props.makeModel[1]
      );
      if (request !== undefined) {
        setCarDetails(request);
      }
    }

    fetchSearch();
  }, [props.makeModel]);

  return (
    <div>
      {carDetails && (
        <div>
          <h1 className="carTitle">
            {carDetails.make} {carDetails.model}
          </h1>
          <div className="detailContainer">
            <div className="table">
              <ul className="tableLeft">
                <li>Fuel</li>
                <li>Shift</li>
                <li>Colour</li>
              </ul>
              <ul className="tableRight">
                <li>{carDetails.fuelType}</li>
                <li>{carDetails.shiftType}</li>
                <li>{carDetails.colour}</li>
              </ul>
            </div>
            <div className="priceBox">
              <h1 className="priceTag">
                {carDetails.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </h1>
              {carDetails.features.join(" - ")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
