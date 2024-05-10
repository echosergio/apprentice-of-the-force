# App

## Installation

## Usage

## Storybook

Storybook is included in the project to help you develop the UI components in isolation. For simplicity, only components
that are exported from the  `src/components/core/ui` directory have stories.

To start the storybook, run the following command:

```bash
npm run storybook
```

## Testing

### Unit tests

UI components are tested with [Jest](https://jestjs.io/) and [React Testing
Library](https://testing-library.com/docs/react-testing-library/intro/). For simplicity, only components that are
exported from the `src/components/core/ui` directory have tests.

To run the tests, run the following command:

```bash
npm run test
```

Code coverage is generated automatically. To see the coverage report, run the
following command:

```bash
npm run test:ci
```
