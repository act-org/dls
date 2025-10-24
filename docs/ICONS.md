# Icon Strategy

This guide explains how to integrate standard as well as custom icons into
your app.

## Option 1: Find and import from `@mui/icons-material`

The [`@mui/icons-material`](https://www.npmjs.com/package/@mui/icons-material)
library is a collection of icons managed by Google and the MUI team. You can
search for a specific icon to use on
[mui.com](https://mui.com/material-ui/material-icons/). Once you've found
the perfect icon, you can use it in your project like so:

```jsx
// Import the needed icon(s) directly, to avoid bundle size bloat.
import PollIcon from '@mui/icons-material/Poll';

...

const MyComponent = () => (
  ...
  <PollIcon />
  ...
);
```

## Option 2: Find and import from `mdi-material-ui`

If `@mui/icons-material` doesn't provide the icon you're looking for, as a
second line of defense, you can search for icons in the
[`mdi-material-ui`](https://www.npmjs.com/package/mdi-material-ui) library.
This is an expansive list of icons that are managed by the material community.
You can search for a specific icon to use on
[materialdesignicons.com](https://materialdesignicons.com). Once you've found
the perfect icon, you can use it in your project like so:

```jsx
// Import the needed icon(s) directly, to avoid bundle size bloat.
import PollBox from 'mdi-material-ui/PollBox';

...

const MyComponent = () => (
  ...
  <PollBox />
  ...
);
```

## Option 3: Create a custom icon

When all else fails, you can create a custom icon using the `SvgIcon` component
from Material UI. Here's an example:

```jsx
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export const CustomIcon: React.FC<SvgIconProps> = (props: SvgIconProps): React.ReactElement<SvgIconProps> => (
  <SvgIcon style={{ fill: 'none' }} viewBox="0 0 24 24" {...props}>
    <path d="<insert-svg-data-here>" />
  </SvgIcon>
);

export default CustomIcon;
```
