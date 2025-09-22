import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Godfred Okpoti - Lead Platform Engineer & DevOps Expert',
  description: 'DevOps Engineer with 9+ years of experience in AWS, CI/CD, and cloud infrastructure. Specialized in Kubernetes, Terraform, and modern DevOps practices.',
  keywords: 'DevOps Engineer, AWS, Kubernetes, Terraform, CI/CD, Cloud Infrastructure, Platform Engineer',
  authors: [{ name: 'Godfred Okpoti' }],
  creator: 'Godfred Okpoti',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://godfred-okpoti-portfolio.netlify.app',
    title: 'Godfred Okpoti - Lead Platform Engineer',
    description: 'DevOps Engineer with 9+ years of experience in AWS, CI/CD, and cloud infrastructure.',
    siteName: 'Godfred Okpoti Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godfred Okpoti - Lead Platform Engineer',
    description: 'DevOps Engineer with 9+ years of experience in AWS, CI/CD, and cloud infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          {/* Background Elements */}
          <div className="fixed inset-0 bg-mesh opacity-30 pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-800/20 pointer-events-none" />
          
          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>
          
          {/* Floating Particles */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}} />
          </div>
        </div>
      </body>
    </html>
  )
}