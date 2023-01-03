
# `Learn React With Harshi` Series 
   Documenting my learning journey of Namaste React Live Course conducted by Akshay Saini
## Theory Assignment: `Chapter - 02 Igniting React App`
### 1. What is `NPM`?
  `NPM` is one of the popular package manager/software registery for managing development and sharing utilities/packages. One more popular package manager is `yarn`.

  React app is powered by a lot of helper packages for bundling, optimizing, minifying which can be installed and tracked through npm.

  Simple Analaogy for better understanding :
  ` maven : java :: npm : javscript(react) `

### 2. What is `Parcel/Webpack`? Why do we need it?
  Parcel and Wepack are popular Web application bundlers. Bundler comes with many powerful features to simplify the development of complex web applications with multiple dependecies that is production-ready and easily loadable in the browser.

### 3. What is `.parcel-cache`
  In the current version of parcel (Parcel v2), the information about the project when it is built is stored in `.parcel-cache` (.cache in parcel v1). So, when the parcel tries to rebuild the project again, it doesn't have to re-parse or repeat the whole process. This helps in building the project faster. 

  You might notice this while building the project. For the first time, it might take longer (2s in my case) and for subsequent builds the time got reduced (200ms)

### 4. What is `npx` ?
  `npx` is a npm package runner that is used to execute the command without installing the package (just use on the go). When you run a package using `npx`, it searches for the package in the local and global registry, and then it runs the package. If the package is not already installed, `npx` downloads the package files and installs the package, but it will only cache the files instead of saving it.

  Examples : 
  
  ```npx parcel index.html``` -> npx searches for `parcel` package in your environment and if not found, downloads it and then runs the command. (with index.html as entry point. you can remove index.html and put it in the source of package.json as well)
  
  ```npx create-react-app my-app``` -> npx seraches for `create-react-app` package in your environment, if not found, downlaods it and then creates my-app using create-react-app in the current project directory.
  
### 5. What is difference between `dependencies` vs `devDependencies`
 
| dependencies                                                    | devDependencies           | 
| -------------                                                   |:-------------:             | 
| Packages that are required in the production environment      | Packages that are required only in the development environment, and not in prod/testing environment| 
| Command : ```npm install <package-name>```| Command : ```npm install -D <package-name>```or ```npm install --save-dev <package-name>``` |  
| Eg : react, react-dom, redux, express, nodemon, babel, mocha (testing)      | Eg: parcel     | 

### 6. What is Tree Shaking?
Tree shaking is a concept in JavaScript to describe the removal of dead code. Tree shaking is done by module bundler like parcel/webpack while bundling multiple javascript files into single files thus improving the web performance.
      
Steps to implement tree shaking : 
1. Declare ES6 import and exports for the modules
2. Bundler analyses the dependency tree during compilation phase.
3. Any uncode code is removed from the final build.

### 7. What is Hot Module Replacement?
The process of adding, removing or updating the modules while the application is running without full reload is called Hot Module Replacement. This feature is available in all module bundlers like Parcel, Webpack,etc.,There are many advantages of this features : 
1) The application state is retained which is usually lost during full reload
2) Insantly updates the browser when source css/js code is modified.

*Parcel* automatically does HMR while the application uses a framework (Eg:React, Vue). If no framework is used, then HMR can be opted using `module.hot` API 
       
*Webpack* needs some configuration to be done for using HMR 

### 8. List down your favourite superpowers of Parcel and describe any 3 of them in your own words.
  1.minification (removing indentation)
  2.image optimizations
    3.compression(renaming variables)
    4.cleaning our code
    5.super fast build
    6.dev and prod builds
    7.caching while development
    8.works with older version of browsers
    9.Https on dev as well npx parcel index.html (--https) 
    10.Consistent Hashing Algorithm
    11.Zero configuration
    12.Tree shaking - Removing unwanted code 
    13.API proxy
    
    My top favourites : 
    1.`Tree shaking` (described about it in q.no 6)
    2.`Caching` - Parcel caches everything it builds. f you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build
    3.`Image optimization` - Bzy default, Parcel includes lossless image optimization for JPEGs and PNGs in prod. mode, which reduces the size of images without affecting their quality. No configuration or query parameters are required to use. 

### 9. What is `.gitignore`? What should we add and not add into it?
    `.gitignore` file is a text file where we can mention the files/directories to ignore. That is, those files/directories will not be pushed into the git repositories. The great advantage of putiing them in *.gitignore* file is that those can be huge in size and those files can be generated with the help of package.json or package-lock.json file. It's very important to put `node_modules` in the .gitignore file since it contains a lot of packages which can be installed later by using package.json file. Other directories that should be placed in .gitignore file are `.parcel-cache` and dist. `package.json` and `package-lock.json` must not be put in `.gitignore` file.

### 10. What is the difference between `package.json` and `package-lock.json`
| package.json    | package-lock.json    | 
    | -------------   |:-------------:       |
    | This file is created as soon as `npm init` command is fired | This file is automatically generated when npm modifies either `node_modules` tree or `package.json` |
    | It contains metadata about the project like name, version, author, scripts and dependencies required by the project  | It contains dependencies required by the project with the exact version with which it was created |
    | It contains only direct dependencies | It contains nested/transitive dependencies (dependencies of dependencies) | 
    | This file must not be put in `.gitignore` file |  This file must also not be put in `.gitignore` file |
    | During deployment, there is no gurantee that if the version number of the dependencies with which the project was developed (package.json file has the least version of dependencies), will be reproduced and thus the project might not be working as intended | During deployment, the exact version of dependencies will be reproduced and thus the project will be working as intended | 
    | ^ or ~ can be used in version of dependencies in package.json | Only exact version of dependencies must be used in package-lock.json |
### 11. Why should I not modify `package-lock.json`?

### 12. What is `node_modules` ? Is it a good idea to push that on git?

### 13. What is the `dist` folder?

### 14. What is `browserlists`. Read about dif bundlers: vite, webpack, parcel

### 15. Read about: ^ - caret and ~ - tilda

### 16. Read about Script types in html (MDN Docs)