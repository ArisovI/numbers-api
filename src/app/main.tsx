import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { theme } from '../theme/theme.ts'
import './global.css'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Notifications  />
    <App />
  </MantineProvider>,
)
