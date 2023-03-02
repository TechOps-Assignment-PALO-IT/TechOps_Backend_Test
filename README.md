# Typescript Express Template

An express template written in Typescript. It can be used to write web applications or APIs in Typescript.

## Getting Started

```
yarn
yarn dev
```

To run dev and build in production simultaneously, run the following command:

```
yarn dev:watch
```

## Make App Production Ready

1. Change the engines version in package.json  

For example:

```json
"engines": {
  "node": "16.13.0",
  "npm": "8.1.0",
  "yarn": "1.15.2"
}
```

2. Build Production JavaScript Files

```
yarn build
```
