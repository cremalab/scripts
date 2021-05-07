import path from "path"

export const navigateToConsumer = (
  consumer: "app-web" | "app-mobile",
) => (): void =>
  process.chdir(path.resolve(__dirname, `../../consumers/${consumer}`))
