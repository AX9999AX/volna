import type { Metadata } from 'next'
import './globals.css'
import 'leaflet/dist/leaflet.css'

import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})
export const metadata: Metadata = {
    title: 'Житловий комплекс «Volna»',
    description:
        'Житловий комплекс «Volna» — сучасний комплекс для комфортного проживання в Києві, на закритій території з охороною, на березі Дніпра.',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang='ua'
            className={`${inter.variable} ${montserrat.variable}`}>
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
