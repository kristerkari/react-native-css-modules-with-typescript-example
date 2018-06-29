# React Native + CSS modules + Typescript

![Platform - Android, iOS and Web](https://img.shields.io/badge/platform-Android%20%7C%20iOS%20%7C%20Web-blue.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

A simple example app that shows how you can use CSS modules + Typescript with React Native and React (for browser).

Have a look at the [src](/src) folder to see code examples.

**Quick links:** **[Features](#example-app-features)** • **[Screenshots](#screenshots)** • **[Try it](#try-it)** • **[Documentation](https://github.com/kristerkari/react-native-css-modules#documentation)**

<a href="https://facebook.github.io/react-native/"><img src="images/react-native-logo.png" width="160"></a><img src="images/plus.svg" width="100"><a href="https://github.com/css-modules/css-modules"><img src="images/css-modules-logo.svg" width="170"></a><img src="images/plus.svg" width="100"><a href="https://www.typescriptlang.org/"><img src="images/typescript-logo.svg" width="170"></a>

## Example App features

#### React Native and Web

- :package: [Uses custom Typescript `@types/react-native` package with support for className property](https://github.com/kristerkari/react-native-types-for-css-modules).
- :package: Automatically generates Typescript typings for CSS files using Webpack's [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader).
- :tada: Allows `className` and `style` properties to be used on React Native elements such as `<Text>` or `<View>`.
- :fire: CSS Hot loading (live reloading).
- :ok_hand: Uses [Sass](src/Buttons.scss) and [CSS](src/ProfileCard.css) for styles
- :mag: [Custom stylelint config for React Native CSS modules](https://github.com/kristerkari/stylelint-config-react-native-css-modules)

#### React Native specific

- :package: Uses [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)
- :globe_with_meridians: [Platform specific file extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions), e.g. `styles.ios.css`, `styles.android.css`, `styles.native.css`.

#### Web specific

- :package: Uses [Webpack](https://webpack.js.org/) + [CSS modules](https://github.com/css-modules/css-modules).
- :wrench: Uses [React Native for Web](https://github.com/necolas/react-native-web) to make most React Native elements work in the browser.

## Supported Browsers

- Mobile: Android Stock browser (4.4-5.x), Android Chrome, iOS Safari 8+
- Desktop: Firefox, Chrome, Safari

## Try it

### Step 1: Install depencies to run React Native

Make sure that you have `react-native-cli` installed (`npm install -g react-native-cli`) and [XCode](https://developer.apple.com/xcode/) (for iOS development) / [Android Studio](https://developer.android.com/studio/index.html) (for Android development) installed and working.

- Go to "Building Projects with Native Code" tab and follow the guide: https://facebook.github.io/react-native/docs/getting-started.html

### Step 2: Clone the repo and move to project

```sh
git clone git@github.com:kristerkari/react-native-css-modules-with-typescript-example.git
cd react-native-css-modules-with-typescript-example
```

### Step 3: Install example app's dependencies

```sh
npm install
```

### Step 4: Run React Native packager

You can open a new terminal tab to run React Native's packager.

```sh
npm start
```

### Step 5: Run app on Android, iOS or Web

First make sure that your Android emulator or iOS simulator is working, then:

```sh
npm run ios
```

or

```sh
npm run android
```

or

```sh
npm run web
```

Web app can be accessed by opening `http://localhost:8080` in a browser.

or if you use Yarn:

```sh
yarn ios
```

## Screenshots

**iOS - Android - Web**

<img src="screenshots/ios.png" width="33.3333%"><img src="screenshots/android.png" width="33.3333%"><img src="screenshots/web3.png" width="33.3333%">
