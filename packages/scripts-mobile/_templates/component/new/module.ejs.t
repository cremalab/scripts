---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% if(!withExample) { -%>
import React from "react"

export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
import React, { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Hi, my name is {name}!</Text>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click Me" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
<% } else { -%>
import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  return (
    <View style={styles.container}>
      <Text>Hi, my name is {name}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
<% } -%>
