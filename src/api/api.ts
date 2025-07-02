import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://numbersapi.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
