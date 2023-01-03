
# `Learn React With Harshi` Series 
   Documenting my learning journey of Namaste React Live Course conducted by Akshay Saini
## Theory Assignment: `Chapter - 02 Igniting React App`

● What is `NPM`?
  `NPM` is one of the popular package manager/software registery for managing development and sharing utilities/packages. One more popular package manager is `yarn`.

  React app is powered by a lot of helper packages for bundling, optimizing, minifying which can be installed and tracked through npm.

  Simple Analaogy for better understanding :
  ` maven : java :: npm : javscript(react) `

● What is `Parcel/Webpack`? Why do we need it?
  Parcel and Wepack are popular Web application bundlers. Bundler comes with many powerful features to simplify the development of complex web applications with multiple dependecies that is production-ready and easily loadable in the browser.

● What is `.parcel-cache`
  In the current version of parcel (Parcel v2), the information about the project when it is built is stored in `.parcel-cache` (.cache in parcel v1). So, when the parcel tries to rebuild the project again, it doesn't have to re-parse or repeat the whole process. This helps in building the project faster. 

  You might notice this while building the project. For the first time, it might take longer (2s in my case) and for subsequent builds the time got reduced (200ms)

● What is `npx` ?
  `npx` is a npm package runner that is used to execute the command without installing the package (just use on the go). When you run a package using `npx`, it searches for the package in the local and global registry, and then it runs the package. If the package is not already installed, `npx` downloads the package files and installs the package, but it will only cache the files instead of saving it.

  Examples : 
  
  ```npx parcel index.html``` -> npx searches for `parcel` package in your environment and if not found, downloads it and then runs the command. (with index.html as entry point. you can remove index.html and put it in the source of package.json as well)
  
  ```npx create-react-app my-app``` -> npx seraches for `create-react-app` package in your environment, if not found, downlaods it and then creates my-app using create-react-app in the current project directory.
  
● What is difference between `dependencies` vs `devDependencies`
 
| dependencies        | devDependencies           | 
| -------------       |:-------------:             | 
| Packages that are required in the  prodouction environment      | Packages that are required in the development environment | 
| col 2 is            | centered      |  
| zebra stripes       | are neat      | 

● What is Tree Shaking?

● What is Hot Module Replacement?

● List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

● What is `.gitignore`? What should we add and not add into it?

● What is the difference between `package.json` and `package-lock.json`

● Why should I not modify `package-lock.json`?

● What is `node_modules` ? Is it a good idea to push that on git?

● What is the `dist` folder?

● What is `browserlists` Read about dif bundlers: vite, webpack, parcel

● Read about: ^ - caret and ~ - tilda

● Read about Script types in html (MDN Docs)