/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, Button, Paper, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import CheckIcon from 'mdi-material-ui/Check';
import ChevronLeftIcon from 'mdi-material-ui/ChevronLeft';
import ChevronRightIcon from 'mdi-material-ui/ChevronRight';
import { ReactNode, useState } from 'react';

import { StoryVariation } from '~/components/StoryVariation';
import ThemeProvider from '~/components/ThemeProvider';
import { createThemeStory } from '~/helpers/createThemeStory';
import { Playground } from '~/helpers/playground';
import { ThemesArray } from '~/styles/themes';

import { MobileStepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper, StepperProps } from './internal';

/**
 * The default Stepper exports
 */
export default {
  args: {},
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Stepper',
} as Meta<Stepper>;

type Story = StoryObj<StepperProps>;

// Documentation story (not snapshotted in Chromatic)
export const Documentation: Story = {
  args: {},
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    const handleNext = (): void => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = (): void => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = (): void => {
      setActiveStep(0);
    };

    return (
      <Box sx={{ maxWidth: 400, width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Paper elevation={0} square sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mr: 1, mt: 1 }}>
              Reset
            </Button>
          </Paper>
        ) : (
          <Box>
            <Typography sx={{ mb: 1, mt: 2 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
            </Box>
          </Box>
        )}
      </Box>
    );
  },
};

// Playground story (not snapshotted in Chromatic)
export const PlaygroundStory: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  argTypes: Playground({}, Stepper),
  name: 'Playground',
  parameters: {
    chromatic: { disable: true },
  },
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    const handleNext = (): void => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = (): void => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
      <Box sx={{ maxWidth: 400, width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          <Typography sx={{ mb: 1, mt: 2 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </Box>
      </Box>
    );
  },
};

// Basic Horizontal Stepper Component for demonstration
const BasicHorizontalStepper = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Typography sx={{ mb: 1, mt: 2 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
        </Box>
      </Box>
    </Box>
  );
};

// Vertical Stepper Component for demonstration
const VerticalStepper = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      description:
        'For each ad campaign that you create, you can control settings like which network your ads appear on, where they appear, and how much you want to spend.',
      label: 'Select campaign settings',
    },
    {
      description: 'An ad group contains one or more ads which target a shared set of keywords.',
      label: 'Create an ad group',
    },
    {
      description: 'Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions.',
      label: 'Create an ad',
    },
  ];

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = (step: number) => (): void => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel onClick={handleStep(index)}>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button onClick={handleNext} sx={{ mr: 1, mt: 1 }} variant="contained">
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

// Non-Linear Stepper Component for demonstration
const NonLinearStepper = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

  const handleStep = (step: number) => (): void => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Stepper activeStep={activeStep} nonLinear>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

// Alternative Label Stepper Component for demonstration
const AlternativeLabelStepper = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Typography sx={{ mb: 1, mt: 2 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
        </Box>
      </Box>
    </Box>
  );
};

// Custom Step Icon Component
const CustomStepIcon = ({ active, completed, className }: { active?: boolean; completed?: boolean; className?: string }): ReactNode => (
  <StepIcon active={active} className={className} completed={completed} icon={completed ? <CheckIcon /> : 1} />
);

// Custom Step Icon Stepper Component for demonstration
const CustomStepIconStepper = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Typography sx={{ mb: 1, mt: 2 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
        </Box>
      </Box>
    </Box>
  );
};

// Mobile Stepper Component for demonstration
const MobileStepperExample = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
      <Paper
        elevation={0}
        square
        sx={{
          alignItems: 'center',
          bgcolor: 'background.default',
          display: 'flex',
          height: 50,
          pl: 2,
        }}
      >
        <Typography>
          Step {activeStep + 1} of {maxSteps}
        </Typography>
      </Paper>
      <MobileStepper
        activeStep={activeStep}
        backButton={
          <Button disabled={activeStep === 0} onClick={handleBack} size="small">
            <ChevronLeftIcon />
            Back
          </Button>
        }
        nextButton={
          <Button disabled={activeStep === maxSteps - 1} onClick={handleNext} size="small">
            Next
            <ChevronRightIcon />
          </Button>
        }
        position="static"
        steps={maxSteps}
        variant="dots"
      />
    </Box>
  );
};

// Custom Connector Stepper Component for demonstration
const CustomConnectorStepper = (): ReactNode => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Stepper activeStep={activeStep} connector={<StepConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Typography sx={{ mb: 1, mt: 2 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
        </Box>
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
    stories[theme] = createThemeStory<StepperProps>(theme, {
      render: () => (
        <ThemeProvider theme={theme}>
          <StoryVariation label="Simple Stepper" sx={{ p: 4 }}>
            <Box sx={{ maxWidth: 400, width: '100%' }}>
              <Stepper activeStep={1}>
                <Step>
                  <StepLabel>Completed</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Active</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Inactive</StepLabel>
                </Step>
              </Stepper>
            </Box>
          </StoryVariation>

          <StoryVariation label="Basic Horizontal Stepper" sx={{ p: 4 }}>
            <BasicHorizontalStepper />
          </StoryVariation>

          <StoryVariation label="Vertical Stepper" sx={{ p: 4 }}>
            <VerticalStepper />
          </StoryVariation>

          <StoryVariation label="Non-Linear Stepper" sx={{ p: 4 }}>
            <NonLinearStepper />
          </StoryVariation>

          <StoryVariation label="Alternative Label Stepper" sx={{ p: 4 }}>
            <AlternativeLabelStepper />
          </StoryVariation>

          <StoryVariation label="Custom Step Icon" sx={{ p: 4 }}>
            <CustomStepIconStepper />
          </StoryVariation>

          <StoryVariation label="Mobile Stepper" sx={{ p: 4 }}>
            <MobileStepperExample />
          </StoryVariation>

          <StoryVariation label="Custom Connector" sx={{ p: 4 }}>
            <CustomConnectorStepper />
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
