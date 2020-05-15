import { deleteNew } from "../utils/deleteNew"
import { generateNewUtil } from "../utils/generateNewUtil"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:util", () => {
  beforeAll(navigateToConsumer("app-web"))
  afterAll(deleteNew("utils", "foo"))

  it("generates util with expected files", async () => {
    await generateNewUtil()
    const tree = printTreeOfNew("utils", "foo")
    expect(tree).toMatchInlineSnapshot(`
    "foo
    ├── README.md
    ├── index.ts
    └── test.ts
    "
    `)
  })
})
