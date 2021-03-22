# NextJS from Javascript to Typescript

What I did in this project was that, starting from a NextJS(JavaScript) project I modified it and I converted it into a  
Typescript project following the steps recommended in the NextJS(JavaScript) documentation.
Also Added Linting for a React Project, and make sure linting works along with Prettier formatter

## Credits

The original code come from a [Udemy Course](https://www.udemy.com/course/nextjs-react-the-complete-guide/) by Maximilian Schwarzmüller
Code available in Github repo: [nextjs-course-code](https://github.com/mschwarzmueller/nextjs-course-code)

## Steps to convert NextJS/JavaScript to NextJS/Typescript

  - Create `tsconfig.json` file in the project root
  ````bash
  touch tsconfig.json
  ````
  - Run the project, NextJS will guide you from there
  ````bash
  npm run dev
  ````
  can use *yarn* too  
  - Install typescript, @types/react, and @types/node

````bush
npm i -D typescript @types/react @types/node
````

This is optional but with the generated `tsconfig.json` file I changed the *strict* option to true

- Install *eslint-typescript* dependencies

````bash
npm i -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier  
eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
````

Write [.eslintrc.js](.eslintrc.js) and [.prettierrc.js](.prettierrc.js) files at root and then write the lint script at [package.json](package.json)

````json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint --ext js,jsx,ts,tsx --fix"
  },

````

## Typescriptify JS files

Change JS extension to .tsx for files containing JSX and extesnion .ts otherwise

### Run project

````bash
npm run dev
````
![run project](public/images/sc_nextjs_typescript_repo_Peek 2021-03-21 19-15.mp4)
