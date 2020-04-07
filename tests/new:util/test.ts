import {
  deleteUtil,
  generateNewUtil,
  navigateToConsumer,
  printTreeOfNewUtil,
} from "./utils"

describe("new:util", () => {
  beforeAll(() => {
    navigateToConsumer()
    console.log("CWD", process.cwd())
  })
  afterAll(deleteUtil)

  it("from correct directory", () =>
    expect(process.cwd()).toContain("/app-web"))

  it("generates util with expected files", async () => {
    await generateNewUtil()
    const tree = printTreeOfNewUtil()
    expect(tree).toMatchInlineSnapshot(`
    "./src/utils/foo
    ├── README.md
    ├── index.ts
    └── test.ts
    "
    `)
  })
})
