import { render, screen } from "@testing-library/react";
import { CarComponent } from "./car.component";

describe("Car Component Tests", () => {
  test("the car title renders", async () => {
    render(<CarComponent makeModel={["Hyundai", "i30"]} />);
    const titleElement = await screen.findByRole("heading")
    expect(titleElement).toHaveTextContent("Hyundai i30");
  });
});
