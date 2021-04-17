import { cleanup } from "../utils/cleanup"
import { generateNewType } from "../utils/generateNewType"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:type", () => {
  beforeAll(navigateToConsumer("app-web"))
  afterAll(cleanup("./src/types/Foo.ts"))

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
