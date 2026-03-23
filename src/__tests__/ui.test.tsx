import { act, render, screen } from "@testing-library/react";
import App from "../ui/App";
import "@testing-library/jest-dom";
import { SIZE } from "../service/Game";

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

    test('when user selects cell the keyboard below become enabled', async () => {
        const {container} = await act(() => {
            return render(<App />);
        });

        //check before disabled
        const buttons = screen.getAllByRole("button") as HTMLButtonElement[]
        expect(buttons.length).toBe(SIZE)
        expect(buttons.every(button => button.disabled)).toBe(true)

        //check after enabled
        await act(() => {
            const cells = container.querySelectorAll("span")
            cells[0].click()
            render(<App />)
        })
        expect(buttons.every(button => !button.disabled)).toBe(true)
    })
});
