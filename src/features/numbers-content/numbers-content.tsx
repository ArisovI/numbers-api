import { Stack, Text, Title } from '@mantine/core'
import { NumbersForm } from '../numbers-form/numbers-form'
import styles from './numbers-content.module.css'
import type { NumbersBody } from '../../types/types'
import { useGetInfo } from '../../hooks/useGetInfo'

export const NumbersContent = () => {
  const { isLoading, info, getInfoFn } = useGetInfo()

  const handleSubmitFn = async (body: NumbersBody) => {
    try {
      await getInfoFn(body)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return (
    <div className={styles.content}>
      <Stack gap={0} align="center">
        <Title order={1}>Numbers API</Title>
        <Text fz={16}>Find out interesting facts about numbers and dates</Text>
      </Stack>
      <NumbersForm submitFn={handleSubmitFn} isLoading={isLoading} />

      {info && (
        <Title order={4} ta="center" c="#1d4ed8" fw={500}>
          {info}
        </Title>
      )}
    </div>
  )
}
