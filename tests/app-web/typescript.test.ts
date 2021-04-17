import { navigateToConsumer } from "../utils/navigateToConsumer"
import { validateTypeScript } from "../utils/validateTypeScript"

describe("TypeScript", () => {
  beforeAll(navigateToConsumer("app-web"))

  it("compiles", async () => {
    const result = await validateTypeScript()
    expect(result).toEqual("")
  })
})
