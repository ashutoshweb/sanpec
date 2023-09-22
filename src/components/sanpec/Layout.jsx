

import Footer from './Footer';
import { SanpecHeader } from './SanpecHeader';



export function Layout({ children }) {
  return (
    <>
      <SanpecHeader />
      <main>{children}</main>
      <Footer/>

     
    </>
  )
}

export default Layout;