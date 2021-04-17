import { cleanup } from "../utils/cleanup"
import { generateNewUtil } from "../utils/generateNewUtil"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:util", () => {
  beforeAll(navigateToConsumer("app-mobile"))
  afterAll(cleanup("./src/utils/foo"))

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
