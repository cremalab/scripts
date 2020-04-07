import {
  deleteUtil,
  generateNewUtil,
  navigateToConsumer,
  navigateToProject,
  printTreeOfNewUtil,
} from "./utils"

describe("new:util", () => {
  beforeAll(() => {
    navigateToConsumer()
    console.log("CWD", process.cwd())
  })
  afterAll(() => {
    deleteUtil()
    navigateToProject()
  })

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
