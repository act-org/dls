import { ThemeOptions } from '@mui/material/styles';

import E4ECustomDimensions from './E4ECustomDimensions';
import palette from './palette';
import shadows from './shadows';
import spacing from './spacing';
import typography, { INPUT_FONT_SIZE, primaryFontFamily, secondaryFontFamily } from './typography';

import type {} from '@mui/x-date-pickers/themeAugmentation';

export const LARGE_RADIUS = '8px';

export const NO_RADIUS = {
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderRadius: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
};

export const components: ThemeOptions['components'] = {
  MuiAccordion: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const disabledOverrides = ownerState.disabled
          ? {
              '&.Mui-disabled': {
                backgroundColor: palette.branding.surface[200],
                color: palette.text.overLight.disabled,
                fontWeight: 600,
              },
            }
          : {};

        const expandedOverrides = ownerState.expanded
          ? {
              '*:has(.MuiAccordion-root.Mui-expanded) > *': {
                margin: 0,
              },
            }
          : {};
        return {
          '&:before': {
            height: 0,
          },
          ':first-of-type': {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
          ':last-of-type': {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          backgroundColor: palette.common?.white,
          ...disabledOverrides,
          ...expandedOverrides,
        };
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      expandIconWrapper: {
        color: palette.branding.sapphire[500],
        margin: 12,
      },
      root: {
        '&.Mui-disabled': {
          '&>.MuiAccordionSummary-expandIconWrapper': {
            color: palette.branding.surface[600],
          },
          opacity: 1,
        },
        height: 68,
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      action: {
        button: {
          padding: 0,
        },
        marginLeft: '24px',
        marginRight: '0px',
        padding: 0,
        svg: {
          fill: `${palette.branding.sapphire[500]} !important`,
          height: '16px',
          width: '16px',
        },
      },
      icon: {
        '& > svg': {
          height: '22px',
          width: '22px',
        },
        marginRight: '8px',
        padding: 0,
      },
      message: {
        flexGrow: 1,
        padding: 0,
      },
      outlinedError: {
        background: palette.utility.error[50],
        borderColor: palette.utility.error[500],
        color: palette.utility.error[700],
        svg: {
          fill: palette.utility.error[700],
        },
      },
      outlinedInfo: {
        background: palette.utility.info[50],
        borderColor: palette.branding.sapphire[600],
        color: palette.utility.info[700],
        svg: {
          fill: palette.utility.info[700],
        },
      },
      outlinedSuccess: {
        background: palette.utility.success[50],
        borderColor: palette.utility.success[500],
        color: palette.utility.success[700],
        svg: {
          fill: palette.utility.success[700],
        },
      },
      outlinedWarning: {
        background: palette.utility.warning[50],
        borderColor: palette.utility.warning[600],
        color: palette.utility.warning[800],
        svg: {
          fill: palette.utility.warning[600],
        },
      },
      root: {
        alignItems: 'center',
        border: '1px solid',
        borderRadius: '4px',
        boxShadow: shadows[2],
        display: 'flex',
        padding: `${spacing(1)} ${spacing(2)}`,
      },
      standard: {
        background: palette.branding.surface[100],
        borderColor: palette.branding.surface[500],
        color: palette.text.overLight.high,
      },
      standardInfo: {
        '.MuiAlert-icon': {
          display: 'none',
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      endAdornment: {
        button: {
          '&.Mui-disabled': {
            svg: {
              fill: palette.branding.surface[500],
            },
          },
          '&:hover': {
            background: 'unset',
          },
        },
      },
      inputRoot: ({ ownerState }) => {
        const autocompleteSize = ownerState?.size;

        const readOnlyOverrides = ownerState.readOnly
          ? {
              '&>.MuiAutocomplete-input': {
                padding: 0,
                zIndex: 1,
              },
            }
          : {};
        return {
          '&.MuiInputBase-root.MuiOutlinedInput-root>div.MuiAutocomplete-endAdornment': {
            right: '12px',
          },
          '&.MuiInputBase-root.MuiOutlinedInput-root>input.MuiAutocomplete-input.MuiInputBase-input.MuiOutlinedInput-input':
            {
              borderRadius: 0,
              marginTop: autocompleteSize === 'large' ? '0' : '-4.5px',
              padding: 0,
            },
          '&>.MuiAutocomplete-input.Mui-disabled': {
            color: palette.text.overLight.high,
            WebkitTextFillColor: palette.text.overLight.high,
          },
          height: autocompleteSize === 'large' ? '48px !important' : '40px',
          padding: '12px 44px 12px 12px',
          ...readOnlyOverrides,
        };
      },
      listbox: {
        '&>.MuiAutocomplete-option': {
          padding: '8px 16px 8px 16px',
        },
        '&>.MuiAutocomplete-option.Mui-focused': {
          backgroundColor: palette.branding.surface[100],
        },
        '&>.MuiAutocomplete-option[aria-disabled="true"]': {
          color: palette.text.overLight.medium,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          opacity: 1,
        },
        '&>.MuiAutocomplete-option[aria-selected="true"]': {
          backgroundColor: `${palette.branding.surface[100]} !important`,
        },
      },
      noOptions: {
        color: palette.text.overLight.medium,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '20px',
        margin: '8px 0',
        padding: '8px 16px 8px 16px',
      },
      paper: {
        backgroundColor: palette.common?.white,
        boxShadow:
          '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
      },
      popper: {
        margin: '2px 0 !important',
      },
      root: ({ ownerState }) => {
        const autocompleteSize = ownerState?.size;
        const isReadOnly = ownerState?.readOnly;

        const readOnlyOverrides = ownerState.readOnly
          ? {
              '&:hover>div>div.MuiOutlinedInput-root>fieldset': {
                backgroundColor: palette.branding.mist[100],
                borderColor: palette.branding.surface[500],
              },
              '&>div>div.MuiOutlinedInput-root.Mui-disabled>fieldset': {},
              '&>div>div.MuiOutlinedInput-root>div.MuiAutocomplete-endAdornment': {
                zIndex: 1,
              },
              '&>div>div.MuiOutlinedInput-root>fieldset': {
                backgroundColor: palette.branding.mist[100],
                borderColor: palette.branding.surface[500],
                pointerEvents: 'none',
              },
            }
          : {};
        return {
          ['&.MuiAutocomplete-root>div.MuiTextField-root.MuiFormControl-root label[data-shrink="true"]' +
          '+ div.MuiInputBase-root div.MuiAutocomplete-endAdornment>button']: {
            padding: '2px',
          },
          '&>div>div.MuiOutlinedInput-root.Mui-disabled>div.MuiAutocomplete-endAdornment>button.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: palette.text.overLight.medium,
          },
          '&>div>div.MuiOutlinedInput-root.Mui-disabled>fieldset': {
            borderColor: palette.branding.surface[500],
          },
          '&>div>label.Mui-disabled': {
            color: palette.text.overLight.disabled,
          },
          label: {
            '&:not(.MuiInputLabel-shrink)': {
              color: isReadOnly ? palette.text.overLight.medium : null,
              marginTop: autocompleteSize === 'large' ? '0' : '-4.5px',
              maxWidth: '70%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
          },
          pointerEvents: isReadOnly ? 'none' : 'unset',
          width: ownerState.fullWidth ? 'unset' : '220px',
          ...readOnlyOverrides,
        };
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root': {
          '&.MuiSvgIcon-fontSizeSmall': {
            height: '24px',
            width: '24px',
          },
        },
      },
    },
  },
  MuiBadge: {
    styleOverrides: {
      colorPrimary: {
        background: palette.branding.sapphire[500],
      },
      colorSecondary: {
        background: palette.branding.teal[500],
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableTouchRipple: true,
    },
    styleOverrides: {
      contained: {
        '&:hover': {
          boxShadow:
            '0px 4px 8px rgba(79, 94, 113, 0.1), 0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
        },
        backgroundColor: palette.branding.sapphire[500],
        boxShadow: 'none',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: palette.branding.sapphire[700],
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: palette.branding.teal[700],
        },
      },
      endIcon: {
        marginLeft: '4px',
      },
      iconOutlined: {
        '&.MuiButton-sizeLarge': {
          border: `2px solid ${palette.branding.sapphire[500]}`,
        },
        '&.MuiButton-sizeMedium': {
          borderColor: palette.branding.sapphire[400],
        },
        '&.MuiButton-sizeSmall': {
          borderColor: palette.branding.sapphire[400],
        },
        '&:hover': {
          backgroundColor: palette.branding.sapphire[50],
          borderColor: palette.branding.sapphire[200],
          boxShadow:
            '0px 4px 8px rgba(79, 94, 113, 0.1), 0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
        },
        backgroundColor: 'unset',
        border: `1px solid ${palette.branding.sapphire[400]}`,
        color: palette.branding.sapphire[500],
      },
      outlined: {
        '&.MuiButton-sizeLarge': {
          border: `2px solid ${palette.utility.restingState}`,
        },
        '&.MuiButton-sizeMedium': {
          borderColor: palette.utility.restingState,
        },
        '&.MuiButton-sizeSmall': {
          borderColor: palette.utility.restingState,
        },
        '&:hover': {
          backgroundColor: palette.branding.sapphire[50],
          borderColor: palette.branding.sapphire[200],
          boxShadow:
            '0px 4px 8px rgba(79, 94, 113, 0.1), 0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
        },
        backgroundColor: 'unset',
        color: palette.branding.sapphire[500],
      },
      root: {
        '&.Mui-disabled.MuiButton-contained': {
          backgroundColor: palette.branding.surface[200],
        },
        '&.Mui-disabled.MuiButton-outlined': {
          borderColor: palette.branding.surface[400],
        },
        borderRadius: 8,
        fontFamily: primaryFontFamily,
        gap: 4,
        textTransform: 'capitalize',
      },
      sizeLarge: {
        '& > svg': {
          height: 20,
          width: 20,
        },
        ...typography.buttonLarge,
        height: '48px',
        padding: `14px 32px`,
      },
      sizeMedium: {
        '& > svg': {
          height: 16,
          width: 16,
        },
        ...typography.buttonMedium,
        height: '40px',
        padding: `10px 24px`,
      },
      sizeSmall: {
        '& > svg': {
          height: 16,
          width: 16,
        },
        ...typography.buttonSmall,
        height: 24,
        padding: `2px 16px`,
      },
      text: {
        '&:hover': {
          backgroundColor: palette.branding.sapphire[50],
        },
        backgroundColor: 'unset',
        color: palette.branding.sapphire[500],
        fontWeight: 500,
        padding: '14px 16px !important',
      },
      textSecondary: {
        '&:hover': {
          backgroundColor: palette.branding.teal[50],
        },
        color: palette.branding.teal[500],
      },
      textSizeLarge: {
        fontWeight: 600,
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: {
        ...INPUT_FONT_SIZE,
        '&.MuiCheckbox-root.Mui-disabled': {
          color: palette.branding.surface[400],
        },
        borderRadius: '8px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        border: `1px solid ${palette.branding.surface[300]}`,
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const sizeSmallOverrides =
          ownerState.size === 'small'
            ? {
                '& > svg': {
                  height: 20,
                  width: 20,
                },
                height: 32,
                padding: 8.5,
                width: 32,
              }
            : {};
        return {
          '& > svg': {
            height: 24,
            width: 24,
          },
          '&.Mui-checked': {
            '&:hover': {
              backgroundColor: palette.branding.teal[50],
            },
            color: palette.branding.teal[500],
          },
          '&.Mui-disabled': {
            color: palette.branding.surface[400],
          },
          '&.Mui-disabled.Mui-checked': {
            color: palette.branding.surface[400],
          },
          '&:hover': {
            backgroundColor: palette.branding.surface[200],
          },
          color: palette.text.overLight.medium,
          height: 40,
          marginRight: 1,
          padding: 11,
          width: 40,
          ...sizeSmallOverrides,
        };
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      avatar: {
        fill: palette.text.overLight.high,
      },
      avatarMedium: {
        height: 24,
        width: 24,
      },
      avatarSmall: {
        height: 16,
        width: 16,
      },
      deleteIcon: {
        margin: 0,
      },
      deleteIconMedium: {
        '&>svg': {
          height: 24,
          width: 24,
        },
      },
      filled: {
        '&.Mui-disabled': {
          '&>.MuiChip-deleteIcon': {
            color: palette.branding.mist[600],
          },
          backgroundColor: `${palette.branding.mist[100]} !important`,
        },
      },
      labelMedium: {
        padding: '0px 6px',
      },
      labelSmall: {
        padding: '0px 6px',
      },
      outlined: {
        '&.Mui-disabled': {
          border: `1px solid ${palette.branding.mist[400]} !important`,
        },
      },
      root: {
        '&.Mui-disabled': {
          '&>.MuiChip-deleteIcon': {
            color: palette.branding.mist[600],
          },
          '.MuiChip-avatar': {
            fill: palette.text.overLight.disabled,
          },
          color: palette.text.overLight.disabled,
        },
        ':has(.MuiChip-avatar)': {
          gap: '2px',
        },
        borderRadius: 32,
        color: palette.text.overLight.high,
        fontFamily: secondaryFontFamily,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20 / 14,
        maxHeight: 'fit-content',
        maxWidth: 'fit-content',
        minWidth: spacing(7),
        opacity: 1,
      },
      sizeMedium: {
        '&>svg': {
          height: 24,
          opacity: 0.7,
          width: 24,
        },
        height: 32,
        padding: `3px ${spacing(1)}`,
      },
      sizeSmall: {
        '&>svg': {
          height: 16,
          opacity: 0.7,
          width: 16,
        },
        height: 24,
        padding: `${spacing(0.25)} ${spacing(1)}`,
      },
    },
    variants: [
      {
        props: { variant: 'gradYear' },
        style: {
          fontSize: '18px',
          fontWeight: 600,
          justifySelf: 'end',
          lineHeight: '24px',
        },
      },
    ],
  },
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        '.MuiYearPicker-root': {
          paddingLeft: '12px',
          width: '304px',
        },
        overflow: 'hidden',
        width: 276,
      },
      viewTransitionContainer: {
        padding: '0 12px',
      },
    },
  },
  MuiDayCalendar: {
    styleOverrides: {
      weekContainer: {
        '&:first-of-type': {
          marginTop: 15,
        },
        '&:last-of-type': {
          marginBottom: 12,
        },
        '&:not(:last-of-type)': {
          marginBottom: 14,
        },
        margin: 0,
      },
      weekDayLabel: {
        height: 32,
        width: 32,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      container: {
        alignItems: 'flex-start',
        marginTop: `${E4ECustomDimensions.heights.header}px`,
      },
      paper: {
        color: palette.text.overLight.high,
      },
      root: {
        backgroundColor: palette.background.scrim,
        padding: spacing(0),
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        margin: spacing(2),
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      fullWidth: {
        width: '100%',
      },
      root: ({ ownerState }) => {
        const orientation = ownerState?.orientation;
        const variant = ownerState?.variant;
        let dividerSize;

        if (variant === 'small') {
          dividerSize = '24px';
        }

        if (variant === 'medium') {
          dividerSize = '40px';
        }

        if (variant === 'large') {
          dividerSize = '80px';
        }

        if (variant === 'fill') {
          dividerSize = '100%';
        }

        return {
          border: `2px solid ${palette.branding.surface[700]}`,
          borderRadius: 2,
          borderWidth: 1,
          height: orientation === 'vertical' ? dividerSize : 0,
          width: orientation === 'vertical' ? 0 : dividerSize,
        };
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      input: {
        '&:-webkit-autofill': {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },
      inputHiddenLabel: {
        paddingBottom: spacing(1.5),
        paddingTop: spacing(1.5),
      },
      root: {
        borderRadius: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        '&:has(.Mui-focused.MuiInputBase-formControl.MuiInputBase-readOnly)': {
          '&>label': {
            color: palette.text.overLight.medium,
          },
        },
        margin: 0,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        '&.Mui-disabled': {
          color: palette.text.overLight.disabled,
        },
      },
      root: {
        marginLeft: 0,
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        '&.Mui-error': {
          color: palette.utility.error[500],
        },
        color: palette.text.overLight.medium,
        marginLeft: 0,
        marginTop: 4,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        '&.MuiInputLabel-root.Mui-focused': {
          color: palette.branding.sapphire[500],
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: palette.branding.sapphire[700],
        },
        backgroundColor: palette.branding.sapphire[500],
        color: palette.utility.white,
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: palette.branding.sapphire[100],
        },
        backgroundColor: palette.branding.sapphire[50],
        color: palette.branding.sapphire[500],
      },
      colorTerciary: {
        '&:hover': {
          backgroundColor: palette.branding.sapphire[50],
        },
        backgroundColor: 'unset',
        color: palette.branding.sapphire[500],
      },
      root: {
        '&.Mui-disabled': {
          backgroundColor: palette.branding.surface[100],
          color: palette.branding.surface[600],
        },
        '&.MuiPickersArrowSwitcher-button': {
          height: 40,
          width: 40,
        },
        borderRadius: 48,
        color: palette.text.overLight.medium,
        label: {
          '&.Mui-disabled': {
            color: palette.text.overLight.disabled,
          },
        },
      },
      sizeLarge: {
        '& > svg': {
          height: 32,
          width: 32,
        },
      },
      sizeMedium: {
        '& > svg': {
          height: 24,
          width: 24,
        },
      },
      sizeSmall: {
        '& > svg': {
          height: 16,
          width: 16,
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      positionEnd: {
        '& > svg': {
          color: palette.text.overLight.medium,
        },
      },
      positionStart: {
        '&>.MuiTypography-root': {
          color: palette.branding.surface[700],
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        '&.MuiInputBase-readOnly': {
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            backgroundColor: palette.branding.mist[100],
            borderColor: palette.branding.surface[500],
          },
        },
        '&.MuiSelect-root. MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.branding.sapphire[500],
        },
        height: 48,
      },
      sizeSmall: {
        height: 40,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      asterisk: {
        '&.Mui-error': {
          color: palette.text.overLight.medium,
        },
      },
      root: {
        '&.Mui-disabled': {
          color: palette.text.overLight.disabled,
        },
        '&.Mui-error': {
          color: palette.utility.error[500],
        },
        '&.MuiInputLabel-shrink': {
          '&.Mui-error': {
            '&>.MuiInputLabel-asterisk': {
              color: palette.utility.error[500],
            },
            color: palette.utility.error[500],
          },
          transform: 'translate(14px, -8px) scale(0.625)',
        },
        '&.MuiInputLabel-sizeSmall': {
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -8px) scale(0.625)',
          },
          transform: 'translate(12px, 9px) scale(1)',
        },
        color: palette.text.overLight.medium,
        transform: 'translate(12px, 12px) scale(1)',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      bar: {
        backgroundColor: palette.branding.teal[500],
      },
      bar1Determinate: {
        borderRadius: 8,
      },
      root: {
        background: palette.branding.surface[300],
        borderRadius: 8,
        height: 12,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        '&:hover': {
          color: palette.branding.sapphire[700],
          textDecorationColor: palette.branding.sapphire[700],
        },
        color: palette.branding.sapphire[500],
        textDecorationColor: palette.branding.sapphire[500],
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: palette.text.overLight.medium,
        marginRight: spacing(0.25),
        minWidth: 'auto',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      root: ({ ownerState }) => {
        return {
          '.MuiMenu-paper': {
            boxShadow:
              '0px 5px 5px -3px rgba(0, 0, 0, 0.2),' +
              '0px 8px 10px 1px rgba(0, 0, 0, 0.14),' +
              '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
            maxHeight: '336px',
            minWidth: (ownerState?.anchorEl as HTMLElement)?.offsetWidth ?? 'inherit',
          },
        };
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          '&:first-of-type': {
            color: palette.text.overLight.medium,
            fontSize: '14px',
            lineHeight: '20px',
            opacity: 'unset',
          },
          color: palette.text.overLight.disabled,
          opacity: 'inherit',
          span: {
            color: palette.text.overLight.disabled,
          },
        },
        '&:hover': {
          background: palette.branding.surface[100],
          borderRadius: 0,
        },
        '&:not(&.Mui-disabled)': {
          span: {
            '&:nth-last-of-type(even)': {
              color: palette.text.overLight.medium,
            },
          },
        },
        justifyContent: 'space-between',
        minWidth: '100%',
        padding: '8px 16px',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& > fieldset': {
          '& > legend': {
            fontSize: 10,
          },
          borderColor: palette.branding.surface[700],
          borderRadius: 8,
          borderWidth: 1,
        },
        '& > input': {
          color: palette.text.overLight.high,
          padding: 12,
        },
        '&.Mui-disabled': {
          '& > .MuiInputAdornment-positionStart > .MuiTypography-root': {
            color: palette.text.overLight.disabled,
          },
          '& > .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.branding.surface[500],
          },
          '& > input': {
            color: palette.branding.surface[500],
            WebkitTextFillColor: palette.branding.surface[500],
          },
        },
        // Error should overwrite focus for the border color
        // eslint-disable-next-line sort-keys
        '&.Mui-error': {
          '& > .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.utility.error[500],
          },
        },

        '&.Mui-focused': {
          '& > .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.branding.sapphire[500],
          },
        },
        '&.MuiInputBase-readOnly': {
          '& > .MuiInputAdornment-positionEnd': {
            zIndex: 1,
          },
          '& > .MuiInputAdornment-positionEnd > .MuiSvgIcon-root': {
            zIndex: 1,
          },
          '& > .MuiInputAdornment-positionStart > .MuiTypography-root': {
            color: palette.branding.surface[500],
            zIndex: 1,
          },
          '& > fieldset': {
            backgroundColor: palette.branding.mist[100],
            borderColor: palette.branding.surface[500],
          },
          '& > input': {
            zIndex: 1,
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        '&.MuiAccordion-root.Mui-expanded': {
          margin: 0,
        },
        '&.MuiPickersPopper-paper': {
          margin: '2px 0px',
        },
      },
      rounded: {
        borderRadius: '8px',
      },
    },
  },
  MuiPickersArrowSwitcher: {
    styleOverrides: {
      spacer: {
        width: 12,
      },
    },
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      label: {
        ...typography.buttonSmall,
        color: palette.branding.sapphire[500],
      },
      labelContainer: {
        margin: 0,
      },
      root: {
        '&>.MuiPickersArrowSwitcher-root': {
          '&>.MuiPickersArrowSwitcher-button': {
            '&.Mui-disabled': {
              backgroundColor: 'unset',
              color: palette.text.overLight.disabled,
            },
            '&:hover': {
              backgroundColor: palette.branding.sapphire[50],
            },
            backgroundColor: 'unset',
            color: palette.branding.sapphire[500],
            margin: 0,
            padding: 0,
          },
          '&>.MuiPickersArrowSwitcher-spacer': {
            width: 0,
          },
        },
        justifyContent: 'space-between',
        margin: '2px 0px 2px 16px',
        minHeight: 44,
        padding: 0,
      },
      switchViewButton: {
        '&:hover': {
          backgroundColor: palette.branding.sapphire[50],
        },
        height: 24,
        width: 24,
      },
      switchViewIcon: {
        color: palette.branding.sapphire[500],
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      today: {
        '&:not(&.Mui-selected)': {
          border: `1px solid ${palette.branding.sapphire[500]}`,
          color: palette.branding.sapphire[500],
        },
      },
    },
  },
  MuiPickersLayout: {
    styleOverrides: {
      root: {
        // This is necessary because MuiCalendarOrClockPicker injects a div without class or name to tag it
        '& > div': {
          width: 'auto',
        },
      },
    },
  },
  MuiPickersPopper: {
    styleOverrides: {
      paper: {
        '& > .MuiDialogActions-root.MuiDialogActions-spacing': {
          margin: 0,
        },
      },
    },
  },
  /**
   * Change this class is necessary in the sense we need to make the monthContainer flexible. The container has a space below saved for months
   * with 6 rows of weeks that happens when the 1st start on a Saturday and the day has 31 days but the container should adapt it's size according
   * with the number of weeks as designed by UX.
   */
  MuiPickersSlideTransition: {
    styleOverrides: {
      root: {
        '> .MuiDayPicker-monthContainer': {
          position: 'unset',
        },
      },
    },
  },

  MuiPickersYear: {
    styleOverrides: {
      root: {
        '&:last-of-type': {
          marginBottom: '8px',
        },
        '&:nth-of-type(3n + 2)': {
          marginLeft: '20px',
        },
        '&:nth-of-type(3n)': {
          marginLeft: '20px',
          marginRight: '12px',
        },
        button: {
          '&.Mui-disabled': {
            background: palette.branding.surface[100],
            color: palette.text.overLight.disabled,
            pointerEvents: 'none',
          },
          ':hover': {
            background: palette.branding.sapphire[50],
          },
          borderRadius: '8px',
          color: palette.text.overLight.high,
          fontFamily: primaryFontFamily,
          fontSize: 14,
          fontWeight: 500,
          height: '40px',
          lineHeight: '20px',
          margin: '4px 0px',
          width: '71px',
        },
        fontFamily: primaryFontFamily,
      },
      selected: {
        '&:focus': {
          backgroundColor: palette.branding.sapphire[500],
        },
        '&:hover': {
          backgroundColor: palette.branding.sapphire[700],
        },
        backgroundColor: palette.branding.sapphire[500],
        color: palette.text.overDark.high,
      },
    },
  },

  MuiRadio: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const sizeSmallOverrides =
          ownerState.size === 'small'
            ? {
                '& > span': {
                  height: 20,
                  width: 20,
                },
                '& > span.MuiTouchRipple-root': {
                  height: 38,
                  width: 38,
                },
                height: 38,
                padding: 10.67,
                width: 38,
              }
            : {};
        return {
          '& > span > svg.MuiSvgIcon-fontSizeMedium': {
            height: 24,
            width: 24,
          },
          '& > span > svg.MuiSvgIcon-fontSizeSmall': {
            height: 20,
            width: 20,
          },
          '&.Mui-checked': {
            '&:hover': {
              backgroundColor: palette.branding.teal[50],
            },
            color: palette.branding.teal[500],
          },
          '&.Mui-disabled': {
            color: palette.branding.surface[400],
          },
          '&:hover': {
            backgroundColor: palette.branding.surface[200],
          },
          color: palette.branding.surface[900],
          height: 42,
          marginRight: 1,
          padding: 11,
          width: 42,
          ...sizeSmallOverrides,
        };
      },
    },
  },

  MuiSelect: {
    styleOverrides: {
      icon: {
        fill: palette.text.overLight.medium,
        top: 'unset',
      },
      select: {
        '&.MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
          WebkitTextFillColor: 'currentColor',
        },
        padding: '12px',
      },
    },
  },

  MuiSkeleton: {
    styleOverrides: {
      circular: {
        borderRadius: '48px',
      },
      root: {
        backgroundColor: palette.branding.surface[100],
        borderRadius: '8px',
        transform: 'none',
      },
    },
  },

  MuiSvgIcon: {
    styleOverrides: {
      fontSizeLarge: {
        height: '32px',
        width: '32px',
      },
      fontSizeMedium: {
        height: '24px',
        width: '24px',
      },
      fontSizeSmall: {
        height: '16px',
        width: '16px',
      },
    },
  },

  MuiSwitch: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        padding: 0,
      },
      sizeMedium: {
        '& > .MuiSwitch-track': {
          backgroundColor: palette.branding.surface[600],
          border: 0,
          height: 20,
          width: 36,
        },
        '& > span > .MuiSwitch-thumb': {
          boxShadow:
            '0px 16px 32px rgba(79, 94, 113, 0.09), ' +
            '0px 4px 8px rgba(79, 94, 113, 0.1), ' +
            '0px 2px 4px rgba(79, 94, 113, 0.11), ' +
            '0px 0px 2px rgba(79, 94, 113, 0.12)',
          color: palette.common?.white,
          height: 16,
          width: 16,
        },
        height: 20,
        width: 36,
      },
      sizeSmall: {
        '& > .MuiSwitch-switchBase': {
          '&.Mui-checked': {
            transform: 'translateX(11px)',
          },
          padding: 2,
        },
        '& > .MuiSwitch-track': {
          backgroundColor: palette.branding.surface[600],
          height: 16,
          width: 27,
        },
        '& > span > .MuiSwitch-thumb': {
          boxShadow:
            '0px 16px 32px rgba(79, 94, 113, 0.09), ' +
            '0px 4px 8px rgba(79, 94, 113, 0.1), ' +
            '0px 2px 4px rgba(79, 94, 113, 0.11), ' +
            '0px 0px 2px rgba(79, 94, 113, 0.12)',
          color: palette.common?.white,
          height: 12,
          width: 12,
        },
        height: 16,
        width: 27,
      },
      switchBase: {
        '&.Mui-checked': {
          transform: 'translateX(16px)',
        },
        '&.Mui-checked + .MuiSwitch-track': {
          backgroundColor: palette.branding.teal[100],
          borderRadius: 14,
          opacity: 1,
        },
        '&.Mui-checked > .MuiSwitch-thumb': {
          backgroundColor: palette.branding.teal[600],
          boxShadow:
            '0px 16px 32px rgba(79, 94, 113, 0.09), ' +
            '0px 4px 8px rgba(79, 94, 113, 0.1), ' +
            '0px 2px 4px rgba(79, 94, 113, 0.11), ' +
            '0px 0px 2px rgba(79, 94, 113, 0.12)',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: palette.branding.surface[200],
          opacity: 1,
        },
        '&.Mui-disabled > .MuiSwitch-thumb': {
          boxShadow: 'none',
          color: palette.utility.white,
        },
        padding: 2,
      },
      track: {
        backgroundColor: palette.branding.surface[600],
        opacity: 1,
      },
    },
  },

  MuiTab: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          color: palette.text.overLight.disabled,
        },
        '&.Mui-selected': {
          color: palette.branding.teal[700],
        },
        borderRadius: 5,
        color: palette.text.overLight.high,
        fontFamily: primaryFontFamily,
        fontSize: 14,
        fontWeight: 500,
        height: '48px',
        lineHeight: '20px',
        padding: '14px 16px',
        textTransform: 'none',
      },
    },
  },

  MuiTableContainer: {
    styleOverrides: {
      root: {
        '&.MuiPaper-root': {
          border: 'unset',
        },
        borderRadius: 0,
      },
    },
  },

  MuiTablePagination: {
    styleOverrides: {
      selectLabel: {
        color: palette.text.overLight.medium,
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 20 / 14,
      },
    },
  },

  MuiTableSortLabel: {
    styleOverrides: {
      icon: {
        '&:hover': {
          fill: palette.text.overLight.medium,
        },
        fill: palette.text.overLight.medium,
        height: 20,
        width: 20,
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: palette.branding.teal[500],
      },
      root: {
        button: {
          minWidth: 0,
        },
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const readOnlyOverrides = ownerState.InputProps?.readOnly
          ? {
              '& div.MuiInputBase-readOnly': {
                '& input.MuiInputBase-input': {
                  color: palette.text.overLight.high,
                  lineHeight: '24px',
                  WebkitTextFillColor: palette.text.overLight.high,
                },
              },
              '& label.MuiFormLabel-root': {
                color: palette.text.overLight.medium,
              },
              '&:hover': {
                '& fieldset': {
                  borderColor: palette.branding.surface[500],
                },
              },
            }
          : {};
        const disabledOverrides = ownerState.disabled
          ? {
              '& div.MuiInputBase-root': {
                '& input.MuiInputBase-input': {
                  color: palette.text.overLight.disabled,
                  lineHeight: '24px',
                  paddingRight: 0,
                  WebkitTextFillColor: palette.text.overLight.disabled,
                },
              },
              '& div.MuiInputBase-root.Mui-disabled': {
                '& fieldset.MuiOutlinedInput-notchedOutline': {
                  '& legend span': {
                    marginRight: '-1px',
                    padding: '0px 4px',
                  },
                },
                '&:hover': {
                  '& fieldset': {
                    borderColor: palette.branding.surface[500],
                  },
                },
                paddingRight: '12px',
              },
              '& label.MuiFormLabel-root': {
                color: palette.text.overLight.disabled,
              },
            }
          : {};
        const errorOverrides = ownerState.error
          ? {
              '& div.MuiInputBase-root.Mui-error': {
                '&:hover': {
                  '& fieldset': {
                    borderColor: palette.utility.error[500],
                  },
                },
                borderColor: palette.utility.error[500],
              },
            }
          : {};
        const hasValueOverrides = ownerState.value
          ? {
              '& div.MuiInputBase-root': {
                '& fieldset.MuiOutlinedInput-notchedOutline': {
                  '& legend span': {
                    padding: !ownerState.label || ownerState.label === '' ? 0 : '0px 4px',
                  },
                },
                '& input.MuiInputBase-input': {
                  '&:-webkit-autofill': {
                    marginRight: '0px !important',
                  },
                  marginRight: '-4px',
                  padding: '13px 0px 11px 12px',
                },
              },
            }
          : {};
        const mediumSizeOverrides =
          ownerState.size === 'medium'
            ? {
                '& div.Mui-disabled > div.MuiInputAdornment-positionStart + input': {
                  paddingRight: '0px',
                },
                '& div.MuiInputAdornment-root + input': {
                  borderRadius: '8px',
                  padding: '8px 12px 8px 8px',
                },
                '& div.MuiInputBase-root': {
                  '& fieldset.MuiOutlinedInput-notchedOutline': {
                    '& legend span': {
                      padding: '0px 4px',
                    },
                  },
                  '&:hover': {
                    '& fieldset': {
                      borderColor: palette.branding.surface[700],
                    },
                  },
                  borderRadius: '8px',
                  height: '40px',
                  paddingRight: '12px',
                },
                '& div.MuiInputBase-root.Mui-focused': {
                  '&:hover': {
                    '& fieldset': {
                      borderColor: palette.branding.sapphire[500],
                    },
                  },
                },
                '& input': {
                  lineHeight: '24px',
                },
                '& label.MuiFormLabel-root[data-shrink="false"]': {
                  marginTop: '-3.5px',
                },
                '& label[data-shrink] + :not(& .MuiInputBase-adornedStart) input.MuiInputBase-input': {
                  padding: '8px 0px 8px 12px',
                },
                height: '40px',
              }
            : {};
        return {
          '& div.MuiInputAdornment-root + input': {
            paddingLeft: '8px',
          },
          '& div.MuiInputBase-adornedStart': {
            paddingLeft: '12px',
          },
          '& div.MuiInputBase-root': {
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              '& legend span': {
                padding: '0px 4px',
              },
            },
            '& input': {
              '&:-webkit-autofill': {
                // Invert the padding so we autofill in Chrome will have the correct background color
                marginRight: '-12px !important',
              },
              paddingRight: 0,
            },
            '&:hover': {
              '& fieldset': {
                borderColor: palette.branding.surface[700],
              },
            },
            borderColor: palette.branding.surface[700],
            paddingRight: '12px',
          },
          '& div.MuiInputBase-root.Mui-focused': {
            '&:hover': {
              '& fieldset': {
                borderColor: palette.branding.sapphire[500],
              },
            },
          },
          '& input': {
            borderRadius: '8px',
            height: '24px',
            lineHeight: '24px',
          },
          '& label[data-shrink="true"]': {
            marginLeft: '-1px',
          },
          '& label[data-shrink="true"] + :not(& .MuiInputBase-adornedStart) input.MuiInputBase-input': {
            borderRadius: '8px',
            padding: '13px 0px 11px 12px',
          },
          ...hasValueOverrides,
          ...disabledOverrides,
          ...readOnlyOverrides,
          ...errorOverrides,
          ...mediumSizeOverrides,
        };
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      arrow: ({ ownerState }) => {
        const tooltipPlacement = ownerState.placement;

        return {
          '&::before': {
            backgroundColor: palette.branding.surface[900],
          },
          ...(tooltipPlacement === 'bottom' && {
            transform: 'scale(1.091) translate3d(68.6667px, 0px, 0px) !important',
          }),
          ...(tooltipPlacement === 'left' && {
            transform: 'scale(1.091) translate3d(0px, 89.3333px, 0px) !important',
          }),
          ...(tooltipPlacement === 'right' && {
            transform: 'scale(1.091) translate3d(0px, 60px, 0px) !important',
          }),
          ...(tooltipPlacement === 'top' && {
            transform: 'scale(1.091) translate3d(68.6667px, 0px, 0px) !important',
          }),
        };
      },
      popper: ({ ownerState }) => {
        const hasArrow = ownerState.arrow;

        return {
          ...(!hasArrow
            ? {
                '&>.MuiTooltip-tooltip': {
                  margin: '10px 0px !important',
                },
              }
            : undefined),
        };
      },
      tooltip: {
        backgroundColor: palette.branding.surface[900],
        borderRadius: 4,
        color: palette.text.overDark.high,
        margin: 0,
        maxWidth: 160,
        padding: 8,
      },
      tooltipPlacementBottom: {
        margin: '16px 0px 14px 0px !important',
      },
      tooltipPlacementLeft: {
        margin: '0px 8px !important',
      },
      tooltipPlacementRight: {
        margin: '0px 8px !important',
      },
      tooltipPlacementTop: {
        margin: '16px 0px 14px 0px !important',
      },
    },
  },
};

export default components;
