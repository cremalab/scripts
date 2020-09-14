import { navigateToConsumer } from "../utils/navigateToConsumer"
import { validateTypeScript } from "../utils/validateTypeScript"

describe("TypeScript", () => {
  beforeAll(navigateToConsumer("app-mobile"))

  it("compiles", async () => {
    const result = await validateTypeScript()
    expect(result).toEqual("")
  })
})
