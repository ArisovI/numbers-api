import { Flex, Stack, Text, Title } from '@mantine/core'
import { Calculator, Calendar, Calendar1, Search } from 'lucide-react'
import styles from './categories-select.module.css'
import type { UseFormReturnType } from '@mantine/form'
import type { NumbersBody } from '../../types/types'
import { randomId } from '@mantine/hooks'

const CATEGORIES = [
  {
    id: randomId(),
    name: 'Trivia',
    description: 'Interesting facts about numbers',
    icon: <Search />,
    value: 'trivia',
  },
  {
    id: randomId(),
    name: 'Math',
    description: 'Mathematical facts',
    icon: <Calculator />,
    value: 'math',
  },
  {
    id: randomId(),
    name: 'Date',
    description: 'Facts about dates',
    icon: <Calendar />,
    value: 'date',
  },
  {
    id: randomId(),
    name: 'Year',
    description: 'Facts about the years',
    icon: <Calendar1 />,
    value: 'year',
  },
]

type Props = {
  form: UseFormReturnType<NumbersBody>
}

export const CategoriesSelect = ({ form }: Props) => {
  return (
    <Stack gap={10}>
      <Text>Select category:</Text>
      <Flex gap={10}>
        {CATEGORIES.map((category) => (
          <div
            key={category.id}
            className={`${styles.category} ${
              form.getValues().category === category.value ? styles.active : ''
            } `}
            onClick={() => {
              form.setFieldValue('category', category.value)
              form.setFieldValue('number', null)
            }}
          >
            <div>{category.icon}</div>
            <Title order={5} c="#1d4ed8">
              {category.name}
            </Title>
            <Text c="gray">{category.description}</Text>
          </div>
        ))}
      </Flex>
    </Stack>
  )
}
