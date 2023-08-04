import React from 'react';

//mui
import { styled, Box, FormHelperText } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useFormContext, Controller } from 'react-hook-form';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

//icons
import { Icon } from '@iconify/react';
import { BEIGE } from '@/theme/palette';

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

type TDatePickerProps = {
  placeholder: string;
  name: string;
  card?: boolean;
};

const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
}));

export default function RHFDatePicker({
  placeholder,
  name,
  card,
}: TDatePickerProps): React.ReactElement {
  const { control } = useFormContext();

  const handleDisableYear = (year: any) => {
    return year.$y < new Date().getFullYear();
  };
  // const handleDisableFutureYear = (year: any) => {
  //   return year.$y > new Date().getFullYear();
  // };
  return (
    <>
      <InputWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name={name}
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                {card ? (
                  <DatePicker
                    views={['month', 'year']}
                    format="MM/YY"
                    sx={{
                      ' .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid ${BEIGE[300]} !important`,
                      },
                      '&.Mui-focused fieldset': {
                        border: `1px solid ${BEIGE[300]}`,
                      },
                      '&:hover fieldset': {
                        border: `1px solid ${BEIGE[300]}`,
                      },
                      ' .MuiInputLabel-root': {
                        color: `${BEIGE[300]} !important`,
                      },
                      '&.MuiPickersPopper-root': { border: '4px solid red' },
                    }}
                    slotProps={{
                      textField: { fullWidth: true },
                    }}
                    shouldDisableYear={handleDisableYear}
                    label={placeholder}
                    value={dayjs(value)}
                    onChange={onChange}
                  />
                ) : (
                  <DatePicker
                    sx={{
                      ' .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid ${BEIGE[300]} !important`,
                      },
                      '&.Mui-focused fieldset': {
                        border: `1px solid ${BEIGE[300]}`,
                      },
                      '&:hover fieldset': {
                        border: `1px solid ${BEIGE[300]}`,
                      },
                      ' .MuiInputLabel-root': {
                        color: `${BEIGE[300]} !important`,
                      },
                      '&.MuiPickersPopper-root': { border: '4px solid red' },
                    }}
                    slotProps={{
                      textField: { fullWidth: true },
                    }}
                    label={placeholder}
                    value={dayjs(value)}
                    onChange={onChange}
                    disableFuture
                    // shouldDisableYear={handleDisableFutureYear}
                  />
                )}

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
        </LocalizationProvider>
      </InputWrapper>
    </>
  );
}
