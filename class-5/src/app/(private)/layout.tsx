import "../globals.css"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1 className="bg-purple-500">THIS HEADER IS FOR PRIVATE ROUTE</h1>
        {children}
      </body>
    </html>
  )
}
