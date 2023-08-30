import { Footer } from '@/components/Footer'
import { BalridgeHeader1 } from '@/custom/BalridgeHeader1'
import { BalridgeHeader1x1 } from '@/custom/BalridgeHeader1x1'


export function Layout({ children }) {
  return (
    <>
      <BalridgeHeader1 />


      <main>{children}</main>
    </>
  )
}

export default Layout;