import type { Metadata, Viewport } from 'next'
import './globals.css'
import 'leaflet/dist/leaflet.css'

import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: 'Житловий комплекс «Volna»',
    description:
        'Cучасний комплекс для комфортного проживання в Києві, на закритій території з охороною, на березі Дніпра.',
    openGraph: {
        title: 'Житловий комплекс «Volna»',
        description:
            'Cучасний комплекс для комфортного проживання в Києві, на закритій території з охороною, на березі Дніпра.',
        images: [
            {
                url: '/gallery/gallery-2.avif',
                width: 1280,
                height: 853,
                alt: 'Житловий комплекс «Volna»',
            },
        ],
        type: 'website',
    },
    keywords: 'житловий комплекс, Київ, комфортне проживання, охорона, Дніпро, закрита територія',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang='uk'
            className={`${inter.variable} ${montserrat.variable}`}>
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
