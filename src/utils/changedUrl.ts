import type { NumbersBody } from '../types/types'

export const changedUrl = (body: NumbersBody) => {
  if (body.isRandom) {
    return `random/${body.category}`
  }

  if (body.category === 'date') {
    const date = new Date(body.number as Date)
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${month}/${day}/date`
  }

  if (body.category === 'year') {
    const year = new Date(body.number as Date).getFullYear()

    return `${year}/year`
  }

  return `${body.number}/${body.category}`
}
