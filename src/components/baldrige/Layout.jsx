import { Footer } from '@/components/Footer'
import { BalridgeHeader1 } from '@/components/baldrige/BalridgeHeader1'



export function Layout({ children }) {
  return (
    <>
      <BalridgeHeader1 />


      <main>{children}</main>

      <Footer/>
    </>
  )
}

export default Layout;