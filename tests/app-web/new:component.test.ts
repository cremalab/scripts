import { cleanup } from "../utils/cleanup"
import { generateNewComponent } from "../utils/generateNewComponent"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printFileContents } from "../utils/printFileContents"
import { printTreeOfNew } from "../utils/printTreeOfNew"

describe("new:component", () => {
  beforeAll(navigateToConsumer("app-web"))

  describe("without example code", () => {
    afterAll(cleanup("./src/components/A"))
    beforeAll(() =>
      generateNewComponent({ name: "A", withExample: false, withState: false }),
    )

    it("generates directory with expected files", async () => {
      const tree = printTreeOfNew("components", "A")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/A/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = printFileContents("./src/components/A/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/A/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/A/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example but without state", () => {
    afterAll(cleanup("./src/components/B"))
    beforeAll(() =>
      generateNewComponent({ name: "B", withExample: true, withState: false }),
    )

    it("generates component with expected files", async () => {
      const tree = printTreeOfNew("components", "B")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/B/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = printFileContents("./src/components/B/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/B/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/B/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example and with state", () => {
    afterAll(cleanup("./src/components/C"))
    beforeAll(() =>
      generateNewComponent({ name: "C", withExample: true, withState: true }),
    )

    it("generates component with expected files", async () => {
      const tree = printTreeOfNew("components", "C")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/C/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = printFileContents("./src/components/C/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/C/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = printFileContents("./src/components/C/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })
})
