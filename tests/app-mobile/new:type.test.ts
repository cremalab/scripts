import { cleanup } from "../utils/cleanup"
import { generateNewType } from "../utils/generateNewType"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printFileContents } from "../utils/printFileContents"
import { printTreeOfNew } from "../utils/printTreeOfNew"
import { validateTypeScript } from "../utils/validateTypeScript"

beforeAll(navigateToConsumer("app-mobile"))

describe("new:type", () => {
  beforeAll(() => generateNewType(" foo ")) // Whitespace intentional

  afterAll(() => cleanup("./src/types/Foo.ts"))

  it("generates type file", () => {
    const tree = printTreeOfNew("types")
    expect(tree).toMatchInlineSnapshot(`
    "types
    ├── Foo.ts
    ├── README.md
    └── modules
        └── expo-webpack-config.d.ts
    "
    `)
  })

  it("generates type file with expected contents", async () => {
    const fileContents = await printFileContents("./src/types/Foo.ts")
    expect(fileContents).toMatchSnapshot()
  })

  it("TypeScript compiles", async () => {
    const result = await validateTypeScript()
    expect(result).toEqual("")
  })
})
