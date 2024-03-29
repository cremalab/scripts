---
to: src/components/<%= name %>/<%= name %>.test.tsx
sh: npx eslint -c ./.eslintrc.js ./src/components/<%= name %> --ext .ts,.tsx --fix --quiet
---
import { <%= name %> } from "./<%= name %>"
<% if(!withExample) { -%>
import React from "react"

describe("<%= name %>", () => {
  it("is defined", () => expect(<<%= name %> />).toBeDefined())

  it.todo(`add meaningful tests 👍`)
})
<% } else if(useState) { -%>
import { render, fireEvent } from "@testing-library/react-native"
import React from "react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is <%= name %>!"

    // Act
    const { getByText } = render(<<%= name %> name="<%= name %>" />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
  
  it("has correct message before pressing", () => {
    // Arrange
    const message = "You clicked 0 times"

    // Act
    const { getByText } = render(<<%= name %> name="<%= name %>" />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })

  it("has correct message after pressing", () => {
    // Arrange
    const buttonText = "Click Me"
    const message = "You clicked 1 times"

    // Act
    const { getByText } = render(<<%= name %> name="<%= name %>" />)
    const button = getByText(buttonText)
    fireEvent.press(button)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } else { -%>
import { render } from "@testing-library/react-native"
import React from "react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is <%= name %>!"

    // Act
    const { getByText } = render(<<%= name %> name="<%= name %>" />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } -%>