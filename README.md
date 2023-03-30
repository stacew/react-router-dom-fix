# react-router-dom-fix

- My personal react-router-dom adapter, only a few available.

- I did this because I didn't want the navigate function in the GNB menu to keep re-rendering when the URL sub-address changed.
- If the address changes, `useNavigate()` will not invoke the re-render.

### `Warning: I haven't had any problems yet, but you have to be careful. `

- In problematic situations, you can use `useNavigate()` instead of `useNavigatefix()`.

[![NPM](https://img.shields.io/npm/v/react-router-dom-fix.svg)](https://www.npmjs.com/package/react-router-dom-fix) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-router-dom-fix
```

### Usage

```ts
const navigate = useNavigateFix() // or useNavigate();
```

### export

```ts
export {
  BrowserRouterFix,
  useNavigateFix,

  Routes,
  Route,

  useLocation
  useNavigate,
}
```

## License

MIT © [stacew](https://github.com/stacew)
