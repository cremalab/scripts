import { cleanup } from "../utils/cleanup"
import { generateNewComponent } from "../utils/generateNewComponent"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printFileContents } from "../utils/printFileContents"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:component", () => {
  beforeAll(navigateToConsumer("app-web"))

  describe("without example code", () => {
    afterAll(cleanup)
    beforeAll(() =>
      generateNewComponent({ withExample: false, withState: false }),
    )

    it("generates directory with expected files", async () => {
      const tree = printTreeOfNew("components", "Foo")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example but without state", () => {
    afterAll(cleanup)
    beforeAll(() =>
      generateNewComponent({ withExample: true, withState: false }),
    )

    it("generates component with expected files", async () => {
      const tree = printTreeOfNew("components", "Foo")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example and with state", () => {
    afterAll(cleanup)
    beforeAll(() =>
      generateNewComponent({ withExample: true, withState: true }),
    )

    it("generates component with expected files", async () => {
      const tree = printTreeOfNew("components", "Foo")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/Foo/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })
})
