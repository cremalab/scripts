---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% if(!withExample) { -%>
export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
import { useState } from "react"

type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
<% } else { -%>
type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  return (
    <div>
      <p><%= name %></p>
    </div>
  )
}
<% } -%>
