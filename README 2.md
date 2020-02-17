# frontend

# Create React App

Create React apps with no build configuration.

- **One Dependency:** There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

- **Zero Configuration:** There are no configuration files or command line options. Configuring both development and production builds is handled for you so you can focus on writing code.

- **No Lock-In:** You can “graduate” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up where we left off.

## Installation

A new blessed “getting started” experience for building SPAs in React that we can actually ship.

## Goal

Make it easy to get started with React.

## Why This Won't Fail

- We hide a small curated set of tools behind a CLI with zero configuration. The scope is very limited: we intentionally offer the minimal tools we think are useful, and we don't allow any addons or feature creep.
- We let you exit the "getting started" experience at any time. A single CLI command removes the dependency on React CLI and replaces it with real Webpack/ESLint/Babel configs and commands. You are on your own now.
- We promote the hell out of it on in the docs. This is built by the team so people trust it.

<<<<<<< HEAD

## Philosophy

### Zero Configuration

=======
It will create a directory called `my-app` inside the current folder.

Inside that directory, it will generate the initial project structure and install the transient dependencies.  
Once the installation is done, you can run some commands inside the project folder!

> > > > > > > Wordsmith

This is a hard constraint. We are committed to having zero configuration in the project.

If you use `create-react-app`, you should have `src/index.js`, your bundle will be compiled to `build/index.html`, and it will run at http://localhost:3000 in development. You can’t change this.

It will have Babel, ESLint, Autprefixr and some other stuff we think it useful for getting started, but you won’t be exposed to it, and won’t be able to configure it. We curate the setup completely.

### Exit Strategy

You can say goodbye to `create-react-app` at any time. Type `npm run export-scripts`, and it will create the configs and replace the generated `scripts` in `package.json` with the equivalent "real thing" (e.g. `webpack-dev-server` and `webpack` calls). You're on your own now.

This is why "zero configuration" can work as a constraint. We can punt on many real-world features (code splitting, Google Analytics, custom Babel plugins) because we let you leave the "getting started" experience any time.

This makes Create React App a feasible way to get started with a "real" React project without learning the tools. Once you export, you can't go back.

### One Dependency

<<<<<<< HEAD
<<<<<<< HEAD
It works like `react-native-cli`. There is just one thing in your `devDependencies`, and it hides Babel, ESLint, and all the other stuff. But as I wrote above, you can `react-cli export` at any time.
=======
It works like `react-native-cli`. There is just one thing in your `devDependencies`, and it hides Babel, ESLint, and all the other stuff. But as I wrote above, you can `npm run exports-scripts` at any time.

## How to use

Install once:

```bash
npm install -g create-react-app
```

# When creating a new app:

If you aren’t satisfied with the build tool and configuration choices, you can “graduate” at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transient dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `graduate` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever graduate. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obliged to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

> > > > > > > Wordsmith

<<<<<<< HEAD
```
create-react-app my-app
cd my-app
npm start
```

Done!

If you want to build it for production

<<<<<<< HEAD

```
npm run build
```

and if you want to tweak it

```
npm run exports-scripts # Beware, this is a one-way operation, can't go back!
```

## How to develop it

You first need to
=======
The tools used by Create React App are subject to change.  
Currently it is a thin layer on top of many amazing community projects, such as:

* [webpack](https://webpack.github.io/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Babel](http://babeljs.io/) with [preset-es2015](https://www.npmjs.com/package/babel-preset-es2015), [preset-es2016](https://www.npmjs.com/package/babel-preset-es2016) and [transform-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
* [style-loader](https://github.com/webpack/style-loader)
* [ESLint](http://eslint.org/)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* and more.
>>>>>>> Wordsmith

```
npm install
```

=======
All of them are transient dependencies of the provided npm package so you don’t need to worry about upgrading them or resolving conflicts.

## Limitations

Our goal is to provide a tool that bootstraps a minimal production-ready React project with a great developer experience and sane defaults.

This is why many features such as server rendering, experimental Babel plugins, or custom ESLint configuration, are not supported. It is hard to add features that would work for everyone without adding configuration. Having no configuration is an explicit design decision of this project. Currently, even running tests is not supported, although this limitation is temporary.

If you want an advanced feature, you can still use this tool, and later run `npm run graduate` (but then there’s no going back!)

## You Don’t Have to Use This

This is not the “one true way” to create React apps. You don’t need to port your project to use this if you’re happy with your setup.

Historically it has been easy to gradually adopt React, but many people create new single-page React apps from scratch every day. We’ve heard [loud and clear](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) that this process can be error-prone and tedious, especially if this is your first JavaScript build stack.

This project is an attempt to figure out a good way to start developing React apps. We don’t claim it’s the best possible stack, and there are intentional limitations, but we think you can ship a production app with it, and with your help we’ll make it better over time.

> > > > > > > Wordsmith

Once it is done, you can modify any file locally and do

<<<<<<< HEAD
```
npm start
npm run build
```
=======
Clone the repo and run `npm install` in the root and the `global-cli` folder.
>>>>>>> Fix contributing instructions

If you want to try out the end to end flow with the global cli

```
npm run create-react-app my-app
cd my-app
npm run
```

<<<<<<< HEAD
> > > > > > > Tweak README with the new naming + add instructions
=======
and then run `npm start` or `npm run build`.

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

* [enclave](https://github.com/eanplatter/enclave) by [@eanplatter](https://github.com/eanplatter)
* [nwb](https://github.com/insin/nwb) by [@insin](https://github.com/insin)
* [react-boilerplate](https://github.com/mxstbr/react-boilerplate) by [@mxstbr](https://github.com/mxstbr)
>>>>>>> Add Acknowledgments to README
