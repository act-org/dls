/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Paper,
  PaperProps,
} from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ReactElement, useState } from 'react';
import Draggable from 'react-draggable';

import { Playground } from '@actinc/dls/helpers/playground';

import { Dialog, DialogProps } from '.';

interface StoryProps extends DialogProps {
  text?: string;
}

// eslint-disable-next-line react/prop-types
const Template: StoryFn<StoryProps> = ({ text, ...args }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={(): void => {
          setOpen(true);
        }}
      >
        open
      </Button>

      <Dialog
        {...args}
        onClose={(): void => {
          setOpen(false);
        }}
        open={open}
      >
        <DialogContent>{text}</DialogContent>
        <DialogActions>
          <Button
            onClick={(): void => {
              setOpen(false);
            }}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default {
  args: {
    text: 'Some sample dialog text',
    title: 'Dialog Title',
  },
  argTypes: Playground(
    {
      fullScreen: { type: 'boolean' },
      fullWidth: { type: 'boolean' },
      maxWidth: {
        options: ['xs', 'sm', 'md', 'lg', 'xl', false],
        control: { type: 'radio' },
      },
      scroll: {},
      text: {},
      title: {},
    },
    Dialog,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Molecules / Dialog',
} as Meta<DialogProps>;

export const Preview: StoryObj<DialogProps> = {
  args: {},
};

export const DraggableDialog: StoryObj<DialogProps> = {
  args: {
    PaperComponent: (paperProps: PaperProps) => (
      <Draggable
        cancel={'[class*="MuiDialogContent-root"]'}
        handle=".MuiPaper-root"
      >
        <Paper {...paperProps} />
      </Draggable>
    ),
  },
};

export const FullScreen: StoryObj<DialogProps> = {
  args: { fullScreen: true },
};

export const FullWidth: StoryObj<DialogProps> = {
  args: { fullWidth: true },
};

export const ScrollBody = {
  render: (args: DialogProps): ReactElement<unknown> => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box>
          <Button
            onClick={(): void => {
              setOpen(true);
            }}
          >
            open
          </Button>
        </Box>
        <Dialog {...args} open={open} scroll="body" title="Lorem ipsum">
          <DialogContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et ex efficitur, fringilla magna a, accumsan mi. Nunc tincidunt
            pretium dolor non fermentum. Sed non facilisis erat. Sed dictum erat
            ut justo convallis, ut gravida massa congue. Donec suscipit lacus
            nec enim fringilla congue. Nulla lectus justo, viverra nec mattis
            in, congue at lacus. Donec aliquet aliquam enim nec finibus. Cras
            condimentum aliquam vulputate. Nam in tempor purus. In condimentum
            tincidunt mi eu sollicitudin. Phasellus eu urna eu odio condimentum
            interdum. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Fusce mollis lacus a
            sagittis porttitor. Fusce ut libero blandit, facilisis eros sit
            amet, posuere massa. Nunc sed nibh accumsan, lobortis ante quis,
            pellentesque libero. Curabitur et ipsum lorem. Fusce condimentum
            consequat arcu, at vulputate enim mollis sed. Etiam vel diam
            gravida, lobortis tortor nec, elementum est. Integer cursus nisi
            leo, sit amet tempus libero porta quis. Ut id faucibus diam,
            ultricies ultricies tortor. In ut neque at ipsum placerat auctor sed
            nec turpis. Morbi gravida, neque in imperdiet facilisis, tortor quam
            tincidunt felis, sit amet aliquet ante urna sollicitudin justo.
            Aliquam fringilla in sapien quis sagittis. Donec viverra quam non
            laoreet suscipit. Integer vel consectetur sem, vel ornare erat.
            Phasellus blandit scelerisque velit, at mollis purus dictum non.
            Nullam malesuada sit amet arcu eu faucibus. Nam non nibh felis. Nam
            quis mattis nisi. In semper mi eu mauris dignissim, sed suscipit
            ligula semper. Aliquam malesuada velit felis, sit amet vulputate
            dolor efficitur vitae. Curabitur fringilla purus eget elit posuere,
            et porttitor libero convallis. Donec condimentum justo eu odio
            rhoncus, sit amet venenatis sapien porttitor. Vestibulum ornare
            vitae felis sed consectetur. Pellentesque nec cursus risus. Mauris
            tempor ut ante venenatis imperdiet. Vestibulum id posuere purus.
            Suspendisse nec eleifend quam. Donec id rhoncus ipsum, sed aliquet
            erat. Maecenas est felis, eleifend eu hendrerit sit amet, lacinia id
            turpis. Donec cursus magna eu purus cursus, eget accumsan ipsum
            porttitor. Maecenas ullamcorper nulla id magna sollicitudin euismod.
            Integer cursus pellentesque arcu et finibus. Pellentesque vel est
            posuere, dignissim ligula sit amet, euismod justo. Aliquam id
            volutpat erat. Sed tempor feugiat semper. Vivamus quam leo,
            venenatis eget quam in, ornare pretium eros. Sed blandit eros ac sem
            sagittis elementum. Fusce vel nibh pellentesque, viverra metus et,
            efficitur tortor. Sed lectus ligula, aliquet sed hendrerit nec,
            maximus non metus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed varius ex vitae lacus
            finibus elementum. Aliquam lectus arcu, gravida in tristique eget,
            ultricies maximus nibh. Curabitur iaculis turpis at leo volutpat, id
            bibendum tellus ultricies. Curabitur vel tellus vel mauris rhoncus
            elementum quis vestibulum ex. Sed porta dapibus tincidunt.
            Vestibulum vitae purus mauris. Pellentesque congue enim eget cursus
            laoreet.
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const ScrollPaper = {
  render: (args: DialogProps): ReactElement<unknown> => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box>
          <Button
            onClick={(): void => {
              setOpen(true);
            }}
          >
            open
          </Button>
        </Box>
        <Dialog {...args} open={open} scroll="paper" title="Lorem ipsum">
          <DialogContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et ex efficitur, fringilla magna a, accumsan mi. Nunc tincidunt
            pretium dolor non fermentum. Sed non facilisis erat. Sed dictum erat
            ut justo convallis, ut gravida massa congue. Donec suscipit lacus
            nec enim fringilla congue. Nulla lectus justo, viverra nec mattis
            in, congue at lacus. Donec aliquet aliquam enim nec finibus. Cras
            condimentum aliquam vulputate. Nam in tempor purus. In condimentum
            tincidunt mi eu sollicitudin. Phasellus eu urna eu odio condimentum
            interdum. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Fusce mollis lacus a
            sagittis porttitor. Fusce ut libero blandit, facilisis eros sit
            amet, posuere massa. Nunc sed nibh accumsan, lobortis ante quis,
            pellentesque libero. Curabitur et ipsum lorem. Fusce condimentum
            consequat arcu, at vulputate enim mollis sed. Etiam vel diam
            gravida, lobortis tortor nec, elementum est. Integer cursus nisi
            leo, sit amet tempus libero porta quis. Ut id faucibus diam,
            ultricies ultricies tortor. In ut neque at ipsum placerat auctor sed
            nec turpis. Morbi gravida, neque in imperdiet facilisis, tortor quam
            tincidunt felis, sit amet aliquet ante urna sollicitudin justo.
            Aliquam fringilla in sapien quis sagittis. Donec viverra quam non
            laoreet suscipit. Integer vel consectetur sem, vel ornare erat.
            Phasellus blandit scelerisque velit, at mollis purus dictum non.
            Nullam malesuada sit amet arcu eu faucibus. Nam non nibh felis. Nam
            quis mattis nisi. In semper mi eu mauris dignissim, sed suscipit
            ligula semper. Aliquam malesuada velit felis, sit amet vulputate
            dolor efficitur vitae. Curabitur fringilla purus eget elit posuere,
            et porttitor libero convallis. Donec condimentum justo eu odio
            rhoncus, sit amet venenatis sapien porttitor. Vestibulum ornare
            vitae felis sed consectetur. Pellentesque nec cursus risus. Mauris
            tempor ut ante venenatis imperdiet. Vestibulum id posuere purus.
            Suspendisse nec eleifend quam. Donec id rhoncus ipsum, sed aliquet
            erat. Maecenas est felis, eleifend eu hendrerit sit amet, lacinia id
            turpis. Donec cursus magna eu purus cursus, eget accumsan ipsum
            porttitor. Maecenas ullamcorper nulla id magna sollicitudin euismod.
            Integer cursus pellentesque arcu et finibus. Pellentesque vel est
            posuere, dignissim ligula sit amet, euismod justo. Aliquam id
            volutpat erat. Sed tempor feugiat semper. Vivamus quam leo,
            venenatis eget quam in, ornare pretium eros. Sed blandit eros ac sem
            sagittis elementum. Fusce vel nibh pellentesque, viverra metus et,
            efficitur tortor. Sed lectus ligula, aliquet sed hendrerit nec,
            maximus non metus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed varius ex vitae lacus
            finibus elementum. Aliquam lectus arcu, gravida in tristique eget,
            ultricies maximus nibh. Curabitur iaculis turpis at leo volutpat, id
            bibendum tellus ultricies. Curabitur vel tellus vel mauris rhoncus
            elementum quis vestibulum ex. Sed porta dapibus tincidunt.
            Vestibulum vitae purus mauris. Pellentesque congue enim eget cursus
            laoreet.
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const MaxWidthXS: StoryObj<DialogProps> = {
  args: { maxWidth: 'xs' },
};

export const MaxWidthXL: StoryObj<DialogProps> = {
  args: { maxWidth: 'xl' },
};
