import { deleteNew } from "../utils/deleteNew"
import { generateNewType } from "../utils/generateNewType"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:type", () => {
  beforeAll(navigateToConsumer("app-web"))
  afterAll(deleteNew("types", "Foo.ts", true))

  it("generates type file", async () => {
    await generateNewType()
    const tree = printTreeOfNew("types")
    expect(tree).toMatchInlineSnapshot(`
    "types
    ├── Foo.ts
    └── README.md
    "
    `)
  })
})
