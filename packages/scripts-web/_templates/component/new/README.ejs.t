---
to: src/components/<%= name %>/README.md
---
# `<<%= name %> />`

DESCRIPTION_HERE

## Directory Structure

- `<%= name %>.stories.tsx`: Component stories (`npm run test:playground`)
- `<%= name %>.test.tsx`: Component tests (`npm run test:unit`)
- `<%= name %>.tsx`: Component code
- `index.ts`: Component export
- `README.md`: Component documentation (hey, that's me!)

## Example

![<%= name %>](../../../.loki/reference/chrome_<%= name %>_example.png)

> Image location: [`.loki/reference/chrome_<%= name %>_example.png`](../../../.loki/reference/chrome_<%= name %>_example.png)
> 
> To regenerate: 
> 1. `npm run test:playground` (skip if running)
> 1. `npm run test:visual:update -- --storiesFilter="^<%= name %> example\$"`