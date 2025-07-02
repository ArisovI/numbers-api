import { Button, createTheme, Text, NumberInput } from '@mantine/core'
import { DatePickerInput, YearPickerInput } from '@mantine/dates'

export const theme = createTheme({
  components: {
    NumberInput: NumberInput.extend({
      defaultProps: {
        radius: 8,
      },
    }),

    Text: Text.extend({
      defaultProps: {
        fz: 14,
      },
    }),

    Button: Button.extend({
      defaultProps: {
        radius: 8,
      },
    }),

    DatePickerInput: DatePickerInput.extend({
      defaultProps: {
        radius: 8,
      },
    }),

    YearPickerInput: YearPickerInput.extend({
      defaultProps: {
        radius: 8,
      },
    }),
  },
})
