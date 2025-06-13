/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"
import Page from "./page"

it("App Router: Works with Server Components", () => {
  render(<Page />)
})