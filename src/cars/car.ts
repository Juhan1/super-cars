export interface Car {
  make: string;
  model: string;
  price: number;
}

export interface CarDetails extends Car {
  fuelType: string;
  shiftType: typeof SHIFT_TYPES[keyof typeof SHIFT_TYPES];
  features: string[];
  colour: string;
}

export const SHIFT_TYPES = {
  automatic: "Automatic",
  manual: "Manual",
} as const;
