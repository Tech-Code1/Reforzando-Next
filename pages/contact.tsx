import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>

        <h1 className={'title'}>
            Ir a <Link href="/contact">Contact</Link>
        </h1>

        <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact.jsx</code>
        </p>

    </MainLayout>
  )
}
