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
    title: 'Buttons',
    props: [
      { variant: 'text', color: 'primary' },
      { variant: 'contained', color: 'primary' },
      { variant: 'outlined', color: 'primary' },
      { variant: 'text', color: 'secondary' },
      { variant: 'contained', color: 'secondary' },
      { variant: 'outlined', color: 'secondary' },
      { variant: 'text', color: 'success' },
      { variant: 'contained', color: 'success' },
      { variant: 'outlined', color: 'success' },
      { variant: 'text', color: 'error' },
      { variant: 'contained', color: 'error' },
      { variant: 'outlined', color: 'error' },
      { variant: 'text', color: 'info' },
      { variant: 'contained', color: 'info' },
      { variant: 'outlined', color: 'info' },
      { variant: 'text', color: 'warning' },
      { variant: 'contained', color: 'warning' },
      { variant: 'outlined', color: 'warning' },
    ],
    render: props => (
      <Button sx={{ mx: '.5em' }} {...props}>
        Label
      </Button>
    ),
  } as Demo<ButtonProps>,
  {
    title: 'Button Groups',
    props: [
      { variant: 'text', color: 'primary' },
      { variant: 'contained', color: 'primary' },
      { variant: 'outlined', color: 'primary' },
      { variant: 'text', color: 'secondary' },
      { variant: 'contained', color: 'secondary' },
      { variant: 'outlined', color: 'secondary' },
    ],
    render: props => (
      <ButtonGroup sx={{ mx: '.5em' }} {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ),
  } as Demo<ButtonGroupProps>,
  {
    title: 'Checkboxes',
    props: [
      { color: 'primary', defaultChecked: true },
      { color: 'primary' },
      { color: 'primary', disabled: true },
      { color: 'primary', disabled: true, checked: true },
      { color: 'secondary', defaultChecked: true },
      { color: 'secondary' },
      { color: 'secondary', disabled: true },
      { color: 'secondary', disabled: true, checked: true },
      { color: 'default', defaultChecked: true },
      { color: 'default' },
      { color: 'default', disabled: true },
      { color: 'default', disabled: true, checked: true },
    ],
    render: props => (
      <FormControlLabel control={<Checkbox {...props} />} label="Label" />
    ),
  } as Demo<CheckboxProps>,
  {
    title: 'Radios',
    props: [
      { color: 'primary', defaultChecked: true },
      { color: 'primary' },
      { color: 'primary', disabled: true },
      { color: 'primary', disabled: true, checked: true },
      { color: 'secondary', defaultChecked: true },
      { color: 'secondary' },
      { color: 'secondary', disabled: true },
      { color: 'secondary', disabled: true, checked: true },
      { color: 'default', defaultChecked: true },
      { color: 'default' },
      { color: 'default', disabled: true },
      { color: 'default', disabled: true, checked: true },
    ],
    render: props => (
      <FormControlLabel control={<Radio {...props} />} label="Label" />
    ),
  } as Demo<RadioProps>,
  {
    title: 'Autocomplete',
    flex: 1,
    props: [
      {
        multiple: false,
        options: topFilms,
        disablePortal: true,
        fullWidth: true,
        renderInput: params => <TextField {...params} label="Movie" />,
      },
    ],
    render: props => <Autocomplete sx={{ mx: '.5em' }} {...props} />,
  } as Demo<AutocompleteProps<FilmType, false, false, false>>,
  {
    title: 'Rating',
    props: [
      {
        name: 'test',
        value: 1,
        readOnly: true,
      },
      {
        name: 'test',
        value: 2,
        readOnly: true,
      },
      {
        name: 'test',
        value: 3,
        readOnly: true,
      },
      {
        name: 'test',
        value: 4,
        readOnly: true,
      },
      {
        name: 'test',
        value: 5,
        readOnly: true,
      },
    ],
    render: props => <Rating sx={{ mx: '.5em' }} {...props} />,
  } as Demo<RatingProps>,
  {
    title: 'Floating Action Buttons',
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
  } as Demo<FabProps>,
  {
    title: 'Badges',
    props: [
      { color: 'primary', badgeContent: 5 },
      { color: 'secondary', badgeContent: 5 },
      { color: 'default', badgeContent: 5 },
      { color: 'error', badgeContent: 5 },
      { color: 'info', badgeContent: 5 },
      { color: 'success', badgeContent: 5 },
      { color: 'warning', badgeContent: 5 },
    ],
    render: props => (
      <Badge {...props}>
        <MailIcon />
      </Badge>
    ),
  } as Demo<BadgeProps>,
  {
    title: 'Chips',
    props: [
      { label: 'Chip', color: 'primary' },
      { label: 'Chip', color: 'secondary' },
      { label: 'Chip', color: 'success' },
      { label: 'Chip', color: 'error' },
      { label: 'Chip', color: 'info' },
      { label: 'Chip', color: 'warning' },
    ],
    render: props => <Chip {...props} />,
  } as Demo<ChipProps>,
  {
    title: 'TextField',
    flex: 1,
    props: [
      {
        label: 'TextField Label',
        color: 'primary',
        fullWidth: true,
        placeholder: 'Placeholder text',
      },
    ],
    render: props => <TextField {...props} />,
  } as Demo<TextFieldProps>,
  {
    title: 'Select',
    flex: 1,
    props: [
      {
        label: 'Select Label',
        color: 'primary',
        fullWidth: true,
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
  } as Demo<TextFieldProps>,
  {
    title: 'App Bar',
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
  } as Demo<AppBarProps>,
  {
    title: 'Switch',
    props: [
      { color: 'primary' },
      { color: 'primary', checked: true },
      { color: 'secondary' },
      { color: 'secondary', checked: true },
      { color: 'default' },
      { color: 'default', checked: true },
    ],
    render: props => <Switch {...props} />,
  } as Demo<SwitchProps>,
  {
    title: 'Typography',
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
  } as Demo<TypographyProps>,
];

const meta = {
  component: Box,
  argTypes: {},
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
