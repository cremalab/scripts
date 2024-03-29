import { cleanup } from "../utils/cleanup"
import { generateNewComponent } from "../utils/generateNewComponent"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printFileContents } from "../utils/printFileContents"
import { printTreeOfNew } from "../utils/printTreeOfNew"
import { validateTypeScript } from "../utils/validateTypeScript"
import { validateUnitTests } from "../utils/validateUnitTests"

beforeAll(navigateToConsumer("app-web"))

describe("new:component", () => {
  describe("name formatting", () => {
    beforeAll(() =>
      generateNewComponent({
        name: "  foo BAR    baz      ",
        withExample: false,
        withState: false,
      }),
    )

    afterAll(() => cleanup("./src/components/FooBarBaz"))

    it("handles trimming, weird spacing, and capitalization", () => {
      const tree = printTreeOfNew("components", "FooBarBaz")
      expect(tree).toMatchInlineSnapshot(`
      "FooBarBaz
      ├── FooBarBaz.stories.tsx
      ├── FooBarBaz.test.tsx
      ├── FooBarBaz.tsx
      ├── README.md
      └── index.ts
      "
      `)
    })
  })

  describe("without example code generates expected", () => {
    beforeAll(() =>
      generateNewComponent({ name: "A", withExample: false, withState: false }),
    )

    afterAll(() => cleanup("./src/components/A"))

    it("files", () => {
      const tree = printTreeOfNew("components", "A")
      expect(tree).toMatchInlineSnapshot(`
      "A
      ├── A.stories.tsx
      ├── A.test.tsx
      ├── A.tsx
      ├── README.md
      └── index.ts
      "
      `)
    })

    it("TypeScript compiles", async () => {
      const result = await validateTypeScript()
      expect(result).toEqual("")
    })

    it("A.stories.tsx contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/A/A.stories.tsx",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("A.test.tsx contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/A/A.test.tsx",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("A.test.tsx tests pass", async () => {
      const result = await validateUnitTests("./src/components/A/A.test.tsx")
      expect(result).toEqual("PASS ./src/components/A/A.test.tsx")
    })

    it("A.tsx contents", async () => {
      const fileContents = await printFileContents("./src/components/A/A.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("README.md contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/A/README.md",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("index.ts contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/A/index.ts",
      )
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example code but without state generates expected", () => {
    beforeAll(() =>
      generateNewComponent({ name: "B", withExample: true, withState: false }),
    )

    afterAll(() => cleanup("./src/components/B"))

    it("files", () => {
      const tree = printTreeOfNew("components", "B")
      expect(tree).toMatchInlineSnapshot(`
      "B
      ├── B.stories.tsx
      ├── B.test.tsx
      ├── B.tsx
      ├── README.md
      └── index.ts
      "
      `)
    })

    it("TypeScript compiles", async () => {
      const result = await validateTypeScript()
      expect(result).toEqual("")
    })

    it("B.stories.tsx contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/B/B.stories.tsx",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("B.test.tsx contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/B/B.test.tsx",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("B.test.tsx tests pass", async () => {
      const result = await validateUnitTests("./src/components/B/B.test.tsx")
      expect(result).toEqual("PASS ./src/components/B/B.test.tsx")
    })

    it("B.tsx contents", async () => {
      const fileContents = await printFileContents("./src/components/B/B.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("README.md contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/B/README.md",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("index.ts contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/B/index.ts",
      )
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example code and with state generates expected", () => {
    beforeAll(() =>
      generateNewComponent({ name: "C", withExample: true, withState: true }),
    )

    afterAll(() => cleanup("./src/components/C"))

    it("files", () => {
      const tree = printTreeOfNew("components", "C")
      expect(tree).toMatchInlineSnapshot(`
      "C
      ├── C.stories.tsx
      ├── C.test.tsx
      ├── C.tsx
      ├── README.md
      └── index.ts
      "
      `)
    })

    it("TypeScript compiles", async () => {
      const result = await validateTypeScript()
      expect(result).toEqual("")
    })

    it("C.stories.tsx contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/C/C.stories.tsx",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("C.test.tsx contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/C/C.test.tsx",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("C.test.tsx tests pass", async () => {
      const result = await validateUnitTests("./src/components/C/C.test.tsx")
      expect(result).toEqual("PASS ./src/components/C/C.test.tsx")
    })

    it("C.tsx contents", async () => {
      const fileContents = await printFileContents("./src/components/C/C.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("README.md contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/C/README.md",
      )
      expect(fileContents).toMatchSnapshot()
    })

    it("index.ts contents", async () => {
      const fileContents = await printFileContents(
        "./src/components/C/index.ts",
      )
      expect(fileContents).toMatchSnapshot()
    })
  })
})
