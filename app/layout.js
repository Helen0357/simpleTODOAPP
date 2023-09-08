import './globals.css'


export const metadata = {
  title: 'To Do App',
  description: 'Siple Training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
