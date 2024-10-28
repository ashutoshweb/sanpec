import { Footer } from '@/components/sanpec/eventing/Footer'
import { Header } from '@/components/sanpec/eventing/Header'

export function Layout({ children, showFooter = true }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
