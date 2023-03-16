# Developer Guide

This developer guide outlines the core principles that you should keep in mind
in order to build effectively for the DLS.

## Decouple Business Logic from Render Logic

DLS components are maximally flexible and useful when they are decoupled from
business logic, API calls, and stylistic assumptions from a particular
application or use-case.

```jsx
// BAD:

const DlsComponent = () => {
  const { response } = fetch(...);
  const arrayOfItems = response.items;

  return (
    // do something with arrayOfItems
  );
};

const ProjectComponent = () => (
  <DlsComponent />
);
```

For that reason, DLS components should be as "dumb" as possible. Ideally, they
merely render based on a set of generic props that are passed in via the
downstream project.

```jsx
// GOOD:

const DlsComponent = ({ items }) => (
  // do something with items
);

const ProjectComponent = () => {
  const { response } = fetch(...);
  const arrayOfItems = response.items;

  return (
    <DlsComponent items={arrayOfItems} />
  );
};
```

## Be Technology Agnostic

DLS components should work equally well, regardless of the downstream project's
render strategy (e.g. SSR vs. Static), state management solution (e.g. React
Context vs. Redux), framework (e.g. Next.js vs. Create React App), routing
library (e.g. React Router vs. Next Routes), or network layer
(e.g. Apollo Client vs. Fetch).

