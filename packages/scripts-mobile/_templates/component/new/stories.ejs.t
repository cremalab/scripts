---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { storiesOf } from "@storybook/react-native"
import React from "react"
import { <%= name %> } from "./<%= name %>"

storiesOf("<%= name %>", module).add("example", () => <<%= name %> />)
