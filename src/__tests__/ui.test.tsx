import { act, render, screen } from "@testing-library/react";
import App from "../ui/App";
import "@testing-library/jest-dom";

describe("App Component UI Tests", () => {

    test("renders the 9x9 Sudoku board", async () => {
        const container = await act(() => {
            const { container } = render(<App />);
            return container;
        });

        // const { container } = render(<App />);
        // Since each cell is a span inside the board
        const cells = container.querySelectorAll("main span");
        expect(cells.length).toBe(81);
    });

    test("renders the digit input buttons (1-9)", async () => {
        await act(() => {
            render(<App />);
        });

        // Check for buttons 1 through 9
        for (let i = 1; i <= 9; i++) {
            const button = screen.getByRole("button", { name: i.toString() });
            expect(button).toBeInTheDocument();
        }
    });

});
