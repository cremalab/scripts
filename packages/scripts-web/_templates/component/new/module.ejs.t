---
to: src/components/<%= name %>/index.tsx
---
<% if(!withExample) { -%>
import React from "react"

export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
import React, { useState } from "react"

type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  const [count, setCount] = useState(0)

  return (
    <div style={styles.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} title="<%= name %>" />
    </div>
  )
}
<% } else { -%>
import React from "react"

type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  return (
    <div>
      <p><%= name %></p>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {},
})
<% } -%>
