import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import NavBar from "../custom/NavBar";
import SanpecFooter from "@/custom/SanpecFooter";

export function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <SanpecFooter />
    </>
  )
}
