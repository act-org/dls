/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Box, Button, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { standard, render } from '~/helpers/test';
import UserEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  ConfirmationDialog,
  ConfirmDialogProps,
  ConfirmProvider,
  useConfirm,
} from '.';
import { noop } from 'lodash';

describe('ConfirmationDialog', () => {
  const Component = (
    <ConfirmationDialog
      description="Confirmation Description Text"
      title="Confirmation Test"
    />
  );
  standard(Component);

  it('should allow for title props', async () => {
    const rendered = render(
      <ConfirmationDialog
        isOpen
        title="Confirmation Test"
        titleProps={{
          title: 'TestPassingTitle',
        }}
      />,
      'ACT',
    );
    const titleTag = rendered.getByTitle('TestPassingTitle');
    expect(titleTag).toBeVisible();
  });

  it('should allow for confirm button props', async () => {
    const rendered = render(
      <ConfirmationDialog
        confirmationButtonProps={{
          title: 'TestPassingTitle',
        }}
        isOpen
      />,
      'ACT',
    );
    const titleTag = rendered.getByTitle('TestPassingTitle');
    expect(titleTag).toBeVisible();
  });

  it('should allow for content props', async () => {
    const rendered = render(
      <ConfirmationDialog
        content={<Box>Test</Box>}
        contentProps={{
          title: 'TestPassingTitle',
        }}
        isOpen
      />,
      'ACT',
    );
    const titleTag = rendered.getByTitle('TestPassingTitle');
    expect(titleTag).toBeVisible();
  });

  it('should allow for cancel button props', async () => {
    const rendered = render(
      <ConfirmationDialog
        cancellationButtonProps={{
          title: 'TestPassingTitle',
        }}
        isOpen
      />,
      'ACT',
    );
    const titleTag = rendered.getByTitle('TestPassingTitle');
    expect(titleTag).toBeVisible();
  });

  const confirmHookBuilder = (
    options: ConfirmDialogProps = {},
    onConfirm: () => void = noop,
    onCancel: () => void = noop,
  ) => {
    // eslint-disable-next-line react/display-name
    return (): ReactElement => {
      const confirm = useConfirm();
      const openConfirm = async (): Promise<void> => {
        if (await confirm(options)) {
          onConfirm();
        } else {
          onCancel();
        }
      };
      return <Button onClick={openConfirm} title="Opens Dialog" />;
    };
  };

  it('should allow default options passed in to provider', async () => {
    const ConfirmHook = confirmHookBuilder();
    const rendered = render(
      <ConfirmProvider
        defaultOptions={{
          description: 'TestConfirmation Description',
          title: 'TestConfirmation Title',
        }}
      >
        <ConfirmHook />
      </ConfirmProvider>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByTitle('Opens Dialog'));
    const titleTag = rendered.getByText('TestConfirmation Title');
    expect(titleTag).toBeVisible();
  });

  it('should render custom content in the dialog', async () => {
    const ConfirmHook = confirmHookBuilder({
      content: (
        <Box>
          <Typography title="TestingContent" variant="h1">
            Some Text Goes Here
          </Typography>
        </Box>
      ),
    });
    const rendered = render(
      <ConfirmProvider>
        <ConfirmHook />
      </ConfirmProvider>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByTitle('Opens Dialog'));
    const testContent = rendered.getByTitle('TestingContent');
    expect(testContent).toBeVisible();
  });

  it('should open a dialog and trigger the confirm when the user presses ok', async () => {
    const onConfirm = jest.fn();
    const ConfirmHook = confirmHookBuilder(
      {
        confirmationText: 'TestOk',
      },
      onConfirm,
    );
    const rendered = render(
      <ConfirmProvider>
        <ConfirmHook />
      </ConfirmProvider>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByTitle('Opens Dialog'));
    await user.click(rendered.getByText('TestOk') as HTMLButtonElement);
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should open a dialog and trigger the cancel when the user presses cancel', async () => {
    const onCancel = jest.fn();
    const ConfirmHook = confirmHookBuilder(
      {
        cancellationText: 'TestCancel',
      },
      noop,
      onCancel,
    );
    const rendered = render(
      <ConfirmProvider>
        <ConfirmHook />
      </ConfirmProvider>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByTitle('Opens Dialog'));
    await user.click(rendered.getByText('TestCancel') as HTMLButtonElement);
    expect(onCancel).toHaveBeenCalled();
  });
});
