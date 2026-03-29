# reuse-my-component

A React TypeScript component library ready to publish on npm.

## Install

```bash
npm install reuse-my-component
```

## Usage

```tsx
import {
  Button,
  Input,
  Badge,
  Alert,
  Card,
  Toggle,
  Avatar,
} from "reuse-my-component";

function App() {
  return (
    <>
      <Button variant="primary" onClick={() => alert("clicked")}>
        Click me
      </Button>
      <Input label="Email" placeholder="you@example.com" />
      <Badge variant="success">Active</Badge>
      <Alert variant="info" title="Note">
        Something happened.
      </Alert>
      <Card title="Hello">Card content here.</Card>
      <Toggle
        checked={true}
        onChange={(v) => console.log(v)}
        label="Dark mode"
      />
      <Avatar name="Jane Doe" size="md" />
    </>
  );
}
```

## Components

| Component | Props                                                     |
| --------- | --------------------------------------------------------- |
| `Button`  | `variant`, `size`, `loading`, `disabled`, `onClick`       |
| `Input`   | `label`, `hint`, `error`, `disabled`, `value`, `onChange` |
| `Badge`   | `variant`                                                 |
| `Alert`   | `variant`, `title`, `onClose`                             |
| `Card`    | `title`, `footer`, `padding`                              |
| `Toggle`  | `checked`, `onChange`, `label`, `disabled`                |
| `Avatar`  | `name`, `src`, `size`, `color`                            |

## Development

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Watch mode
npm run dev

# Type check
npm run typecheck
```

## Publishing to npm

```bash
# 1. Login to npm
npm login

# 2. Make sure package name is unique in package.json
#    Change "name": "my-ui-lib" to something unique

# 3. Build + publish
npm publish --access public
```

## Folder structure

```


## License

MIT
```
