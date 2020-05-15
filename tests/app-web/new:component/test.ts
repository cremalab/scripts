import {
  deleteUtil,
  generateNewUtil,
  navigateToConsumer,
  printTreeOfNewUtil,
} from "./utils"

describe("new:util", () => {
  beforeAll(navigateToConsumer)
  afterAll(deleteUtil)

  it("from correct directory", () =>
    expect(process.cwd()).toContain("/app-web"))

  it("generates component with expected files", async () => {
    await generateNewUtil()
    const tree = printTreeOfNewUtil()
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
