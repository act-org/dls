/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";
import { Story } from "@storybook/react/types-6-0";

import { useState } from "react";

export const Select = MuiSelect;
export type SelectProps = MuiSelectProps;

const RenderSelect: Story<SelectProps> = (args) => {
  return (
    <Select {...args}>
      {Array(...Array(10)).map((_, i): any => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={i} value={i}>
          {i + 1}
        </MenuItem>
      ))}
    </Select>
  );
};

const MultipleValueSelect: Story<SelectProps> = (args) => {
  const [value, setValue] = useState([1]);

  return (
    <RenderSelect
      onChange={(e: any): void => {
        setValue(e.target.value);
      }}
      value={value}
      {...args}
    />
  );
};

const SingleValueSelect: Story<SelectProps> = (args) => {
  const [value, setValue] = useState(1);

  return (
    <RenderSelect
      onChange={(e: any): void => {
        setValue(e.target.value);
      }}
      value={value}
      {...args}
    />
  );
};

export const Template: Story<SelectProps> = ({ multiple, ...args }) => {
  const Component = multiple ? MultipleValueSelect : SingleValueSelect;

  return <Component multiple={multiple} {...args} />;
};
