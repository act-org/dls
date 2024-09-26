/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Button, Typography } from '@mui/material';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import { noop } from 'lodash';
import { ReactElement } from 'react';

import { ConfirmProvider } from '~/context';
import { render, standard } from '~/helpers/test';
import { useConfirm } from '~/hooks';

import { ConfirmDialog, ConfirmDialogProps } from '.';

describe('ConfirmationDialog', () => {
  const Component = (
    <ConfirmDialog
      description="Confirmation Description Text"
      title="Confirmation Test"
    />
  );
  standard(Component);

  it('should allow for title props', async () => {
    const rendered = render(
      <ConfirmDialog
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
      <ConfirmDialog
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
      <ConfirmDialog
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
      <ConfirmDialog
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
    buttonTitle = 'Opens Dialog',
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
      return <Button onClick={openConfirm} title={buttonTitle} />;
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

  it('should allow multiple confirm hooks on a single DOM render', async () => {
    const onConfirm = jest.fn();
    const ConfirmHook = confirmHookBuilder(
      {
        confirmationButtonProps: {
          title: 'TestOk1',
        },
        title: 'TestConfirmation Title1',
      },
      onConfirm,
      noop,
      'Open1',
    );
    const ConfirmHook2 = confirmHookBuilder(
      {
        confirmationButtonProps: {
          title: 'TestOk2',
        },
        title: 'TestConfirmation Title2',
      },
      onConfirm,
      noop,
      'Open2',
    );
    const rendered = render(
      <ConfirmProvider>
        <ConfirmHook />
        <ConfirmHook2 />
      </ConfirmProvider>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByTitle('Open1'));
    const titleTag1 = rendered.getByText('TestConfirmation Title1');
    expect(titleTag1).toBeVisible();
    await user.click(rendered.getByTitle('TestOk1'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    await user.click(rendered.getByTitle('Open2'));
    const titleTag2 = rendered.getByText('TestConfirmation Title2');
    expect(titleTag2).toBeVisible();
    await user.click(rendered.getByTitle('TestOk2'));
    expect(onConfirm).toHaveBeenCalledTimes(2);
  });

  it('should should still function if someone tinkers with the blocking and multiple dom calls', async () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    const ConfirmHook = confirmHookBuilder(
      {
        confirmationButtonProps: {
          title: 'TestOk1',
        },
        title: 'TestConfirmation Title1',
      },
      onConfirm,
      onCancel,
      'Open1',
    );
    const ConfirmHook2 = confirmHookBuilder(
      {
        confirmationButtonProps: {
          title: 'TestOk2',
        },
        title: 'TestConfirmation Title2',
      },
      onConfirm,
      onCancel,
      'Open2',
    );
    const rendered = render(
      <ConfirmProvider>
        <ConfirmHook />
        <ConfirmHook2 />
      </ConfirmProvider>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByTitle('Open1'));
    // user used dev tools to hide confirm and backdrop
    await user.click(rendered.getByTitle('Open2'));
    await user.click(rendered.getByTitle('TestOk2'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
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
