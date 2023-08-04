// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  Box,
  Chip,
  Select,
  Checkbox,
  MenuItem,
  TextField,
  InputLabel,
  SelectProps,
  FormControl,
  OutlinedInput,
  TextFieldProps,
  FormHelperText,
  styled,
} from '@mui/material';
import { Icon } from '@iconify/react';

import 'react-phone-number-input/style.css';
import { BEIGE } from '@/theme/palette';

// ----------------------------------------------------------------------

const InfoIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));

const ErrorSpace = styled(FormHelperText)(({ theme }) => ({
  minHeight: '1.5rem',
  marginLeft: 0,
  marginTop: theme.spacing(0.2),
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.8rem',
}));
type RHFSelectProps = TextFieldProps & {
  name: string;
  native?: boolean;
  maxHeight?: boolean | number;
  children: React.ReactNode;
};

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            {...field}
            select
            fullWidth
            InputLabelProps={{
              style: { color: BEIGE[300] },
            }}
            sx={{
              '.MuiSvgIcon-root ': {
                fill: `${BEIGE[300]} !important`,
                fontSize: 20,
                mr: 1,
              },
              ' .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${BEIGE[300]} !important`,
              },
              ' .Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${BEIGE[300]}`,
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  border: `1px solid ${BEIGE[300]}`,
                },
                '&:hover fieldset': {
                  border: `1px solid ${BEIGE[300]}`,
                },
              },
            }}
            SelectProps={{
              native,
              MenuProps: {
                PaperProps: {
                  sx: {
                    maxHeight: '100%',
                    overflow: 'auto',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                      width: '0.3em',
                      backgroundColor: '#EEEBE1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#000',
                      borderRadius: 20,
                    },
                    borderRadius: '8px !important',
                    ...(!native && {
                      px: 1,
                      maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                      '& .MuiMenuItem-root': {
                        px: 1,
                        textTransform: 'capitalize',
                      },
                    }),
                  },
                },
              },
              sx: { textTransform: 'capitalize' },
            }}
            error={!!error}
            // helperText={error ? error?.message : helperText}
            {...other}
          >
            {children}
          </TextField>
          <ErrorSpace error>
            {error && (
              <>
                <InfoIcon>
                  <InfoIcon>
                    <Icon icon="material-symbols:error-rounded" width="18" />
                  </InfoIcon>{' '}
                </InfoIcon>

                {error?.message}
              </>
            )}
          </ErrorSpace>
        </>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type RHFMultiSelectProps = SelectProps & {
  name: string;
  label?: string;
  chip?: boolean;
  checkbox?: boolean;
  placeholder?: string;
  helperText?: React.ReactNode;
  options: {
    label: string;
    value: string;
  }[];
};

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}: RHFMultiSelectProps) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: string[]) => {
    const selectedItems = options.filter((item) => selectedIds.includes(item.value));

    if (!selectedItems.length && placeholder) {
      return (
        <Box component="em" sx={{ color: 'text.disabled' }}>
          {placeholder}
        </Box>
      );
    }

    if (chip) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedItems.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(', ');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={sx}>
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            {...field}
            multiple
            displayEmpty={!!placeholder}
            labelId={name}
            input={<OutlinedInput fullWidth label={label} error={!!error} />}
            renderValue={renderValues}
            MenuProps={{
              PaperProps: {
                sx: { px: 1, maxHeight: 280 },
              },
            }}
            {...other}
          >
            {placeholder && (
              <MenuItem
                disabled
                value=""
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 0.75,
                  typography: 'body2',
                }}
              >
                <em> {placeholder} </em>
              </MenuItem>
            )}

            {options.map((option) => {
              const selected = field.value.includes(option.value);

              return (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    py: 1,
                    px: 2,
                    borderRadius: 0.75,
                    typography: 'body2',
                    ...(selected && {
                      fontWeight: 'fontWeightMedium',
                    }),
                    ...(checkbox && {
                      p: 0.25,
                    }),
                  }}
                >
                  {checkbox && <Checkbox disableRipple size="small" checked={selected} />}

                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
