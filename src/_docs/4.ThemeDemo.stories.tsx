/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable filenames/match-exported */

import MailIcon from '@actinc/dls/icons/Mailbox';
import Menu from '@actinc/dls/icons/Menu';
import AddIcon from '@actinc/dls/icons/Plus';
import {
  AppBar,
  AppBarProps,
  Autocomplete,
  AutocompleteProps,
  Badge,
  BadgeProps,
  Box,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CheckboxProps,
  Chip,
  ChipProps,
  Fab,
  FabProps,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioProps,
  Rating,
  RatingProps,
  Switch,
  SwitchProps,
  TextField,
  TextFieldProps,
  Toolbar,
  Typography,
  TypographyProps,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Meta, StoryFn } from '@storybook/react';
import { sortBy } from 'lodash';
import { ReactElement } from 'react';

import {
  FilmType,
  topFilms,
} from '@actinc/dls/components/_materialUi/Autocomplete/internal';

type Demo<ComponentProps> = {
  flex?: number;
  props: ComponentProps[];
  title: string;
  render: (props: ComponentProps) => ReactElement<ComponentProps>;
};

const demos = [
  {
    props: [
      { color: 'primary', variant: 'text' },
      { color: 'primary', variant: 'contained' },
      { color: 'primary', variant: 'outlined' },
      { color: 'secondary', variant: 'text' },
      { color: 'secondary', variant: 'contained' },
      { color: 'secondary', variant: 'outlined' },
      { color: 'success', variant: 'text' },
      { color: 'success', variant: 'contained' },
      { color: 'success', variant: 'outlined' },
      { color: 'error', variant: 'text' },
      { color: 'error', variant: 'contained' },
      { color: 'error', variant: 'outlined' },
      { color: 'info', variant: 'text' },
      { color: 'info', variant: 'contained' },
      { color: 'info', variant: 'outlined' },
      { color: 'warning', variant: 'text' },
      { color: 'warning', variant: 'contained' },
      { color: 'warning', variant: 'outlined' },
    ],
    render: props => (
      <Button sx={{ mx: '.5em' }} {...props}>
        Label
      </Button>
    ),
    title: 'Buttons',
  } as Demo<ButtonProps>,
  {
    props: [
      { color: 'primary', variant: 'text' },
      { color: 'primary', variant: 'contained' },
      { color: 'primary', variant: 'outlined' },
      { color: 'secondary', variant: 'text' },
      { color: 'secondary', variant: 'contained' },
      { color: 'secondary', variant: 'outlined' },
    ],
    render: props => (
      <ButtonGroup sx={{ mx: '.5em' }} {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ),
    title: 'Button Groups',
  } as Demo<ButtonGroupProps>,
  {
    props: [
      { color: 'primary', defaultChecked: true },
      { color: 'primary' },
      { color: 'primary', disabled: true },
      { checked: true, color: 'primary', disabled: true },
      { color: 'secondary', defaultChecked: true },
      { color: 'secondary' },
      { color: 'secondary', disabled: true },
      { checked: true, color: 'secondary', disabled: true },
      { color: 'default', defaultChecked: true },
      { color: 'default' },
      { color: 'default', disabled: true },
      { checked: true, color: 'default', disabled: true },
    ],
    render: props => (
      <FormControlLabel control={<Checkbox {...props} />} label="Label" />
    ),
    title: 'Checkboxes',
  } as Demo<CheckboxProps>,
  {
    props: [
      { color: 'primary', defaultChecked: true },
      { color: 'primary' },
      { color: 'primary', disabled: true },
      { checked: true, color: 'primary', disabled: true },
      { color: 'secondary', defaultChecked: true },
      { color: 'secondary' },
      { color: 'secondary', disabled: true },
      { checked: true, color: 'secondary', disabled: true },
      { color: 'default', defaultChecked: true },
      { color: 'default' },
      { color: 'default', disabled: true },
      { checked: true, color: 'default', disabled: true },
    ],
    render: props => (
      <FormControlLabel control={<Radio {...props} />} label="Label" />
    ),
    title: 'Radios',
  } as Demo<RadioProps>,
  {
    flex: 1,
    props: [
      {
        disablePortal: true,
        fullWidth: true,
        multiple: false,
        options: topFilms,
        renderInput: (params): ReactElement<any> => (
          <TextField {...params} label="Movie" />
        ),
      },
    ],
    render: props => <Autocomplete sx={{ mx: '.5em' }} {...props} />,
    title: 'Autocomplete',
  } as Demo<AutocompleteProps<FilmType, false, false, false>>,
  {
    props: [
      {
        name: 'test',
        readOnly: true,
        value: 1,
      },
      {
        name: 'test',
        readOnly: true,
        value: 2,
      },
      {
        name: 'test',
        readOnly: true,
        value: 3,
      },
      {
        name: 'test',
        readOnly: true,
        value: 4,
      },
      {
        name: 'test',
        readOnly: true,
        value: 5,
      },
    ],
    render: props => <Rating sx={{ mx: '.5em' }} {...props} />,
    title: 'Rating',
  } as Demo<RatingProps>,
  {
    props: [
      { color: 'primary', size: 'small' },
      { color: 'primary', size: 'medium' },
      { color: 'primary', size: 'large' },
      { color: 'secondary', size: 'small' },
      { color: 'secondary', size: 'medium' },
      { color: 'secondary', size: 'large' },
    ],
    render: props => (
      <Fab sx={{ mx: '.5em' }} {...props}>
        <AddIcon />
      </Fab>
    ),
    title: 'Floating Action Buttons',
  } as Demo<FabProps>,
  {
    props: [
      { badgeContent: 5, color: 'primary' },
      { badgeContent: 5, color: 'secondary' },
      { badgeContent: 5, color: 'default' },
      { badgeContent: 5, color: 'error' },
      { badgeContent: 5, color: 'info' },
      { badgeContent: 5, color: 'success' },
      { badgeContent: 5, color: 'warning' },
    ],
    render: props => (
      <Badge {...props}>
        <MailIcon />
      </Badge>
    ),
    title: 'Badges',
  } as Demo<BadgeProps>,
  {
    props: [
      { color: 'primary', label: 'Chip' },
      { color: 'secondary', label: 'Chip' },
      { color: 'success', label: 'Chip' },
      { color: 'error', label: 'Chip' },
      { color: 'info', label: 'Chip' },
      { color: 'warning', label: 'Chip' },
    ],
    render: props => <Chip {...props} />,
    title: 'Chips',
  } as Demo<ChipProps>,
  {
    flex: 1,
    props: [
      {
        color: 'primary',
        fullWidth: true,
        label: 'TextField Label',
        placeholder: 'Placeholder text',
      },
    ],
    render: props => <TextField {...props} />,
    title: 'TextField',
  } as Demo<TextFieldProps>,
  {
    flex: 1,
    props: [
      {
        color: 'primary',
        fullWidth: true,
        label: 'Select Label',
        placeholder: 'Placeholder text',
        select: true,
      },
    ],
    render: props => (
      <TextField {...props}>
        <MenuItem value="1">Option 1</MenuItem>
        <MenuItem value="1">Option 2</MenuItem>
        <MenuItem value="1">Option 3</MenuItem>
      </TextField>
    ),
    title: 'Select',
  } as Demo<TextFieldProps>,
  {
    flex: 1,
    props: [{}],
    render: props => (
      <AppBar position="static" {...props}>
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            size="large"
          >
            <Menu />
          </IconButton>

          <Typography style={{ marginLeft: 8 }} variant="h6">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    ),
    title: 'App Bar',
  } as Demo<AppBarProps>,
  {
    props: [
      { color: 'primary' },
      { checked: true, color: 'primary' },
      { color: 'secondary' },
      { checked: true, color: 'secondary' },
      { color: 'default' },
      { checked: true, color: 'default' },
    ],
    render: props => <Switch {...props} />,
    title: 'Switch',
  } as Demo<SwitchProps>,
  {
    flex: 10,
    props: [
      { variant: 'h1' },
      { variant: 'h2' },
      { variant: 'h3' },
      { variant: 'h4' },
      { variant: 'h5' },
      { variant: 'h6' },
      { variant: 'body1' },
      { variant: 'body2' },
      { variant: 'button' },
      { variant: 'caption' },
      { variant: 'overline' },
      { variant: 'subtitle1' },
      { variant: 'subtitle2' },
    ],
    render: props => <Typography {...props}>lorem ipsum</Typography>,
    title: 'Typography',
  } as Demo<TypographyProps>,
];

const meta = {
  argTypes: {},
  component: Box,
  title: 'DLS / Theme Demo',
} as Meta<typeof Box>;

export default meta;

export const Demo: StoryFn = () => {
  return (
    <Box>
      <Typography variant="h2">Theme Preview</Typography>
      <Typography variant="caption">
        The following is a preview of many of the components inside of the DLS.
        This page is useful to get a feel for the look of the theme as well as
        for theme designers to use to quickly see the changes.
      </Typography>
      <Grid container rowSpacing=".8em">
        {sortBy(demos, 'title').map(demo => (
          <Grid key={Math.random()} xs={12}>
            <Card>
              <CardHeader title={demo.title} />
              <CardContent
                sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
              >
                {demo.props.map(props => (
                  <Box key={Math.random()} sx={{ flex: demo.flex, mx: '.5em' }}>
                    {demo.render(props as any)}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
