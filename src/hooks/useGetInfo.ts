import { useEffect, useRef, useState } from 'react'
import { api } from '../api/api'
import type { NumbersBody } from '../types/types'
import { notifications } from '@mantine/notifications'
import { changedUrl } from '../utils/changedUrl'

export const useGetInfo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState<string | null>(null)

  const controllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    return () => {
      controllerRef.current?.abort()
    }
  }, [])

  const getInfoFn = async (body: NumbersBody) => {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller
    setIsLoading(true)

    const url = changedUrl(body)
    try {
      const { data } = await api<string>(url, {
        signal: controller.signal,
      })
      if (data) {
        setInfo(data)
        setIsLoading(false)
      }
    } catch (error) {
      if (error instanceof Error) {
        notifications.show({
          title: 'Error',
          message: error.message,
          color: 'red',
        })
      }
      setInfo(null)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    info,
    getInfoFn,
  }
}
