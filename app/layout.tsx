import { ThemeProvider } from '@/components/shared/theme/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { CustomProvider } from './provider'
import RootComponent from './rootComponent'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Siveing',
    description: 'Siveing',
}

/**
 * This line dynamic is used for disable prerender component
 */
const Header = dynamic(() => import('../layouts/Header'), { ssr: false });
const Footer = dynamic(() => import('../layouts/Footer'), { ssr: false });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className)}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <CustomProvider>
                        <RootComponent>
                            <Suspense fallback={<Loading />}>
                                <main className='container'>
                                    <Header />
                                    <section className='my-3'>
                                        {children}
                                    </section>
                                    <Footer />
                                </main>
                            </Suspense>
                        </RootComponent>
                    </CustomProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
