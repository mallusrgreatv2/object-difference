# Object Difference

This package helps you get all (and only) the differences between two objects.

```ts
import { objectDifference } from "@mallusrgreat/object-difference";
// or
const { objectDifference } = require("@mallusrgreat/object-difference");

console.log(
  objectDifference(
    {
      test: "abc",
      one: 1,
      three: 4,
    },
    {
      test: "123",
      one: 1,
      three: 3,
    }
  )
);
```

Logs:

```json
{
  "test": {
    "old": "abc",
    "new": "123"
  },
  "three": {
    "old": 4,
    "new": 3
  }
}
```
