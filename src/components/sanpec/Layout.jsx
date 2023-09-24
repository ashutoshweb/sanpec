

import Footer from './Footer';
import { SanpecHeader } from './SanpecHeader';
import Head from 'next/head';



export function Layout({ children }) {
  return (
    <>
     <Head>
        <title>Sanpec</title>
        <meta
          name="description"
          content="Sanpec: Bringing Engineering Excellence. Improving Power Grid Reliability"
        />
      </Head>
      <SanpecHeader />
      <main>{children}</main>
      <Footer/>

     
    </>
  )
}

export default Layout;