import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchComponent } from "./search.component";

const mockHandleMake = jest.fn((newMake, newModel) => {})

describe("Search Component Tests", () => {
  test("initial state has no list", async () => {
    render(<SearchComponent handleMake={mockHandleMake}/>);
    const listElement = await waitFor(() => screen.queryByRole("list"));
    expect(listElement).toBeNull();
  });
  test("list renders after input", async() => {
    render(<SearchComponent handleMake={mockHandleMake}/>);
    const searchInput = await screen.findByRole("searchbox");
    fireEvent.change(searchInput, {target: {value: "a"}});
    const listElement = await screen.findByRole("list");
    expect(listElement).toBeInTheDocument();
  })
  test("list renders correct number of elements after search", async() => {
    render(<SearchComponent handleMake={mockHandleMake}/>);
    const searchInput = await screen.findByRole("searchbox");
    fireEvent.change(searchInput, {target: {value: "mazda"}});
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).toHaveLength(1);
  })
  test("handleMake is called with correct argument of selected car", async() => {
    render(<SearchComponent handleMake={mockHandleMake}/>);
    const searchInput = await screen.findByRole("searchbox");
    fireEvent.change(searchInput, {target: {value: "mazda"}});
    const listItemElement = await screen.findByRole("listitem");
    fireEvent.click(listItemElement);
    expect(mockHandleMake).toHaveBeenCalledWith("Mazda", "CX-8");
    expect(screen.queryByRole("list")).toBeNull();
  })
});
