import './globals.css'

export const metadata = {
  title: 'New App',
  description: 'Created by Rashid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <nav>
        <h1>Navbar</h1>
      </nav >
        
        {children}</body>
    </html>
  )
}
