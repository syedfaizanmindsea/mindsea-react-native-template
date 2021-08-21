# Accountabull

A social network where people hold each other

## Setting up React Native

1.  NVM

    - Used to manage multiple active node versions, good for using across multiple projects.
    - https://github.com/creationix/nvm#installation

2.  Homebrew

    - Used to install local **tools** that are needed globally.
    - https://brew.sh

3.  NPM

    - Used to install local **packages** that are needed globally (or locally).
    - NPM: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (best to install NVM prior to NPM).
      - `nvm install --latest-npm`

4.  Node

    - This should be installed by NVM, when installing NPM.
    - Verify by running `node -v`
    - https://nodejs.org/en/download/package-manager/#nvm
    - Node can alternatively be installed via Homebrew, by running `brew install node`.

5.  React Native CLI

    - Used to start the local server, build your React Native app, among other essential React Native things.
    - This enables you to run a React Native app completely free of an IDE, but IDE's also need this installed too (so don't skip this if you use one).
    - https://facebook.github.io/react-native/docs/understanding-cli
    - `npm install -g react-native-cli`

6.  Rbenv

    - Used to install ruby versions while guaranteeing that dev matches production.
    - Ruby is needed to manage Cocoapods (dependencies on iOS).
    - https://github.com/rbenv/rbenv

7.  Java

    - Version 1.7 or higher is needed for Android.
    - Check by running `java -version`
    - Install the latest from here: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

8.  Git
    - by default git will be case insensitive, which we do not want
    - git config cannot be easily version controlled, so....
    - Please run `git config core.ignorecase false`

## IDE Usage

**VS Code** is recommended for our React Native development, as its linting and formatting plugins are relied upon for both our coding style, and to minimize TypeScript complilation errors. However, **Android Studio** and **Xcode** are also required

### Command Line usage

- Use `npm run {platform}`, so using `npm run ios` will run the iOS app

### VS Code

- Download from here: https://code.visualstudio.com
- Open VS Code, navigate to the Extensions tab, and install the following plugins:
  - `ESLint`
  - `Prettier`
  - `React Native Tools`
  - `Jest`
  - `i18n ally`

### Android Studio

- Download from here: https://developer.android.com/studio
- Open Android Studio, and set up an SDK and related tools with the SDK Manager: https://developer.android.com/studio/intro/update#sdk-manager
- Create a new Android Emulator (Tools > AVD Manager)

### Xcode

- Download from here: https://developer.apple.com/xcode/
- Install the command line tools for your version of Xcode from here: https://developer.apple.com/download/more/

## Running the app on Android and iOS

Android Studio comes with emulators that can be installed via the AVD Manager, and Xcode comes with built in simulators. You can run either by selecting the _Debug_ tab in VS Code and selecting a device from the dropdown list.

**Troubleshooting:**

- Make sure to run either `npm install` in the project's root directory before running the project. The project dependencies _are not_ committed to the repository, so this step is necessary.
- For Android, make sure to have set up an emulator with a supported SDK version, using the AVD Manager: https://developer.android.com/studio/run/managing-avds
  - It may also help if you've created a fresh to Android project (it can be empty) to run the emulator before attempting to run the project.

## E2E UI Testing

- We use [Detox](https://github.com/wix/Detox#about) for gray box end-to-end testing.
- Use their [getting started guide](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies) to setup your environment.
- We put e2e tests in /tests/e2e/

## Unit/Integration Testing

- We use [native-testing-library](native-testing-library.com) for unit and integration testing of components
- We use the [Jest VSCode extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) to automatically run tests as we edit them
- Read our [guidelines](https://github.com/livebungalow/bungalow-mobile/wiki/Unit-and-integration-testing) for writting tests

### TypeScript

We use TypeScript in 4 different ways, and each way will utilise the same `FormValues` interface, eg.

1. FormValues interface

```
interface FormValues {
   paymentAmount: string;
   name: string;
   email: string;
}
```

Note - even though `paymentAmount` may end up being a numerical value, it is easier to manipulate as a `string` when working with the form

2. Yup Validation

```
const validationSchema = yup.object().shape<FormValues>({
...validation here..
});
```

3. useForm instantiation

```
const { dynamic object } = useForm<FormValues>({ static object });
```

- [Typescript Usage](https://react-hook-form.com/get-started#TypeScript)

### Validation with yup

Yup is a flexible validation library that works well with react-hook-form. As mentioned before, it is preferable to use `string` as opposed to `number` for numerical values. Here's an example

```

  const fieldValidation = yup
    .string()
    .max(
      MAX_FIELD_LENGTH,
      i18n.t('common_validation_max_length', {
        length: MAX_FIELD_LENGTH,
      })
    )
    .required(i18n.t('common_validation_required'));

  const validationSchema = yup.object().shape<FormValues>({
    firstDepositAmount: fieldValidation,
    secondDepositAmount: fieldValidation,
  });
```

- [Yup docs](https://github.com/jquense/yup)
