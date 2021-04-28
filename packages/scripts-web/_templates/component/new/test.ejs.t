---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import { <%= name %> } from "./<%= name %>"
<% if(!withExample) { -%>

describe("<%= name %>", () => {
  it.todo(`<%= name %> needs to be tested`)
})
<% } else if(useState) { -%>
import { render, fireEvent } from "@testing-library/react"

describe("<%= name %>", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "You clicked 0 times"

    // Act
    const { getByText } = render(<<%= name %> />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })

  it("has correct message after clicking", () => {
    // Arrange
    const buttonText = "Click Me"
    const message = "You clicked 1 times"

    // Act
    const { getByText } = render(<<%= name %> />)
    const button = getByText(buttonText)
    fireEvent.click(button)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } else { -%>
import { render } from "@testing-library/react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "<%= name %>"

    // Act
    const { getByText } = render(<<%= name %> />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } -%>