import { printFileContents } from "../utils/printFileContents"
import { cleanup } from "../utils/cleanup"
import { generateNewUtil } from "../utils/generateNewUtil"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printTreeOfNew } from "../utils/printTreeOfNew"
import { validateTypeScript } from "../utils/validateTypeScript"
import { validateUnitTests } from "../utils/validateUnitTests"

beforeAll(navigateToConsumer("app-mobile"))

describe("new:util", () => {
  beforeAll(generateNewUtil)

  afterAll(() => cleanup("./src/utils/foo"))

  it("generates directory with expected files", () => {
    const tree = printTreeOfNew("utils", "foo")
    expect(tree).toMatchInlineSnapshot(`
    "foo
    ├── foo.test.ts
    ├── foo.ts
    └── index.ts
    "
    `)
  })

  it("TypeScript compiles", async () => {
    const result = await validateTypeScript()
    expect(result).toEqual("")
  })

  it("generates directory with expected `index.ts` contents", async () => {
    const fileContents = await printFileContents("./src/utils/foo/index.ts")
    expect(fileContents).toMatchSnapshot()
  })

  it("generates directory with expected `foo.ts` contents", async () => {
    const fileContents = await printFileContents("./src/utils/foo/foo.ts")
    expect(fileContents).toMatchSnapshot()
  })

  it("generates directory with expected `test.ts` contents", async () => {
    const fileContents = await printFileContents("./src/utils/foo/foo.test.ts")
    expect(fileContents).toMatchSnapshot()
  })

  it("generates working tests", async () => {
    const result = await validateUnitTests("./src/utils/foo/foo.test.ts")
    expect(result).toEqual("PASS ./src/utils/foo/foo.test.ts")
  })
})
