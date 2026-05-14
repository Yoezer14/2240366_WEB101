import './globals.css'
import MainLayout from '../components/layout/MainLayout'

export const metadata = {
  title: 'TikTok Clone',
  description: 'TikTok clone project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}