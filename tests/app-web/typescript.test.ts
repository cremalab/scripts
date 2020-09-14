import { cleanup } from "../utils/cleanup"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { validateTypeScript } from "../utils/validateTypeScript"

describe("TypeScript", () => {
  beforeAll(navigateToConsumer("app-web"))
  afterAll(cleanup)

  it("compiles", async () => {
    const result = await validateTypeScript()
    expect(result).toEqual("")
  })
})
