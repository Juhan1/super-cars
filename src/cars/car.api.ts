import { Car, CarDetails, SHIFT_TYPES } from "./car";

export function findCars(term: string) {
  return new Promise<Car[]>((resolve, reject) => {
    resolve(
      carData
        .filter(
          (car) => `${car.make} ${car.model}`.toLowerCase().indexOf(term) >= 0
        )
        .map((car) => ({
          make: car.make,
          model: car.model,
          price: car.price,
        }))
    );
  });
}

export function getCarDetails(make: string, model: string) {
  return carData.find(
    (car) =>
      car.make.toLowerCase() === make.toLowerCase() &&
      car.model.toLowerCase() === model.toLowerCase()
  );
}

/*

















Pay no mind to the man behind the curtain...

















*/
const carData: CarDetails[] = [
  {
    make: "Hyundai",
    model: "i30",
    price: 23900,
    fuelType: "Unleaded",
    shiftType: SHIFT_TYPES.automatic,
    features: ["Fast", "Small", "Fun", "300k/l"],
    colour: "Red",
  },
  {
    make: "Alpha Romeo",
    model: "Giulia",
    price: 70700,
    fuelType: "Unleaded",
    shiftType: SHIFT_TYPES.automatic,
    features: ["Makes you look important", "Big windows"],
    colour: "Silver",
  },
  {
    make: "Nissan",
    model: "Navara",
    price: 39200,
    fuelType: "Unleaded",
    shiftType: SHIFT_TYPES.manual,
    features: ["It is definitely a car", "Will get you to new places"],
    colour: "Gold",
  },
  {
    make: "Mazda",
    model: "CX-8",
    price: 43990,
    fuelType: "Unleaded",
    shiftType: SHIFT_TYPES.automatic,
    features: ["Zoom zoom", "Super injection cooling", "Turbo thrust mode"],
    colour: "Pink",
  },
  {
    make: "Volkswagen",
    model: "Amarok",
    price: 43990,
    fuelType: "Unleaded",
    shiftType: SHIFT_TYPES.manual,
    features: ["It can carry stuff", "Strong wheels", "Very big, much wow"],
    colour: "Black",
  },
];
