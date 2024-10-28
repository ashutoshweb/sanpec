


import SanpecFooter from './FooterSanpec';
import { SanpecHeader } from './SanpecHeader';
import Head from 'next/head';



export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SANPEC</title>
        <meta
          name="description"
          content="Sanpec: Bringing Engineering Excellence. Improving Power Grid Reliability"
        />
      </Head>
      <SanpecHeader />
      <main className='pt-28'>{children}</main>
      <SanpecFooter />
    </>
  )
}

export default Layout;