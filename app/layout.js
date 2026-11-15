export const metadata = {
  title: 'Kevin Doshi | Computer Vision Engineer',
  description: 'Portfolio of Kevin Doshi - AI/ML Specialist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script src="https://chatty4everyone.vercel.app/widget.js" data-bot="bot_9q2qfn7y5iri" async></script>
      </body>
    </html>
  )
}
