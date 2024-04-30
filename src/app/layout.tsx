import '@mantine/carousel/styles.css'
import {ColorSchemeScript, createTheme, MantineProvider} from '@mantine/core'
import '@mantine/core/styles.css'
import {FooterSimple} from 'components/footer'
import {HeaderSimple} from 'components/header'
import './globals.scss'

const theme = createTheme({
  /** Your theme override here */
})

export const metadata = {
  title: 'Farmfellow',
  description: 'Farmfellow is a platform for local farmers to sell their produce directly to consumers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSimple />
          {children}
          <FooterSimple />
        </MantineProvider>
      </body>
    </html >
  )
}
