import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe('Header.jsx', () => {
    it("should render the correct header", () => {
        render(<Header />)
        const logoElement = screen.getByAltText('logo de um deserto')
        expect(logoElement).toBeInTheDocument()
    })
})
