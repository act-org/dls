/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PersonIcon from 'mdi-material-ui/Account';
import FavoriteIcon from 'mdi-material-ui/Heart';
import PhoneIcon from 'mdi-material-ui/Phone';
import { ReactNode, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Tab, Tabs, TabsProps } from './internal';

// Custom TabPanel component since it's not available in MUI core
interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

/**
 * The default Tabs exports
 */
export default {
  args: {},
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Tabs',
} as Meta<Tabs>;

type Story = StoryObj<TabsProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Item One Content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Item Two Content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Item Three Content</Typography>
        </TabPanel>
      </Box>
    );
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Tabs),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Item One Content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Item Two Content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Item Three Content</Typography>
        </TabPanel>
      </Box>
    );
  },
};

// Basic Tabs Component for demonstration
const BasicTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Vertical Tabs Component for demonstration
const VerticalTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
      <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="vertical tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Item Four Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>Item Five Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography>Item Six Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Scrollable Tabs Component for demonstration
const ScrollableTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Item Four Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>Item Five Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography>Item Six Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Typography>Item Seven Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Icon Tabs Component for demonstration
const IconTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        <Tab icon={<PhoneIcon />} label="Recents" />
        <Tab icon={<FavoriteIcon />} label="Favorites" />
        <Tab icon={<PersonIcon />} label="Contacts" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Recents Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Favorites Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Contacts Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Full Width Tabs Component for demonstration
const FullWidthTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="full width tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Centered Tabs Component for demonstration
const CenteredTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered aria-label="centered tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Disabled Tab Component for demonstration
const DisabledTab = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tab example">
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Active Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Disabled Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Active Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Custom Indicator Tabs Component for demonstration
const CustomIndicatorTabs = (): ReactNode => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: 'green' } }} aria-label="custom indicator tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<TabsProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Tabs" sx={{ p: 4 }}>
            <BasicTabs />
          </StoryVariation>

          <StoryVariation label="Vertical Tabs" sx={{ p: 4 }}>
            <VerticalTabs />
          </StoryVariation>

          <StoryVariation label="Scrollable Tabs" sx={{ p: 4 }}>
            <ScrollableTabs />
          </StoryVariation>

          <StoryVariation label="Icon Tabs" sx={{ p: 4 }}>
            <IconTabs />
          </StoryVariation>

          <StoryVariation label="Full Width Tabs" sx={{ p: 4 }}>
            <FullWidthTabs />
          </StoryVariation>

          <StoryVariation label="Centered Tabs" sx={{ p: 4 }}>
            <CenteredTabs />
          </StoryVariation>

          <StoryVariation label="Disabled Tab" sx={{ p: 4 }}>
            <DisabledTab />
          </StoryVariation>

          <StoryVariation label="Custom Indicator" sx={{ p: 4 }}>
            <CustomIndicatorTabs />
          </StoryVariation>
        </ThemeProvider>
      ),
    });

    return stories;
  },
  {} as Record<string, Story>,
);

export const ThemeEncoura = { ...themeStories.ENCOURA, name: 'Theme: Encoura' };
export const ThemeEncouraClassic = { ...themeStories.ENCOURA_CLASSIC, name: 'Theme: Encoura Classic' };
export const ThemeEncourage = { ...themeStories.ENCOURAGE, name: 'Theme: Encourage' };
export const ThemeEncourageE4E = { ...themeStories.ENCOURAGE_E4E, name: 'Theme: Encourage E4E' };
