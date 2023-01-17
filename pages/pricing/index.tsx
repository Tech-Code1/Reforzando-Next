import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <>
        <h1 className={'title'}>
          Ir a <Link href="/">Pricing</Link>
        </h1>

        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
            {page}
    </MainLayout>
  )
}
