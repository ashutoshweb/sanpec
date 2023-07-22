import { Header } from '@/components/Header'
import NavBar from "../custom/NavBar";
import {SanpecFooter} from "@/custom/SanpecFooter";

export function SanpecLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <SanpecFooter />
    </>
  )
}
