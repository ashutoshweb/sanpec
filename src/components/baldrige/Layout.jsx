
import { BalridgeHeader1 } from '@/components/baldrige/BalridgeHeader1'
import Footer from './Footer';



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