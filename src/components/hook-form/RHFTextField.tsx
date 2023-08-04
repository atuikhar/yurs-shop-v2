// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps, FormHelperText, styled, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { BEIGE } from 'src/theme/palette';
// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  multi?: boolean;
};

const InfoIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));

const ErrorSpace = styled(FormHelperText)(({ theme }) => ({
  minHeight: '1.5rem',
  marginLeft: 0,
  marginTop: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.8rem',
}));

export default function RHFTextField({ name, helperText, multi, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            autoComplete={'new-password'}
            InputLabelProps={{
              style: { color: BEIGE[300] },
            }}
            sx={{
              backgroundColor: multi ? `${BEIGE[50]}` : 'inherit',
              borderRadius: multi ? '10px' : 'inherit',
              border: multi ? '1px solid rgba(113, 113, 113, 0.40)' : 'inherit',
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
            {...field}
            fullWidth
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error}
            {...other}
          />

          <ErrorSpace error>
            {error && (
              <>
                <InfoIcon>
                  <Icon icon="material-symbols:error-rounded" width="18" />
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