Simply put, the DLS components should make 0 assumptions about the technologies
being used by the downstream project, aside from one special exception:
[Material UI](https://mui.com/).

## Material UI

The DLS is based on [Material UI](https://mui.com/) — one of the most
popular and robust component libraries that exists today in the React
ecosystem.

[Material UI](https://mui.com/) is integral to the way the DLS functions
(namely, the theme system), and thus is the only technological requirement that
is forced upon downstream projects.

In order to build effectively for the DLS, you really need to know
[Material UI](https://mui.com/). So if you're not already, become
familiar with the components (and their APIs) that are offered by the library.

(It is also important to understand how to style components using
[`styled`](https://mui.com/system/styled/), and how to do so in a
dynamic way using [themes](https://mui.com/customization/theming/). But
we'll touch on these items later in the guide!)

### Use Material UI Components Over Native DOM Elements

When writing components for the DLS, you should always prefer to use Material UI
components over native DOM elements.

* If you're building a list (`ul`, `ol`, `li`), use
[`List`](https://mui.com/api/list/) and
[`ListItem`](https://mui.com/api/list-item/).

* If you're writing text (`h1...h6`, `p`, `span`), use
[`Typography`](https://mui.com/api/typography/#typography-api).

* If you need a button or input field (`button`, `input`, `textarea`), use
[`Button`](https://mui.com/api/button/#button-api) and
[`TextField`](https://mui.com/api/text-field/#textfield-api).

Whenever you find yourself writing a native DOM element, stop and ask yourself:
"Is there a suitable alternative provided by the Material UI library?"
(hint: usually, there is!)

Why is this so important? Themes!

### Themes

The DLS makes full use of Material UI's
[theme system](https://mui.com/material-ui/customization/theming/). You can
think of a theme as a CSS stylesheet that gets injected into the browser
and dictates how the Material UI components that we use will look and feel.

The DLS currently supports
[several different themes](https://github.com/act-org/dls/tree/master/src/styles):

1. `"ACT"`: for ACT's "traditional" look and feel
2. `"ACT_ET"`: for ACT's "Emerging Technology" look and feel
3. `"ENCOURA_CLASSIC"`: for Encoura's "Classic" look and feel
4. `"ENCOURAGE"`: for the Encoura's "Encourage" look and feel

#### Decouple Style from Functionality

Themes allow us to separate the way a component functions from the way the
component looks and feels. For example, the
[`Button`](https://mui.com/material-ui/api/button/#button-api) component from
Material UI has certain core functionality, such as having a label, firing
events, and being enabled or disabled. This functionality must exist regardless
of the appearance of the button.

Using themes, we can take this core functionality and style it multiple
different ways:

![Style vs. Functionality](https://user-images.githubusercontent.com/4974609/151506765-5158b283-636c-42ba-b51a-ffb77996252a.png)

Themes are the keystone that enable us to share common functionality
(components) across different projects that have a completely different
look and feel. And this is why you should always prefer to use Material UI
primitives over native DOM elements — the theme flows throughout all Material
UI building blocks. This is not the case for native DOM elements.

## Creating a Custom Component

You can create a new DLS component by creating a folder (using ProperCase)
inside `src/components`. Each component folder should abide by the following
structure:

```sh
📂 components
 ┣ 📂 NewComponent
 ┃ ┣ index.stories.mdx           // storybook stories go here
 ┃ ┣ index.stories.template.tsx  // storybook template goes here
 ┃ ┣ index.test.tsx              // component tests go here
 ┃ ┣ index.tsx                   // component functionality goes here
 ┃ ┗ styles.ts                   // component custom styles go here
 ┗ index.ts
```

Ensure that all prop types and components are exported from the component's
`index.tsx` file:

```tsx
// src/components/NewComponent/index.tsx

// Ensure that the main prop type can be imported by the downstream project.
// To be consistent with the way Material UI names their prop types, the name
// of the main prop type should be the name of the component, followed
// by "Props".
export type NewComponentProps = { ... };

// Ensure that the main component can be imported by the downstream project
// using a named import statement.
export const NewComponent = () => { ... };

// Ensure that the main component can be imported by the downstream project
// using a default import statement.
export default NewComponent;
```

Also, don't forget to also export this component from `src/components/index.ts`:

```ts
// src/components/index.ts

...
export * from './NewComponent';
...
```

## Styling a Custom Component

When building a custom component, you can usually avoid the need to add custom
styles simply by using Material UI primitives over native DOM elements. The
Material UI components are designed to look great out of the box and to
compose well together, so definitely use them!

However, this does not completely eliminate the need for custom styling, and
thus at some point you'll need to add a few custom styles to your `styles.ts`
file using [`styled`](https://mui.com/system/styled/).

### Avoid Hard Coding

When it comes to defining custom styles, the number one rule is to avoid
hard coding values. When a style value is hard coded, we are making a strong
opinion that this style should be applied globally for this component across all
themes. Often times, this is not the right assumption to make.

```tsx
import { styled } from '@actinc/dls/helpers/material/styled';

// BAD: These style values are hard-coded.
export const StyledDiv = styled('div')({
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  padding: 16,
});

export const StyledSpan = styled('span')({
  fontFamily: 'Museo',
  fontSize: 10,
});

// This component is using native DOM elements when there are suitable
// counterparts in the Material UI library.
const NewComponent = () => (
  <StyledDiv>
    <StyledSpan>Hello World</StyledSpan>
  </StyledDiv>
);
```

Instead, create dynamic styles by tapping into the theme. This will allow this
component to look and feel differently across themes!

(To learn about the values that are available to you on the theme object,
see [here](https://mui.com/material-ui/customization/theming/) and
[here](https://mui.com/material-ui/customization/default-theme/).)

```tsx
import { styled } from '@actinc/dls/helpers/material/styled';

// BETTER: These style values are dynamic based on the theme.
export const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.caption.fontSize,
}));

// But this component is still using native DOM elements when there are suitable
// counterparts in the Material UI library.
const MyComponent = () => (
  <StyledDiv>
    <StyledSpan>Hello World</StyledSpan>
  </StyledDiv>
);
```

When our custom components are built using Material UI primitives, often times
the custom styles are no longer needed!

```tsx
import { styled } from '@actinc/dls/helpers/material/styled';

// BEST: No custom styles are needed because this component is built using
// Material UI primitives. We can handle everything using a few simple props!
const MyComponent = () => (
  <Paper elevation={1}>
    <Typography variant="caption">Hello World</Typography>
  </Paper>
);
```
