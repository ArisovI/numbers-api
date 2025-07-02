import { Button, Checkbox, NumberInput, Stack, Text } from '@mantine/core'
import { CategoriesSelect } from '../categories-select/categories-select'
import { useForm } from '@mantine/form'
import type { NumbersBody } from '../../types/types'
import { Search } from 'lucide-react'
import { DatePickerInput, YearPickerInput } from '@mantine/dates'

type Props = {
  submitFn: (body: NumbersBody) => Promise<void>
  isLoading: boolean
}

export const NumbersForm = ({ submitFn, isLoading }: Props) => {
  const form = useForm<NumbersBody>({
    initialValues: {
      category: 'trivia',
      number: null,
      isRandom: true,
    },
  })

  const handleSubmit = async (values: typeof form.values) => {
    await submitFn(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <CategoriesSelect form={form} />
        <Stack gap={10}>
          <Text>Select number:</Text>
          <Checkbox
            size="md"
            label="Use random number/date/year"
            {...form.getInputProps('isRandom', { type: 'checkbox' })}
            onChange={(e) => {
              const checked = e.currentTarget.checked
              form.setFieldValue('isRandom', checked)
              if (checked) {
                form.setFieldValue('number', null)
              }
            }}
          />
        </Stack>

        {!form.values.isRandom &&
          (form.values.category === 'year' ? (
            <YearPickerInput
              placeholder="Select year"
              size="md"
              valueFormat="YYYY"
              clearable
              {...form.getInputProps('number')}
            />
          ) : form.values.category === 'date' ? (
            <DatePickerInput
              placeholder="Select date"
              valueFormat="DD/MMMM"
              size="md"
              maxDate={new Date()}
              clearable
              {...form.getInputProps('number')}
            />
          ) : (
            <NumberInput
              placeholder="Enter the number"
              size="md"
              hideControls
              allowNegative={false}
              maxLength={4}
              {...form.getInputProps('number')}
              value={
                typeof form.values.number === 'number' ? form.values.number : ''
              }
            />
          ))}

        <Button
          type="submit"
          size="md"
          leftSection={<Search size={24} />}
          loading={isLoading}
          disabled={
            form.values.isRandom === false && form.values.number === null
          }
        >
          Get the fact
        </Button>
      </Stack>
    </form>
  )
}
