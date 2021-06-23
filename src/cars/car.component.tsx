import { useState, useEffect } from "react";
import { getCarDetails } from "../cars/car.api";
import { CarDetails } from "../cars/car";

interface childProps {
  makeModel: string[];
}

export const CarComponent: React.FC<childProps> = (props) => {
  const [carDetails, setCarDetails] = useState<CarDetails>();

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
          <h1>
            {carDetails.make} {carDetails.model}
          </h1>
          <br />
          {carDetails.fuelType}
          <br />
          {carDetails.shiftType}
          <br />
          {carDetails.colour}
          <br />
          {carDetails.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
          <br />
          {carDetails.features.join(" - ")}
        </div>
      )}
    </div>
  );
};
