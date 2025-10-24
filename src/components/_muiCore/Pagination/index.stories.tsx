/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactNode, useState } from 'react';
import ChevronLeftIcon from 'mdi-material-ui/ChevronLeft';
import ChevronRightIcon from 'mdi-material-ui/ChevronRight';
import ChevronDoubleLeftIcon from 'mdi-material-ui/ChevronDoubleLeft';
import ChevronDoubleRightIcon from 'mdi-material-ui/ChevronDoubleRight';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { Pagination, PaginationItem, PaginationProps, TablePagination } from './internal';

/**
 * The default Pagination exports
 */
export default {
  args: {},
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Pagination',
} as Meta<Pagination>;

type Story = StoryObj<PaginationProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [page, setPage] = useState(1);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Box>
    );
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Pagination),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [page, setPage] = useState(1);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Box>
    );
  },
};

// Controlled Pagination Component for demonstration
const ControlledPagination = (): ReactNode => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Box>
  );
};

// Pagination with First and Last Buttons Component for demonstration
const PaginationWithFirstLast = (): ReactNode => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} showFirstButton showLastButton />
    </Box>
  );
};

// Outlined Pagination Component for demonstration
const OutlinedPagination = (): ReactNode => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} variant="outlined" />
    </Box>
  );
};

// Pagination with Custom Icons Component for demonstration
const PaginationWithCustomIcons = (): ReactNode => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: ChevronLeftIcon,
              next: ChevronRightIcon,
              first: ChevronDoubleLeftIcon,
              last: ChevronDoubleRightIcon,
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
};

// Pagination with Different Sizes Component for demonstration
const PaginationSizes = (): ReactNode => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <Typography>Page: {page}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Typography variant="body2">Small</Typography>
        <Pagination count={10} page={page} onChange={handleChange} size="small" />
        <Typography variant="body2">Medium</Typography>
        <Pagination count={10} page={page} onChange={handleChange} size="medium" />
        <Typography variant="body2">Large</Typography>
        <Pagination count={10} page={page} onChange={handleChange} size="large" />
      </Box>
    </Box>
  );
};

// Table Pagination Component for demonstration
const TablePaginationDemo = (): ReactNode => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sample data
  const rows = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 100),
  }));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rows.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </TableContainer>
  );
};

// Pagination with Different Colors Component for demonstration
const PaginationColors = (): ReactNode => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <Typography>Page: {page}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Typography variant="body2">Primary</Typography>
        <Pagination count={10} page={page} onChange={handleChange} color="primary" />
        <Typography variant="body2">Secondary</Typography>
        <Pagination count={10} page={page} onChange={handleChange} color="secondary" />
        <Typography variant="body2">Standard</Typography>
        <Pagination count={10} page={page} onChange={handleChange} color="standard" />
      </Box>
    </Box>
  );
};

// Theme-specific stories (snapshotted in Chromatic)
// Generate stories for each theme dynamically

// Export theme-specific stories dynamically
const themeStories = ThemesArray.reduce(
  (stories, theme) => {
    // eslint-disable-next-line no-param-reassign
    stories[theme] = createThemeStory<PaginationProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Basic Pagination" sx={{ p: 4 }}>
            <ControlledPagination />
          </StoryVariation>

          <StoryVariation label="With First and Last Buttons" sx={{ p: 4 }}>
            <PaginationWithFirstLast />
          </StoryVariation>

          <StoryVariation label="Outlined Pagination" sx={{ p: 4 }}>
            <OutlinedPagination />
          </StoryVariation>

          <StoryVariation label="Custom Icons" sx={{ p: 4 }}>
            <PaginationWithCustomIcons />
          </StoryVariation>

          <StoryVariation label="Different Sizes" sx={{ p: 4 }}>
            <PaginationSizes />
          </StoryVariation>

          <StoryVariation label="Table Pagination" sx={{ p: 4 }}>
            <TablePaginationDemo />
          </StoryVariation>

          <StoryVariation label="Color Variants" sx={{ p: 4 }}>
            <PaginationColors />
          </StoryVariation>

          <StoryVariation label="Simple Pagination" sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination count={5} />
            </Box>
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
