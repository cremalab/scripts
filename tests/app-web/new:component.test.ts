import { deleteNew } from "../utils/deleteNew"
import { generateNewComponent } from "../utils/generateNewComponent"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:component", () => {
  beforeAll(navigateToConsumer("app-web"))
  afterAll(deleteNew("components", "Foo"))

  it("generates component with expected files", async () => {
    await generateNewComponent()
    const tree = printTreeOfNew("components", "Foo")
    expect(tree).toMatchInlineSnapshot(`
    "Foo
    ├── README.md
    ├── index.tsx
    ├── stories.tsx
    └── test.tsx
    "
    `)
  })
})
