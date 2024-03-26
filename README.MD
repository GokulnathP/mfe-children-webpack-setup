# Children MFE Boilerplate code

## Local Environment setup

1. Make sure your local npm version matches with version in `.nvmrc`
2. Install all dependencies
    ```shell
    yarn install
    ```
3. Testing commands
    ```shell
   # To run all tests
   yarn test

   # To run tests in watch mode
   yarn test:watch

   # To generate coverage
   yarn test:coverage
   ```
4. Linting commands
    ```shell
    # To run eslint with prettier
   yarn lint

   # To fix linting issues
   yarn lint:fix

   # To find stylelint issues
   yarn stylelint
    ```
5. To start the app
    ```shell
    # To run in development(standalone) mode
   yarn start

   # To run in micro-frontend mode
   yarn start:mfe
    ```
6. To build the app
    ```shell
    yarn build
    ```
