import {
  deleteUtil,
  generateNewUtil,
  navigateToProjectDirectory,
  printTreeOfNewUtil,
} from "./utils"

describe("new:component", () => {
  beforeAll(navigateToProjectDirectory)
  afterAll(deleteUtil)

  it("from correct directory", () =>
    expect(process.cwd()).toContain("/app-web"))

  it("generates component with expected files", async () => {
    await generateNewUtil()
    const tree = printTreeOfNewUtil()
    expect(tree).toMatchInlineSnapshot(`
    "./src/components/Foo
    ├── README.md
    ├── index.tsx
    ├── stories.tsx
    └── test.tsx
    "
    `)
  })
})
