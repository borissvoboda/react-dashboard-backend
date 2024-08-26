# 1. Development

## 1.1. Initialize node project

In a root folder of your project run:
`pnpm init`

## 1.2. Initialize TypeScript

`tsc --init`

## 1.3. Install express, body parser, types

pnpm install --save express body-parser
pnpm install --save-dev @types/node @types/express

## 1.4. Update tsconfig.json

Set rootdir and outDir according to your preferences.

# 2. Compile and run in dev

## 2.1. Compile

Compile your .ts files using "tsc" command.

## 2.2. Watch in dev

In development you can watch the changes in compiled .js files with
node --watch dist/server.js // add your path and root file
