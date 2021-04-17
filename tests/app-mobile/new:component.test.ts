import spawn from "cross-spawn"
import { cleanup } from "../utils/cleanup"
import { generateNewComponent } from "../utils/generateNewComponent"
import { navigateToConsumer } from "../utils/navigateToConsumer"
import { printFileContents } from "../utils/printFileContents"
import { printTreeOfNew } from "../utils/printTreeOfNew"

beforeAll(navigateToConsumer("app-mobile"))

describe("new:component", () => {
  // Component imports are added here and must be removed after the tests
  afterAll(() => spawn.sync("git", ["checkout", "./src/stories/index.tsx"], {
    stdio: "inherit",
  }))

  describe("without example code", () => {
    beforeAll(() =>
      generateNewComponent({ name: "A", withExample: false, withState: false }),
    )
    
    afterAll(() => cleanup("./src/components/A"))

    it("generates directory with expected files", async () => {
      const tree = printTreeOfNew("components", "A")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/A/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = await printFileContents("./src/components/A/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/A/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/A/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example but without state", () => {
    beforeAll(() =>
      generateNewComponent({ name: "B", withExample: true, withState: false }),
    )

    afterAll(() => cleanup("./src/components/B"))
    
    it("generates component with expected files", async () => {
      const tree = printTreeOfNew("components", "B")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/B/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = await printFileContents("./src/components/B/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/B/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/B/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })

  describe("with example and with state", () => {
    beforeAll(() =>
      generateNewComponent({ name: "C", withExample: true, withState: true }),
    )
    
    afterAll(() => cleanup("./src/components/C"))

    it("generates component with expected files", async () => {
      const tree = printTreeOfNew("components", "C")
      expect(tree).toMatchSnapshot()
    })

    it("generates directory with expected `index.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/C/index.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `README.md` contents", async () => {
      const fileContents = await printFileContents("./src/components/C/README.md")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `stories.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/C/stories.tsx")
      expect(fileContents).toMatchSnapshot()
    })

    it("generates directory with expected `test.tsx` contents", async () => {
      const fileContents = await printFileContents("./src/components/C/test.tsx")
      expect(fileContents).toMatchSnapshot()
    })
  })
})
