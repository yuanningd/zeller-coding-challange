# Code challenge for Frontend Developer

## Project Overview

This project is part of a coding challenge to build a React application that fetches and displays customer data using
GraphQL. The application includes a customer list with filtering capabilities based on user roles, styled using
styled-components.

![ui.png](ui.png)

## Installation

To install and set up the project, follow these steps:

1. Install the dependencies:

```bash
npm install
```

2. Generate the GraphQL types:

```bash
npm run compile
```

3. Start the development server:

```bash
npm start
```

This will start the application on http://localhost:3000.

## Test Coverage

![test_coverage.png](test_coverage.png)

## Decisions and Trade-offs

### Component API Design

I have extracted many reusable components under components/core. In real projects, these would typically be replaced by
a design system or a component library. When extracting these components, apart from adhering to a11y standards,
designing the API is an important consideration. The design of the API requires a trade-off between flexibility and
consistency.

For example, my Radio component's props interface RadioProps extends Omit<InputHTMLAttributes<HTMLLabelElement>, '
onChange'>, providing great flexibility:

```tsx
interface RadioProps extends Omit<InputHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  value?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
```

This design is common in public component libraries (like MUI) because the library designers do not know how users will
use their components. However, for a mature design system, this kind of API design can lead to unpredictable outcomes,
weakening consistency. In this scenario, a strict and opinionated API is often better. For example, my Radio Group
component's props are defined as follows:

```tsx
interface RadioGroupProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  buttonStyle?: 'outline' | 'solid';
  optionType?: 'default' | 'button';
  size?: 'large' | 'middle' | 'small';
  children: ReactNode;
}
```

(Some props are not yet implemented and are just for demonstrating the API design.)

The more mature a design system is, the more confident it might be in using a stricter API. However, in the early stages
of design, retaining flexibility can also be a good choice.

### Using Suspense with Apollo

Regarding the use of Suspense, Apollo's useSuspenseQuery can be effectively paired with Suspense to separate loading
logic from business logic. This approach aligns with the clean code principle of separating cross-cutting concerns,
similar to how error boundaries work.

In server components, Suspense can offer even more advantages. However, engineers should be cautious of potential issues
when adopting new technologies. For instance, useSuspenseQuery suspends while data is being fetched, which can cause a "
waterfall" effect if multiple components in a tree use it. Each query may depend on the previous one to complete before
it starts fetching. Luckily, This can be mitigated by fetching data with useBackgroundQuery and reading it with
useReadQuery.

## Things to Improve

### Minimize Magic Strings in CSS

The current implementation contains several magic strings in the CSS, such as color values and padding sizes. Using
magic strings can make the code harder to maintain and less consistent. Utilize a Design System and use a Theme Provider
to manage these values. By defining
constants for colors, spacing, and other styles, you can ensure consistency across the application and simplify future
changes.

### Improved Testing with MSW

The current testing strategy could be enhanced by using Mock Service Worker (MSW) instead of mockProvider. MSW allows
for API mocking at the network level, which means your tests can interact with mocked endpoints in a way that closely
mimics real network interactions. This approach not only makes the tests more reliable but also ensures that they are
closer to real-world scenarios.
