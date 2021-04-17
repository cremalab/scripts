import { navigateToConsumer } from "../utils/navigateToConsumer"
import { validateTypeScript } from "../utils/validateTypeScript"

beforeAll(navigateToConsumer("app-mobile"))

describe("TypeScript", () => {
  it("compiles", async () => {
    const result = await validateTypeScript()
    expect(result).toEqual("")
  })
})
